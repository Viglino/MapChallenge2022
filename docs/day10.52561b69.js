function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},s=e.parcelRequirecc54;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var s={id:t,exports:{}};return i[t]=s,e.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},e.parcelRequirecc54=s);var r=s("7qsnY"),o=s("20LS2"),a=s("kPMpK"),l=s("1B70O"),h=s("jZUWm");class d{constructor(t){t=t||{},this.color_=void 0!==t.color?t.color:null,this.lineCap_=t.lineCap,this.lineDash_=void 0!==t.lineDash?t.lineDash:null,this.lineDashOffset_=t.lineDashOffset,this.lineJoin_=t.lineJoin,this.miterLimit_=t.miterLimit,this.width_=t.width}clone(){const t=this.getColor();return new d({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getWidth(){return this.width_}setColor(t){this.color_=t}setLineCap(t){this.lineCap_=t}setLineDash(t){this.lineDash_=t}setLineDashOffset(t){this.lineDashOffset_=t}setLineJoin(t){this.lineJoin_=t}setMiterLimit(t){this.miterLimit_=t}setWidth(t){this.width_=t}}var c=d;class u{constructor(t){t=t||{},this.color_=void 0!==t.color?t.color:null}clone(){const t=this.getColor();return new u({color:Array.isArray(t)?t.slice():t||void 0})}getColor(){return this.color_}setColor(t){this.color_=t}}var p=u,g=s("4GUat"),f=s("fnScq"),v=(f=s("fnScq"),class extends f.default{constructor(t){"string"==typeof t&&(t={feoperation:t}),super(),t&&t.feoperation?(this._name=t.feoperation,this.element=document.createElementNS(v.NS||"http://www.w3.org/2000/svg",this._name),this.setProperties(t),t.operations instanceof Array&&this.appendChild(t.operations)):console.error("[SVGOperation]: no operation defined.")}getName(){return this._name}set(t,e){/^feoperation$|^operations$/.test(t)||(super.set(t,e),this.element.setAttribute(t,e))}setProperties(t){for(var e in t=t||{})this.set(e,t[e])}geElement(){return this.element}appendChild(t){t instanceof Array?t.forEach(function(t){this.appendChild(t)}.bind(this)):(t instanceof v||(t=new v(t)),this.element.appendChild(t.geElement()))}}),m=v,y=class extends f.default{constructor(t){t=t||{},super(),y.prototype.svg||(y.prototype.svg=document.createElementNS(this.NS,"svg"),y.prototype.svg.setAttribute("version","1.1"),y.prototype.svg.setAttribute("width",0),y.prototype.svg.setAttribute("height",0),y.prototype.svg.style.position="absolute",document.body.appendChild(y.prototype.svg)),this.element=document.createElementNS(this.NS,"filter"),this._id=t.id||"_ol_SVGFilter_"+y.prototype._id++,this.element.setAttribute("id",this._id),t.color&&this.element.setAttribute("color-interpolation-filters",t.color),t.operation&&this.addOperation(t.operation),y.prototype.svg.appendChild(this.element)}getId(){return this._id}remove(){this.element.remove()}addOperation(t){t instanceof Array?t.forEach(function(t){this.addOperation(t)}.bind(this)):(t instanceof m||(t=new m(t)),this.element.appendChild(t.geElement()))}grayscale(t){this.addOperation({feoperation:"feColorMatrix",type:"saturate",values:t||0})}luminanceToAlpha(t){t=t||{},this.addOperation({feoperation:"feColorMatrix",type:"luminanceToAlpha"}),t.gamma&&this.addOperation({feoperation:"feComponentTransfer",operations:[{feoperation:"feFuncA",type:"gamma",amplitude:t.gamma,exponent:1,offset:0}]})}applyTo(t){var e=document.createElement("CANVAS");return e.width=t.naturalWidth||t.width,e.height=t.naturalHeight||t.height,e.getContext("2d").filter="url(#"+this.getId()+")",e.getContext("2d").drawImage(t,0,0),e}};y.prototype.NS="http://www.w3.org/2000/svg",y.prototype.svg=null,y.prototype._id=0;var _=y,C=class extends _{constructor(t){super({id:(t=t||{}).id}),this.addOperation({feoperation:"feTurbulence",numOctaves:4,seed:0,type:"fractalNoise",baseFrequency:.2/(t.scale||1)}),this.addOperation({feoperation:"feDiffuseLighting","lighting-color":"rgb(255,255,255)",surfaceScale:1.5,kernelUnitLength:.01,diffuseConstant:1.1,result:"paper",operations:[{feoperation:"feDistantLight",elevation:t.light||50,azimuth:75}]}),this.addOperation({feoperation:"feBlend",in:"SourceGraphic",in2:"paper",mode:"multiply"})}setLight(t){this.element.querySelector("feDistantLight").setAttribute("elevation",t)}},A=s("agkzb"),w=class extends A.default{constructor(t){super(),this._svg={},t&&(t instanceof Array||(t=[t]),t.forEach(function(t){this.addSVGFilter(t)}.bind(this)))}addSVGFilter(t){var e="#"+t.getId();this._svg[e]=1,this.dispatchEvent({type:"propertychange",key:"svg",oldValue:this._svg})}removeSVGFilter(t){var e="#"+t.getId();delete this._svg[e],this.dispatchEvent({type:"propertychange",key:"svg",oldValue:this._svg})}precompose(){}postcompose(t){var e=[];for(var i in this._svg)e.push("url("+i+")");e=e.join(" ");var n=document.createElement("canvas");n.width=t.context.canvas.width,n.height=t.context.canvas.height,n.getContext("2d").drawImage(t.context.canvas,0,0),e&&(t.context.save(),t.context.clearRect(0,0,n.width,n.height),t.context.filter=e,t.context.drawImage(n,0,0),t.context.restore())}},x=s("dUROT"),b=s("6yJ0x"),L=s("btuox"),S=s("7TB1l"),F=s("cgPpQ"),M=s("fvrVu"),E=s("6pyIt"),O=(S=s("7TB1l"),F=s("cgPpQ"),s("dEQmT")),P=s("hvEnP"),D=s("23ytq");M.default.prototype.cspline=function(t){return this.calcCSpline_?(this.csplineGeometryRevision==this.getRevision()&&this.csplineOption==JSON.stringify(t)||(this.csplineGeometry_=this.calcCSpline_(t),this.csplineGeometryRevision=this.getRevision(),this.csplineOption=JSON.stringify(t)),this.csplineGeometry_):this},E.default.prototype.calcCSpline_=function(t){for(var e=[],i=this.getGeometries(),n=0;n<i.length;n++)e.push(i[n].cspline(t));return new(0,E.default)(e)},S.default.prototype.calcCSpline_=function(t){for(var e=[],i=this.getLineStrings(),n=0;n<i.length;n++)e.push(i[n].cspline(t).getCoordinates());return new(0,S.default)(e)},F.default.prototype.calcCSpline_=function(t){for(var e=[],i=this.getCoordinates(),n=0;n<i.length;n++)e.push(new(0,P.default)(i[n]).cspline(t).getCoordinates());return new(0,F.default)(e)},O.default.prototype.calcCSpline_=function(t){for(var e=[],i=this.getPolygons(),n=0;n<i.length;n++)e.push(i[n].cspline(t).getCoordinates());return new(0,O.default)(e)};var R=function(t,e){e||(e={});var i="number"==typeof e.tension?e.tension:.5,n=0,s=t[0];t.forEach((function(t){n+=(0,D.ol_coordinate_dist2d)(s,t),s=t}));var r,o,a,l,h,d,c,u,p,g,f,v,m,y,_=e.resolution||n/t.length/(e.pointsPerSeg||10),C=[];function A(t,e,i,n){var s=i-t,r=n-e;return Math.sqrt(s*s+r*r)}for(r=t.slice(0),t.length>2&&t[0][0]==t[t.length-1][0]&&t[0][1]==t[t.length-1][1]?(r.unshift(t[t.length-2]),r.push(t[1])):(r.unshift(t[0]),r.push(t[t.length-1])),y=1;y<r.length-2;y++){var w=A(r[y][0],r[y][1],r[y+1][0],r[y+1][1]),x=Math.round(w/_),b=1;if(e.normalize){w=A(r[y+1][0],r[y+1][1],r[y-1][0],r[y-1][1]);var L=A(r[y+2][0],r[y+2][1],r[y][0],r[y][1]);b=w<L?w/L:L/w}for(l=(r[y+1][0]-r[y-1][0])*i*b,h=(r[y+2][0]-r[y][0])*i*b,d=(r[y+1][1]-r[y-1][1])*i*b,c=(r[y+2][1]-r[y][1])*i*b,m=0;m<=x;m++)v=m/x,u=2*Math.pow(v,3)-3*Math.pow(v,2)+1,p=-2*Math.pow(v,3)+3*Math.pow(v,2),g=Math.pow(v,3)-2*Math.pow(v,2)+v,f=Math.pow(v,3)-Math.pow(v,2),o=u*r[y][0]+p*r[y+1][0]+g*l+f*h,a=u*r[y][1]+p*r[y+1][1]+g*d+f*c,o&&a&&C.push([o,a])}return C};P.default.prototype.calcCSpline_=function(t){var e=this.getCoordinates(),i=R(e,t);return new(0,P.default)(i)};D=s("23ytq"),S=s("7TB1l"),F=s("cgPpQ");var I=s("ljDIj"),J=(F=s("cgPpQ"),s("63y7W")),q=s("96blb"),B=s("jZquI"),G=s("ee3b9"),T=s("kBSVF"),N=s("ec4vu"),U=s("iTdJV"),V=s("4NB4B"),k=s("2cCpz"),Q=s("1jq6X"),W=s("88eMt"),j=s("7Ifzt"),z=s("exEDy");class X extends J.default{constructor(t,e,i){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!i&&!Array.isArray(t[0])){let n=this.getLayout();const s=t,r=[],o=[];for(let t=0,e=s.length;t<e;++t){const e=s[t];0===t&&(n=e.getLayout());const i=r.length,a=e.getEnds();for(let t=0,e=a.length;t<e;++t)a[t]+=i;(0,T.extend)(r,e.getFlatCoordinates()),o.push(a)}e=n,t=r,i=o}void 0!==e&&i?(this.setFlatCoordinates(e,t),this.endss_=i):this.setCoordinates(t,e)}appendPolygon(t){let e;if(this.flatCoordinates){const i=this.flatCoordinates.length;(0,T.extend)(this.flatCoordinates,t.getFlatCoordinates()),e=t.getEnds().slice();for(let t=0,n=e.length;t<n;++t)e[t]+=i}else this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();this.endss_.push(e),this.changed()}clone(){const t=this.endss_.length,e=new Array(t);for(let i=0;i<t;++i)e[i]=this.endss_[i].slice();const i=new X(this.flatCoordinates.slice(),this.layout,e);return i.applyProperties(this),i}closestPointXY(t,e,i,n){return n<(0,B.closestSquaredDistanceXY)(this.getExtent(),t,e)?n:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,q.multiArrayMaxSquaredDelta)(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,q.assignClosestMultiArrayPoint)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,i,n))}containsXY(t,e){return(0,j.linearRingssContainsXY)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)}getArea(){return(0,Q.linearRingss)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(t){let e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),(0,k.orientLinearRingsArray)(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,(0,U.inflateMultiCoordinatesArray)(e,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const t=(0,W.linearRingss)(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=(0,N.getInteriorPointsOfMultiArray)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new(0,I.default)(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const t=this.flatCoordinates;(0,k.linearRingssAreOriented)(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,k.orientLinearRingsArray)(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){const e=[],i=[];return e.length=(0,z.quantizeMultiArray)(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),e,0,i),new X(e,"XY",i)}getPolygon(t){if(t<0||this.endss_.length<=t)return null;let e;if(0===t)e=0;else{const i=this.endss_[t-1];e=i[i.length-1]}const i=this.endss_[t].slice(),n=i[i.length-1];if(0!==e)for(let t=0,n=i.length;t<n;++t)i[t]-=e;return new(0,F.default)(this.flatCoordinates.slice(e,n),this.layout,i)}getPolygons(){const t=this.layout,e=this.flatCoordinates,i=this.endss_,n=[];let s=0;for(let r=0,o=i.length;r<o;++r){const o=i[r].slice(),a=o[o.length-1];if(0!==s)for(let t=0,e=o.length;t<e;++t)o[t]-=s;const l=new(0,F.default)(e.slice(s,a),t,o);n.push(l),s=a}return n}getType(){return"MultiPolygon"}intersectsExtent(t){return(0,V.intersectsLinearRingMultiArray)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);const i=(0,G.deflateMultiCoordinatesArray)(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===i.length)this.flatCoordinates.length=0;else{const t=i[i.length-1];this.flatCoordinates.length=0===t.length?0:t[t.length-1]}this.changed()}}var Y=X;D=s("23ytq");Y.prototype.scribbleFill=function(t){var e,i,n,s=[],r=this.getPolygons();for(e=0;i=r[e];e++){var o=i.scribbleFill(t);o&&s.push(o)}if(!s.length)return null;var a,l=s[0];for(e=0;n=s[e];e++){a=n.getLineStrings();for(var h=0;h<a.length;h++)l.appendLineString(a[h])}return l},F.default.prototype.scribbleFill=function(t){var e,i,n,s=t.interval,r=t.angle||Math.PI/2,o=this.clone();o.rotate(r,[0,0]);var a=o.getCoordinates(),l=a[0];for(e=1;e<a.length;e++)l.push([]),l=l.concat(a[e]);for(var h=o.getExtent(),d=[],c=(Math.floor(h[1]/s)+1)*s;c<h[3];c+=s)n=(0,D.ol_coordinate_splitH)(l,c,e),d=d.concat(n);if(!d.length)return null;var u=l.length-1,p=d[0][0].index;for(i=0;n=d[i];i++)d[i][0].index=(d[i][0].index-p+u)%u,d[i][1].index=(d[i][1].index-p+u)%u;for(var g=[];;){for(i=0;(n=d[i])&&n[0].done;i++);if(!n)break;for(var f=[];n;){n[0].done=!0,f.push(n[0].pt),f.push(n[1].pt);for(var v=n[0].pt[1]+s,m=1/0,y=null;d[i]&&!(d[i][0].pt[1]>v);){if(d[i][0].pt[1]===v){var _=Math.min((d[i][0].index-n[0].index+u)%u,(n[0].index-d[i][0].index+u)%u),C=Math.min((n[1].index-n[0].index+u)%u,(n[0].index-n[1].index+u)%u);_<m&&_<C&&(m=_,y=d[i][0].done?null:d[i])}i++}n=y}f.length&&g.push(f)}if(!g.length)return null;var A=new(0,S.default)(g);return A.rotate(-r,[0,0]),A.cspline({pointsPerSeg:8,tension:.9})},Y.prototype.scribbleFill=function(t){var e,i,n,s=[],r=this.getPolygons();for(e=0;i=r[e];e++){var o=i.scribbleFill(t);o&&s.push(o)}if(!s.length)return null;var a,l=s[0];for(e=0;n=s[e];e++){a=n.getLineStrings();for(var h=0;h<a.length;h++)l.appendLineString(a[h])}return l},F.default.prototype.scribbleFill=function(t){var e,i,n,s=t.interval,r=t.angle||Math.PI/2,o=this.clone();o.rotate(r,[0,0]);var a=o.getCoordinates(),l=a[0];for(e=1;e<a.length;e++)l.push([]),l=l.concat(a[e]);for(var h=o.getExtent(),d=[],c=(Math.floor(h[1]/s)+1)*s;c<h[3];c+=s)n=(0,D.ol_coordinate_splitH)(l,c,e),d=d.concat(n);if(!d.length)return null;var u=l.length-1,p=d[0][0].index;for(i=0;n=d[i];i++)d[i][0].index=(d[i][0].index-p+u)%u,d[i][1].index=(d[i][1].index-p+u)%u;for(var g=[];;){for(i=0;(n=d[i])&&n[0].done;i++);if(!n)break;for(var f=[];n;){n[0].done=!0,f.push(n[0].pt),f.push(n[1].pt);for(var v=n[0].pt[1]+s,m=1/0,y=null;d[i]&&!(d[i][0].pt[1]>v);){if(d[i][0].pt[1]===v){var _=Math.min((d[i][0].index-n[0].index+u)%u,(n[0].index-d[i][0].index+u)%u),C=Math.min((n[1].index-n[0].index+u)%u,(n[0].index-n[1].index+u)%u);_<m&&_<C&&(m=_,y=d[i][0].done?null:d[i])}i++}n=y}f.length&&g.push(f)}if(!g.length)return null;var A=new(0,S.default)(g);return A.rotate(-r,[0,0]),A.cspline({pointsPerSeg:8,tension:.9})};var H=function(t,e){switch(t.getType()){case"Polygon":return F.default.prototype.scribbleFill.call(t,e);case"MultiPolygon":return Y.prototype.scribbleFill.call(t,e);default:return t}};function K(t,e){const i=[[31,119,180],[174,199,232],[255,127,14],[255,187,120],[44,160,44],[152,223,138],[214,39,40],[255,152,150],[148,103,189],[197,176,213],[140,86,75],[196,156,148],[227,119,194],[247,182,210],[127,127,127],[199,199,199],[188,189,34],[219,219,141],[23,190,207],[158,218,229]],n=Math.random()*Math.PI;t.set("angle",n);const s=i[Math.floor(Math.random()*i.length)];t.set("color",s);const r=Math.max(8e4,8*e),o={step:r,geom:H(t.getGeometry(),{interval:r,angle:n})};t._scribble=o}function Z(t,e){const i=t.get("angle"),n=t.get("color"),s=Math.max(8e4,8*e),r=Math.max(2,2e4/e),o=[new(0,g.default)({stroke:new c({width:.5,color:n}),fill:new p({color:"transparent"})})];let a=t._scribble;return a&&a.step!==s&&(a={step:s,geom:H(t.getGeometry(),{interval:s,angle:i})},t._scribble=a),a&&o.push(new(0,g.default)({stroke:new c({width:r,color:n}),geometry:a.geom})),o}(0,h.default)(t('<div> <h2> Day 10: <strike>bad</strike> child map! </h2> <p> Use <a href="http://viglino.github.io/ol-ext/doc/doc-pages/ol.filter.Mask.html" target="_new"> ol-ext Scribble fill </a> to color countries on the map. </p> </div>'));var $=new(0,r.default)({source:new(0,o.default)({url:"https://openlayers.org/en/v4.6.5/examples/data/geojson/countries.geojson",format:new(0,a.default)}),style:Z});l.default.addLayer($);var tt=new w,et=new C({scale:2,light:60});tt.addSVGFilter(et),$.addFilter(tt),l.default.addInteraction(new(0,b.default)({cursor:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAihJREFUWEftlr/LEnEcx193KTQ89JQEDSKELi03BIbQ1uKQptAQYqtbQtDUIBHV2BCIgejk4B8guuhSBs8YYUGoCEa2nSbR8JCHxsfnDtSyu+qo5b7LHXfv7+f9+r6/P+4UnLUacAk4B2jAsbNu9irFXrJWjIE4cNfU33HYz1ZmB6ACOeAxcAE4DbwD7gEN2+oOBPsAXgHPgPM+n++5YRgCkgRaQB0YAA8d1LeV7AIcAq+BsKIoH0Oh0KGmaWfC4TDFYlGKCcQVs6rrAE+A+4CqqurnWCymNhqNs9FolHa7zXA4JJkU/3UCQzcTkFEfmascRVGWmUzmuF6vHwwGA+LxOOOxrEFotVqbELdt83UgkCkwTN0pueZyuVWlUllPTbVapdvtUqvJLjxpGxDWmnBgs18iRivrdSAQYDqdbqlHoxGRSGTrmZsQWwCaptHr9RyNyC2ILQBxbjabJBKJfwaxC/BWjlqnEOVymXw+/80wjJvmGeEIfFO0C/ACeHoSxK+TKBQKq1Kp9Gk+n98A3vy2s9lBAJaAdSAJwDVA5mAvRDab/drpdN7run4d0P/UXPqJ8UvgKuADLAB59wOEruukUql5v9/vzGazW39jbPW1Ri57L7ADsAURDAZJp9NfJpNJcblcFtwwtxKQ62XzG/ABuLhTfJ2E3+83FotFHii7Zb4JIPePgAd7ilv7Ur6Grja7/wFXzX5WzAPwEvAS8BLwEvAS+O8JfAcOZLAhCzd6QAAAAABJRU5ErkJggg==") 0 13, auto'}));const it=new(0,x.default)({style:Z,condition:L.click});function nt(){const t=l.default.getView().calculateExtent(),e=[(t[0]+t[2])/2+(Math.random()-.5)*(t[2]-t[0])/2,(t[1]+t[3])/2+(Math.random()-.5)*(t[3]-t[1])/2],i=l.default.getFeaturesAtPixel(l.default.getPixelFromCoordinate(e)).pop();i?(K(i,l.default.getView().getResolution()),st=setTimeout(nt,2e3*Math.random()+500)):st=setTimeout(nt)}l.default.addInteraction(it),it.on("select",(t=>{t.selected.forEach((t=>{K(t,l.default.getView().getResolution()),clearTimeout(st),st=setTimeout(nt,2e3*Math.random()+3e3)})),it.getFeatures().clear()}));let st=setTimeout(nt,1e3);