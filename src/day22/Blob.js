import ol_interaction_Clip from 'ol-ext/interaction/Clip'
// import ol_coordinate_cspline from 'ol-ext/render/Cspline'

var ol_coordinate_dist2d = function(p1, p2) {
  var dx = p1[0]-p2[0];
  var dy = p1[1]-p2[1];
  return Math.sqrt(dx*dx+dy*dy);
}

/** Calculate cspline on coordinates
 * @param {Array<ol_geom_Geometry.coordinate>} line
 * @param {} options
 *	@param {Number} options.tension a [0,1] number / can be interpreted as the "length" of the tangent, default 0.5
 *  @param {Number} options.resolution size of segment to split
 *	@param {Integer} options.pointsPerSeg number of points per segment to add if no resolution is provided, default add 10 points per segment
 * @return {Array<ol_geom_Geometry.coordinate>}
 */
 var ol_coordinate_cspline = function(line, options) {
  if (!options) options={};
  var tension = typeof options.tension === "number" ? options.tension : 0.5;
  var length = 0;
  var p0 = line[0];
  line.forEach(function(p) {
    length += ol_coordinate_dist2d(p0, p);
    p0 = p;
  })
  var resolution = options.resolution || (length / line.length / (options.pointsPerSeg || 10));

  var pts, res = [],    // clone array
    x, y,               // our x,y coords
    t1x, t2x, t1y, t2y,	// tension vectors
    c1, c2, c3, c4,     // cardinal points
    st, t, i;           // steps based on num. of segments

  // clone array so we don't change the original
  //
  pts = line.slice(0);

  // The algorithm require a previous and next point to the actual point array.
  // Check if we will draw closed or open curve.
  // If closed, copy end points to beginning and first points to end
  // If open, duplicate first points to beginning, end points to end
  if (line.length>2 && line[0][0]==line[line.length-1][0] && line[0][1]==line[line.length-1][1]) {
    pts.unshift(line[line.length-2]);
    pts.push(line[1]);
  } else {
    pts.unshift(line[0]);
    pts.push(line[line.length-1]);
  }

  // ok, lets start..
  function dist2d(x1, y1, x2, y2) {
    var dx = x2-x1;
    var dy = y2-y1;
    return Math.sqrt(dx*dx+dy*dy);
  }

  // 1. loop goes through point array
  // 2. loop goes through each segment between the 2 pts + 1e point before and after
  for (i=1; i < (pts.length - 2); i++) {
    var d1 = dist2d (pts[i][0], pts[i][1], pts[i+1][0], pts[i+1][1]);
    var numOfSegments = Math.round(d1/resolution);
    
    var d=1;
    if (options.normalize) {
      d1 = dist2d (pts[i+1][0], pts[i+1][1], pts[i-1][0], pts[i-1][1]);
      var d2 = dist2d (pts[i+2][0], pts[i+2][1], pts[i][0], pts[i][1]);
      if (d1<d2) d = d1/d2;
      else d = d2/d1;
    }

    // calc tension vectors
    t1x = (pts[i+1][0] - pts[i-1][0]) * tension *d;
    t2x = (pts[i+2][0] - pts[i][0]) * tension *d;

    t1y = (pts[i+1][1] - pts[i-1][1]) * tension *d;
    t2y = (pts[i+2][1] - pts[i][1]) * tension *d;

    for (t=0; t <= numOfSegments; t++) {
      // calc step
      st = t / numOfSegments;

      // calc cardinals
      c1 =   2 * Math.pow(st, 3)  - 3 * Math.pow(st, 2) + 1; 
      c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2); 
      c3 = 	   Math.pow(st, 3)    - 2 * Math.pow(st, 2) + st; 
      c4 = 	   Math.pow(st, 3)    - 	  Math.pow(st, 2);

      // calc x and y cords with common control vectors
      x = c1 * pts[i][0] + c2 * pts[i+1][0] + c3 * t1x + c4 * t2x;
      y = c1 * pts[i][1] + c2 * pts[i+1][1] + c3 * t1y + c4 * t2y;

      //store points in array
      if (x && y) res.push([x,y]);
    }
  }

  return res;
};

/** Blob interaction to clip layers in a blob
 * @constructor
 * @extends {ol_interaction_Clip}
 * @param {*} options blob  options
 *  @param {number} options.radius radius of the clip, default 100
 *	@param {ol.layer|Array<ol.layer>} options.layers layers to clip
 *	@param {number} [options.stiffness=20] spring stiffness coef, default 20
 *	@param {number} [options.damping=7] spring damping coef
 *	@param {number} [options.mass=1] blob mass
 *	@param {number} [options.points=10] number of points for the blob polygon
 *	@param {number} [options.tension=.5] blob polygon spline tension 
 *	@param {number} [options.fuss] bob fussing factor
 *	@param {number} [options.amplitude=1] blob deformation amplitude factor
 */
var ol_interaction_Blob = class olinteractionBlob extends ol_interaction_Clip {
  constructor(options) {
    super(options);
  }
  /** Animate the blob
   * @private
   */
  precompose_(e) {
    if (!this.getActive())
      return;
    var ctx = e.context;
    var ratio = e.frameState.pixelRatio;

    ctx.save();
    if (!this.pos) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.clip();
      return;
    }

    var pt = [this.pos[0], this.pos[1]];
    var tr = e.inversePixelTransform;
    if (tr) {
      pt = [
        (pt[0] * tr[0] - pt[1] * tr[1] + tr[4]),
        (-pt[0] * tr[2] + pt[1] * tr[3] + tr[5])
      ];
    } else {
      pt[0] *= ratio;
      pt[1] *= ratio;
    }

    // Time laps
    if (!this.frame)
      this.frame = e.frameState.time;
    var dt = e.frameState.time - this.frame;
    this.frame = e.frameState.time;
    // Blob position
    pt = this._getCenter(pt, dt);
    // Blob geom
    var blob = this._calculate(dt);
    // Draw
    var p = blob[0];
    ctx.beginPath();
    ctx.moveTo(pt[0] + p[0], pt[1] + p[1]);
    for (var i = 1; p = blob[i]; i++) {
      ctx.lineTo(pt[0] + p[0], pt[1] + p[1]);
    }
    ctx.clip();
    e.frameState.animate = true;
  }
  /** Get blob center with kinetic
   * @param {number} dt0 time laps
   * @private
   */
  _getCenter(pt, dt0) {
    if (!this._center) {
      this._center = pt;
      this._velocity = [0, 0];
    } else {
      var k = this.get('stiffness') || 20; // stiffness
      var d = -1 * (this.get('damping') || 7); // damping
      var mass = Math.max(this.get('mass') || 1, .1);
      var dt = Math.min(dt0 / 1000, 1 / 30);

      var fSpring = [
        k * (pt[0] - this._center[0]),
        k * (pt[1] - this._center[1])
      ];
      var fDamping = [
        d * this._velocity[0],
        d * this._velocity[1]
      ];

      var accel = [
        (fSpring[0] + fDamping[0]) / mass,
        (fSpring[1] + fDamping[1]) / mass
      ];

      this._velocity[0] += accel[0] * dt;
      this._velocity[1] += accel[1] * dt;

      this._center[0] += this._velocity[0] * dt;
      this._center[1] += this._velocity[1] * dt;
    }
    return this._center;
  }
  /** Calculate the blob geom
   * @param {number} dt time laps
   * @returns {Array<ol_coordinate>}
   * @private
   */
  _calculate(dt) {
    var i, nb = this.get('points') || 10;
    if (!this._waves || this._waves.length !== nb) {
      this._waves = [];
      for (i = 0; i < nb; i++) {
        this._waves.push({
          angle: Math.random() * Math.PI,
          noise: Math.random()
        });
      }
    }
    var blob = [];
    var speed = (this._velocity[0] * this._velocity[0] + this._velocity[1] * this._velocity[1]) / 500;
    this._rotation = (this._rotation || 0) + (this._velocity[0] > 0 ? 1 : -1) * Math.min(.015, speed / 70000 * dt);
    for (i = 0; i < nb; i++) {
      var angle = i * 2 * Math.PI / nb + this._rotation;
      var radius = this.radius + Math.min(this.radius, speed);
      var delta = Math.cos(this._waves[i].angle) * radius / 4 * this._waves[i].noise * (this.get('amplitude') || 1);
      blob.push([
        (this.radius + delta) * Math.cos(angle),
        (this.radius + delta) * Math.sin(angle)
      ]);
      // Add noise
      this._waves[i].angle += (Math.PI + Math.random() + speed / 200) / 350 * dt * (this.get('fuss') || 1);
      this._waves[i].noise = Math.min(1, Math.max(0, this._waves[i].noise + (Math.random() - .5) * .1 * (this.get('fuss') || 1)));
    }
    blob.push(blob[0]);
    return ol_coordinate_cspline(blob, { tension: this.get('tension') });
  }
}

export default ol_interaction_Blob
