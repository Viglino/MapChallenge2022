function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequirecc54;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequirecc54=a);var i,s=a("6gELa"),o=a("6nlvT"),l=a("20LS2"),u=a("iGyOD"),d=a("cgPpQ"),h=a("jZquI"),f=(h=a("jZquI"),a("23ytq")),c=a("fvrVu");!function(){var e=function(e,t,r){return(e[0]-r[0])*(t[1]-r[1])-(e[1]-r[1])*(t[0]-r[0])<=0};i=function(t){var r;t.sort((function(e,t){return e[0]==t[0]?e[1]-t[1]:e[0]-t[0]}));var n=[];for(r=0;r<t.length;r++){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],t[r]);)n.pop();n.push(t[r])}var a=[];for(r=t.length-1;r>=0;r--){for(;a.length>=2&&e(a[a.length-2],a[a.length-1],t[r]);)a.pop();a.push(t[r])}return a.pop(),n.pop(),n.concat(a)};var t=function(e){var r,n,a=[];switch(e.getType()){case"Point":a.push(e.getCoordinates());break;case"LineString":case"LinearRing":case"MultiPoint":a=e.getCoordinates();break;case"MultiLineString":for(n=e.getLineStrings(),r=0;r<n.length;r++)a.concat(t(n[r]));break;case"Polygon":a=t(e.getLinearRing(0));break;case"MultiPolygon":for(n=e.getPolygons(),r=0;r<n.length;r++)a.concat(t(n[r]));break;case"GeometryCollection":for(n=e.getGeometries(),r=0;r<n.length;r++)a.concat(t(n[r]))}return a};c.default.prototype.convexHull=function(){return i(t(this))}}();var g=i,p=class extends l.default{constructor(e){var t=(e=e||{}).source;delete e.source,super(e),this._nodes=t,this.hull=[],this._nodes.on("addfeature",this._onAddNode.bind(this)),this._nodes.on("removefeature",this._onRemoveNode.bind(this)),this.set("epsilon",e.epsilon||1e-4)}clear(e){super.clear(e),this.getNodeSource().clear(e)}_addTriangle(e){e.push(e[0]);var t=new(0,u.default)(new(0,d.default)([e]));return this.addFeature(t),this.flip.push(t),t}getNodes(){return this._nodes.getFeatures()}getNodeSource(){return this._nodes}_onRemoveNode(e){var t=e.feature.getGeometry().getCoordinates();if(t&&!this.getNodesAt(t).length){var r,n=this.getTrianglesAt(t);this.flip=[];for(var a=[];n.length;){var i=n.pop();this.removeFeature(i),i=i.getGeometry().getCoordinates()[0];var s=[];for(r=0;r<3;r++)l=i[r],(0,f.ol_coordinate_equal)(l,t)||s.push(l);a.push(s)}for(s=a.pop(),r=0;;){var o=a[r];if(v(o[0],o[1],0)||v(o[1],o[0],0)||v(o[0],o[1],s.length-1)||v(o[1],o[0],s.length-1)?(a.splice(r,1),r=0):r++,!a.length)break;if(r>=a.length)throw"[DELAUNAY:removePoint] No edge found"}var l,u=(0,f.ol_coordinate_equal)(s[0],s[s.length-1]);for(u&&s.pop();l=this.hull[r];r++)if((0,f.ol_coordinate_equal)(t,l)){this.hull.splice(r,1);break}this.hull=g(this.hull.concat(s));var d,h=function(e){for(var t,r=0,n=0;n<e.length;n++)r+=(e[t=(n+1)%e.length][0]-e[n][0])*(e[t][1]+e[n][1]);return r>=0?1:-1},c=s.slice();for(u?d=h(s):(c.push(t),d=h(c)),r=0;r<=s.length+1&&!(s.length<3);r++){var p=[s[r%s.length],s[(r+1)%s.length],s[(r+2)%s.length]];if(h(p)===d){for(var _=!0,m=r+3;m<r+s.length;m++)if(this.inCircle(s[m%s.length],p)){_=!1;break}_&&(this._addTriangle(p),s.splice((r+1)%s.length,1),r=-1)}}this.flipTriangles()}function v(e,t,r){return!!(0,f.ol_coordinate_equal)(e,s[r])&&(r?s.push(t):s.unshift(t),!0)}}_onAddNode(e){var t,r,n=e.feature;if("Point"===n.getGeometry().getType()){this.flip=[];var a=this.getNodes(),i=n.getGeometry().getCoordinates();if(this.getNodesAt(i).length>1)this._nodes.removeFeature(n);else if(a.length<=3){if(3===a.length){var s=[];for(t=0;t<3;t++)s.push(a[t].getGeometry().getCoordinates());this._addTriangle(s),this.hull=g(s)}}else{var o=this.getFeaturesAtCoordinate(i)[0];if(o){this.removeFeature(o),o.set("del",!0);var l=o.getGeometry().getCoordinates()[0];for(t=0;t<3;t++)this._addTriangle([i,l[t],l[(t+1)%3]])}else{var u=this.hull.slice();for(u.push(i),u=g(u),t=0;(r=u[t])&&!(0,f.ol_coordinate_equal)(r,i);t++);var d=u[t=0!==t?t-1:u.length-1],h=u[(t+2)%u.length];for(t=0;(r=this.hull[t])&&!(0,f.ol_coordinate_equal)(r,d);t++);for(;;){if(t>1e3){console.error("[DELAUNAY:addPoint] Too many iterations");break}if(t++,r=this.hull[t%this.hull.length],this._addTriangle([i,r,d]),d=r,r[0]===h[0]&&r[1]===h[1])break}this.hull=u}this.flipTriangles()}}else this._nodes.removeFeature(n)}flipTriangles(){for(var e,t=1e3;this.flip.length;){if(t--<0){console.error("[DELAUNAY:flipTriangles] Too many iterations");break}var r=this.flip.pop();if(!r.get("del"))for(var n=r.getGeometry().getCoordinates()[0],a=0;a<3;a++){var i=[(n[(a+1)%3][0]+n[a][0])/2,(n[(a+1)%3][1]+n[a][1])/2],s=this.getTrianglesAt(i),o=null;if(s.length>1){var l=s[0].getGeometry().getCoordinates()[0],u=s[1].getGeometry().getCoordinates()[0];for(e=0;e<u.length;e++)if(!this._ptInTriangle(u[e],l)){o=u[e];break}}if(o&&this.inCircle(o,l)){var d;for(e=0;e<l.length;e++)if(!this._ptInTriangle(l[e],u)){d=l.splice(e,1)[0];break}if(this.intersectSegs([o,d],l)){for(;s.length;){var h=s.pop();h.set("del",!0),this.removeFeature(h)}this._addTriangle([o,d,l[0]]),this._addTriangle([o,d,l[1]])}}}}}intersectSegs(e,t){var r=e[1][0]-e[0][0],n=e[1][1]-e[0][1],a=t[1][0]-t[0][0],i=r*(t[1][1]-t[0][1])-n*a;if(0!=i){var s=(r*e[0][1]-r*t[0][1]-n*e[0][0]+n*t[0][0])/i;return 0<s&&s<1}return!1}_ptInTriangle(e,t){for(var r,n=0;r=t[n];n++)if((0,f.ol_coordinate_equal)(e,r))return!0;return!1}listpt(e){for(var t,r="",n=0;t=e[n];n++){var a=this._nodes.getClosestFeatureToCoordinate(t);(0,f.ol_coordinate_equal)(a.getGeometry().getCoordinates(),t)||(a=null),r+=(r?", ":"")+(a?a.get("id"):"?")}return r}inCircle(e,t){var r=this.getCircumCircle(t);return(0,f.ol_coordinate_dist2d)(e,r.center)<r.radius}getCircumCircle(e){var t=e[0][0],r=e[0][1],n=e[1][0],a=e[1][1],i=e[2][0],s=e[2][1],o=(t-n)/(a-r),l=(t-i)/(s-r),u=(r+a)/2-o*(t+n)/2,d=((r+s)/2-l*(t+i)/2-u)/(o-l),h=[d,o*d+u];return{center:h,radius:(0,f.ol_coordinate_dist2d)(h,e[0])}}getTrianglesAt(e){var t=(0,h.buffer)((0,h.boundingExtent)([e]),this.get("epsilon")),r=[];return this.forEachFeatureIntersectingExtent(t,(function(e){r.push(e)})),r}getNodesAt(e){var t=(0,h.buffer)((0,h.boundingExtent)([e]),this.get("epsilon"));return this._nodes.getFeaturesInExtent(t)}calculateVoronoi(e){var t=[];return this.getNodes().forEach(function(r){var n=r.getGeometry().getCoordinates(),a=!1;if(!0!==e)for(var i=0;i<this.hull.length;i++)if((0,f.ol_coordinate_equal)(n,this.hull[i])){a=!0;break}if(!a){var s=this.getTrianglesAt(n),o=[];s.forEach(function(e){var t=this.getCircumCircle(e.getGeometry().getCoordinates()[0]);o.push({pt:t.center,d:Math.atan2(t.center[1]-n[1],t.center[0]-n[0])})}.bind(this)),o.sort((function(e,t){return e.d-t.d}));var l=[];o.forEach((function(e){l.push(e.pt)})),l.push(l[0]);var h=r.getProperties();h.geometry=new(0,d.default)([l]),t.push(new(0,u.default)(h))}}.bind(this)),t}},_=a("fnScq"),m=a("jZ9vT"),v=a("gbCDL"),y=(h=a("jZquI"),a("ejLRd")),E=a("lwtpg"),x=a("l9IGS"),C=a("4lFOe"),w=a("d5AAH"),F=a("610XN"),I=(l=a("20LS2"),a("14PDX")),R=a("htGzg");var A=function(e){const t=e.frameState,r=(0,I.multiply)(e.inversePixelTransform.slice(),t.coordinateToPixelTransform);return new(0,R.default)(e.context,t.pixelRatio,t.extent,r,t.viewState.rotation)},S=a("lVQul"),T=a("ayeEa"),G=S.VERSION.split(".");G=100*parseInt(G[0])+parseInt(G[1]);var b=function(e,t){var r=e.frameState.pixelRatio;if(G>605&&G<700&&1!==r&&t.getImage()instanceof T.default){var n=(t=t.clone()).getImage();n.setScale(n.getScale()*r);var a=n.getAnchor();if(a&&n.setDisplacement){var i=n.getDisplacement();i&&(i[0]-=a[0]/r,i[1]+=a[1]/r,n.setAnchor([0,0]))}else a&&(a[0]/=r,a[1]/=r)}return t},L=class extends _.default{constructor(e){e=e||{},super(),this.duration_="number"==typeof e.duration?e.duration>=0?e.duration:0:1e3,this.fade_="function"==typeof e.fade?e.fade:null,this.repeat_=Number(e.repeat);var t="function"==typeof e.easing?e.easing:m.linear;e.revers?this.easing_=function(e){return 1-t(e)}:this.easing_=t,this.hiddenStyle=e.hiddenStyle}drawGeom_(e,t,r){this.fade_&&(e.context.globalAlpha=this.fade_(1-e.elapsed));for(var n=e.style,a=0;a<n.length;a++)try{var i=e.vectorContext||A(e),s=b(e,n[a]);i.setStyle(s),s.getZIndex()<0?i.drawGeometry(r||t):i.drawGeometry(t)}catch(e){}}animate(){return!1}};L.hiddenStyle=new(0,x.default)({image:new(0,C.default)({}),stroke:new(0,w.default)({color:"transparent"})}),v.default.prototype.animateFeature=function(e,t){var r=this._featureAnimationLayer;r||(r=this._featureAnimationLayer=new(0,F.default)({source:new(0,l.default)})).setMap(this),r.getSource().addFeature(e);var n=t.on("animationend",(function(t){t.feature===e&&(r.getSource().removeFeature(e),(0,y.unByKey)(n))}));r.animateFeature(e,t)},E.default.prototype.animateFeature=function(e,t,r){var n,a=this,i=e.getStyle(),s=i||(this.getStyleFunction?this.getStyleFunction()(e):null);s||(s=[]),s instanceof Array||(s=[s]);var o={vectorContext:null,frameState:null,start:0,time:0,elapsed:0,extent:!1,feature:e,geom:e.getGeometry(),typeGeom:e.getGeometry().getType(),bbox:e.getGeometry().getExtent(),coord:(0,h.getCenter)(e.getGeometry().getExtent()),style:s};t instanceof Array||(t=[t]);for(var l=t.length-1;l>=0;l--)0===t[l].duration_&&t.splice(l,1);var u=0,d=0,f=r&&this.getFilters?this.getFilters():[];function c(r){o.type=r.type;try{o.vectorContext=r.vectorContext||A(r)}catch(e){}if(o.frameState=r.frameState,o.inversePixelTransform=r.inversePixelTransform,o.extent||(o.extent=r.frameState.extent,o.start=r.frameState.time,o.context=r.context),o.time=r.frameState.time-o.start,o.elapsed=o.time/t[d].duration_,o.elapsed>1&&(o.elapsed=1),r.context.save(),f.forEach((function(e){e.get("active")&&e.precompose(r)})),this.getOpacity&&(r.context.globalAlpha=this.getOpacity()),t[d].animate(o)){var n={type:"animating",step:d,start:o.start,time:o.time,elapsed:o.elapsed,rotation:o.rotation||0,geom:o.geom,coordinate:o.coord,feature:e,extra:o.extra||{}};t[d].dispatchEvent(n),a.dispatchEvent(n)}else++u<t[d].repeat_?o.extent=!1:d<t.length-1?(t[d].dispatchEvent({type:"animationend",feature:e}),d++,u=0,o.extent=!1):g();f.forEach((function(e){e.get("active")&&e.postcompose(r)})),r.context.restore(),r.frameState.animate=!0}function g(r){(0,y.unByKey)(n),n=null,e.setStyle(i),o.stop=(new Date).getTime();var s={type:"animationend",feature:e};if(r)for(var l in r)r.hasOwnProperty(l)&&(s[l]=r[l]);t[d].dispatchEvent(s),a.dispatchEvent(s)}function p(r){if(t.length&&!n){if(o.stop&&(o.start=(new Date).getTime()-o.stop+o.start,o.stop=0),n=a.on(["postcompose","postrender"],c.bind(a)),a.renderSync)try{a.renderSync()}catch(e){}else a.changed();e.setStyle(t[d].hiddenStyle||L.hiddenStyle);var i={type:"animationstart",feature:e};if(r)for(var s in r)r.hasOwnProperty(s)&&(i[s]=r[s]);t[d].dispatchEvent(i),a.dispatchEvent(i)}}return p(),{start:p,stop:g,isPlaying:function(){return!!n}}};var D=L,N=class extends D{constructor(e){super(e=e||{}),this.set("zoomout",e.zoomOut)}animate(e){var t=this.easing_(e.elapsed);if(t){this.get("zoomout")&&(t=1/t);var r,n,a=e.style,i=[];for(r=0;r<a.length;r++)(n=a[r].getImage())&&(i[r]=n.getScale(),"postrender"===e.type?n.setScale(i[r]*t/e.frameState.pixelRatio):n.setScale(i[r]*t));for(this.drawGeom_(e,e.geom),r=0;r<a.length;r++)(n=a[r].getImage())&&n.setScale(i[r])}return e.time<=this.duration_}},O=class extends N{constructor(e){(e=e||{}).zoomOut=!0,super(e)}},U=N,P=class extends D{constructor(e){super(e),this.set("nb",e.nb||10)}animate(e){return Math.round(this.easing_(e.elapsed)*this.get("nb"))%2||this.drawGeom_(e,e.geom),e.time<=this.duration_}},k=(m=a("jZ9vT"),a("1B70O")),q=(C=a("4lFOe"),a("2zf1Y")),M=(w=a("d5AAH"),x=a("l9IGS"),a("h6Aha"));const V=[new(0,x.default)({stroke:new(0,w.default)({color:[0,255,255],width:1}),fill:new(0,q.default)({color:[0,255,255,.2]})})],j=new(0,x.default)({image:new(0,C.default)({radius:30,stroke:new(0,w.default)({color:[0,255,192],width:1.5})})}),K={hexa:[new(0,x.default)({image:new(0,M.default)({radius:10,points:6,stroke:new(0,w.default)({color:[0,255,0],width:1.5})})}),new(0,x.default)({image:new(0,M.default)({radius:5,points:6,fill:new(0,q.default)({color:[0,255,0]})})})],square:[new(0,x.default)({image:new(0,M.default)({radius:8,points:4,angle:Math.PI/4,fill:new(0,q.default)({color:[255,192,0]})})})],losange:[new(0,x.default)({image:new(0,M.default)({radius:10,points:4,stroke:new(0,w.default)({color:[255,255,0],width:1.5})})}),new(0,x.default)({image:new(0,M.default)({radius:5,points:4,fill:new(0,q.default)({color:[255,255,0]})})})],triangle:[new(0,x.default)({image:new(0,M.default)({radius:12,points:3,stroke:new(0,w.default)({color:[255,0,0],width:1.5})})}),new(0,x.default)({image:new(0,C.default)({radius:4,fill:new(0,q.default)({color:[255,0,0]})})})]},Z=Object.keys(K);var X=a("jZUWm");var B=a("31ZqB"),Y=a("eHnTw"),H=a("iTTi2"),z=a("cw4dl"),Q=a("5dXmB"),W=a("9iujS"),J=a("205E0"),$=a("gKdkP"),ee=a("eQaCk"),te=a("gmEQj"),re=a("eJ4LZ"),ne=(h=a("jZquI"),a("kBSVF")),ae=(S=a("lVQul"),a("kKEgb")),ie=a("bsgMw"),se=a("kWPIP");class oe extends H.default{constructor(e,t,r){super(e),this.feature=t,this.features=r}}class le extends J.default{constructor(e){super({attributions:(e=e||{}).attributions,interpolate:!0,projection:void 0,state:"ready",wrapX:void 0===e.wrapX||e.wrapX}),this.on,this.once,this.un,this.loader_=ee.VOID,this.format_=e.format,this.overlaps_=void 0===e.overlaps||e.overlaps,this.url_=e.url,void 0!==e.loader?this.loader_=e.loader:void 0!==this.url_&&((0,re.assert)(this.format_,7),this.loader_=(0,se.xhr)(this.url_,this.format_)),this.strategy_=void 0!==e.strategy?e.strategy:te.all;const t=void 0===e.useSpatialIndex||e.useSpatialIndex;let r,n;this.featuresRtree_=t?new(0,W.default):null,this.loadedExtentsRtree_=new(0,W.default),this.loadingExtentsCount_=0,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null,Array.isArray(e.features)?n=e.features:e.features&&(r=e.features,n=r.getArray()),t||void 0!==r||(r=new(0,B.default)(n)),void 0!==n&&this.addFeaturesInternal(n),void 0!==r&&this.bindFeaturesCollection_(r)}addFeature(e){this.addFeatureInternal(e),this.changed()}addFeatureInternal(e){const t=(0,S.getUid)(e);if(!this.addToIndex_(t,e))return void(this.featuresCollection_&&this.featuresCollection_.remove(e));this.setupChangeEvents_(t,e);const r=e.getGeometry();if(r){const t=r.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(t,e)}else this.nullGeometryFeatures_[t]=e;this.dispatchEvent(new oe($.default.ADDFEATURE,e))}setupChangeEvents_(e,t){this.featureChangeKeys_[e]=[(0,ie.listen)(t,z.default.CHANGE,this.handleFeatureChange_,this),(0,ie.listen)(t,Q.default.PROPERTYCHANGE,this.handleFeatureChange_,this)]}addToIndex_(e,t){let r=!0;const n=t.getId();return void 0!==n&&(n.toString()in this.idIndex_?r=!1:this.idIndex_[n.toString()]=t),r&&((0,re.assert)(!(e in this.uidIndex_),30),this.uidIndex_[e]=t),r}addFeatures(e){this.addFeaturesInternal(e),this.changed()}addFeaturesInternal(e){const t=[],r=[],n=[];for(let t=0,n=e.length;t<n;t++){const n=e[t],a=(0,S.getUid)(n);this.addToIndex_(a,n)&&r.push(n)}for(let e=0,a=r.length;e<a;e++){const a=r[e],i=(0,S.getUid)(a);this.setupChangeEvents_(i,a);const s=a.getGeometry();if(s){const e=s.getExtent();t.push(e),n.push(a)}else this.nullGeometryFeatures_[i]=a}if(this.featuresRtree_&&this.featuresRtree_.load(t,n),this.hasListener($.default.ADDFEATURE))for(let e=0,t=r.length;e<t;e++)this.dispatchEvent(new oe($.default.ADDFEATURE,r[e]))}bindFeaturesCollection_(e){let t=!1;this.addEventListener($.default.ADDFEATURE,(function(r){t||(t=!0,e.push(r.feature),t=!1)})),this.addEventListener($.default.REMOVEFEATURE,(function(r){t||(t=!0,e.remove(r.feature),t=!1)})),e.addEventListener(Y.default.ADD,function(e){t||(t=!0,this.addFeature(e.element),t=!1)}.bind(this)),e.addEventListener(Y.default.REMOVE,function(e){t||(t=!0,this.removeFeature(e.element),t=!1)}.bind(this)),this.featuresCollection_=e}clear(e){if(e){for(const e in this.featureChangeKeys_){this.featureChangeKeys_[e].forEach(ie.unlistenByKey)}this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){const e=function(e){this.removeFeatureInternal(e)}.bind(this);this.featuresRtree_.forEach(e);for(const e in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[e])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};const t=new oe($.default.CLEAR);this.dispatchEvent(t),this.changed()}forEachFeature(e){if(this.featuresRtree_)return this.featuresRtree_.forEach(e);this.featuresCollection_&&this.featuresCollection_.forEach(e)}forEachFeatureAtCoordinateDirect(e,t){const r=[e[0],e[1],e[0],e[1]];return this.forEachFeatureInExtent(r,(function(r){return r.getGeometry().intersectsCoordinate(e)?t(r):void 0}))}forEachFeatureInExtent(e,t){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(e,t);this.featuresCollection_&&this.featuresCollection_.forEach(t)}forEachFeatureIntersectingExtent(e,t){return this.forEachFeatureInExtent(e,(function(r){if(r.getGeometry().intersectsExtent(e)){const e=t(r);if(e)return e}}))}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let e;return this.featuresCollection_?e=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(e=this.featuresRtree_.getAll(),(0,ae.isEmpty)(this.nullGeometryFeatures_)||(0,ne.extend)(e,Object.values(this.nullGeometryFeatures_))),e}getFeaturesAtCoordinate(e){const t=[];return this.forEachFeatureAtCoordinateDirect(e,(function(e){t.push(e)})),t}getFeaturesInExtent(e,t){if(this.featuresRtree_){if(!(t&&t.canWrapX()&&this.getWrapX()))return this.featuresRtree_.getInExtent(e);const r=(0,h.wrapAndSliceX)(e,t);return[].concat(...r.map((e=>this.featuresRtree_.getInExtent(e))))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(e,t){const r=e[0],n=e[1];let a=null;const i=[NaN,NaN];let s=1/0;const o=[-1/0,-1/0,1/0,1/0];return t=t||ee.TRUE,this.featuresRtree_.forEachInExtent(o,(function(e){if(t(e)){const t=e.getGeometry(),l=s;if(s=t.closestPointXY(r,n,i,s),s<l){a=e;const t=Math.sqrt(s);o[0]=r-t,o[1]=n-t,o[2]=r+t,o[3]=n+t}}})),a}getExtent(e){return this.featuresRtree_.getExtent(e)}getFeatureById(e){const t=this.idIndex_[e.toString()];return void 0!==t?t:null}getFeatureByUid(e){const t=this.uidIndex_[e];return void 0!==t?t:null}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(e){const t=e.target,r=(0,S.getUid)(t),n=t.getGeometry();if(n){const e=n.getExtent();r in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[r],this.featuresRtree_&&this.featuresRtree_.insert(e,t)):this.featuresRtree_&&this.featuresRtree_.update(e,t)}else r in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(t),this.nullGeometryFeatures_[r]=t);const a=t.getId();if(void 0!==a){const e=a.toString();this.idIndex_[e]!==t&&(this.removeFromIdIndex_(t),this.idIndex_[e]=t)}else this.removeFromIdIndex_(t),this.uidIndex_[r]=t;this.changed(),this.dispatchEvent(new oe($.default.CHANGEFEATURE,t))}hasFeature(e){const t=e.getId();return void 0!==t?t in this.idIndex_:(0,S.getUid)(e)in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&(0,ae.isEmpty)(this.nullGeometryFeatures_):!this.featuresCollection_||0===this.featuresCollection_.getLength()}loadFeatures(e,t,r){const n=this.loadedExtentsRtree_,a=this.strategy_(e,t,r);for(let e=0,i=a.length;e<i;++e){const i=a[e];n.forEachInExtent(i,(function(e){return(0,h.containsExtent)(e.extent,i)}))||(++this.loadingExtentsCount_,this.dispatchEvent(new oe($.default.FEATURESLOADSTART)),this.loader_.call(this,i,t,r,function(e){--this.loadingExtentsCount_,this.dispatchEvent(new oe($.default.FEATURESLOADEND,void 0,e))}.bind(this),function(){--this.loadingExtentsCount_,this.dispatchEvent(new oe($.default.FEATURESLOADERROR))}.bind(this)),n.insert(i,{extent:i.slice()}))}this.loading=!(this.loader_.length<4)&&this.loadingExtentsCount_>0}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(e){const t=this.loadedExtentsRtree_;let r;t.forEachInExtent(e,(function(t){if((0,h.equals)(t.extent,e))return r=t,!0})),r&&t.remove(r)}removeFeature(e){if(!e)return;const t=(0,S.getUid)(e);t in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[t]:this.featuresRtree_&&this.featuresRtree_.remove(e);this.removeFeatureInternal(e)&&this.changed()}removeFeatureInternal(e){const t=(0,S.getUid)(e),r=this.featureChangeKeys_[t];if(!r)return;r.forEach(ie.unlistenByKey),delete this.featureChangeKeys_[t];const n=e.getId();return void 0!==n&&delete this.idIndex_[n.toString()],delete this.uidIndex_[t],this.dispatchEvent(new oe($.default.REMOVEFEATURE,e)),e}removeFromIdIndex_(e){let t=!1;for(const r in this.idIndex_)if(this.idIndex_[r]===e){delete this.idIndex_[r],t=!0;break}return t}setLoader(e){this.loader_=e}setUrl(e){(0,re.assert)(this.format_,7),this.url_=e,this.setLoader((0,se.xhr)(e,this.format_))}}var ue=le,de=a("cEuiU"),he=(u=a("iGyOD"),a("63y7W")),fe=(h=a("jZquI"),a("ee3b9")),ce=a("a6roo");class ge extends he.default{constructor(e,t){super(),this.setCoordinates(e,t)}clone(){const e=new ge(this.flatCoordinates.slice(),this.layout);return e.applyProperties(this),e}closestPointXY(e,t,r,n){const a=this.flatCoordinates,i=(0,ce.squaredDistance)(e,t,a[0],a[1]);if(i<n){const e=this.stride;for(let t=0;t<e;++t)r[t]=a[t];return r.length=e,i}return n}getCoordinates(){return this.flatCoordinates?this.flatCoordinates.slice():[]}computeExtent(e){return(0,h.createOrUpdateFromCoordinate)(this.flatCoordinates,e)}getType(){return"Point"}intersectsExtent(e){return(0,h.containsXY)(e,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(e,t){this.setLayout(t,e,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,fe.deflateCoordinate)(this.flatCoordinates,0,e,this.stride),this.changed()}}var pe=ge;k=a("1B70O");(0,X.default)(e('<div> <h2> Day 9: space </h2> <p> Use ol-ext <a href="https://viglino.github.io/ol-ext/doc/doc-pages/ol.source.Delaunay.html"> Delaunay triangle source </a> and animations to figure space on the map. </p> </div>')),k.permalink.setUrlReplace(!1);const _e=new(0,s.default)({layer:"GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2"});_e.addFilter(new(0,o.default)({operation:"difference",color:[255,192,128]})),k.default.addLayer(_e),k.default.getView().setZoom(16),k.default.getView().setCenter([636860,5651388]);var me=new ue;me.on("addfeature",(function(e){e.feature.set("style",Z[Math.floor(Math.random()*Z.length)])}));var ve=new(0,de.default)({name:"vector",source:me,style:function(e){return K[e.get("style")]}}),ye=new p({source:me}),Ee=new(0,de.default)({name:"triangle",source:ye,style:function(){return V}});k.default.addLayer(Ee),k.default.addLayer(ve),ve.getSource().on("addfeature",(function(e){ve.animateFeature(e.feature,new U({duration:500,easing:m.easeIn}));var t=new(0,u.default)(e.feature.getGeometry().clone());t.setStyle(j),ve.animateFeature(t,new O({fade:m.easeOut,duration:1500,easing:m.linear}))})),Ee.getSource().on("addfeature",(function(e){Ee.animateFeature(e.feature,new P({nb:15,duration:2e3,easing:m.easeIn}))}));let xe=1;setTimeout((function e(){const t=k.default.getView().calculateExtent(),r=[(t[0]+t[2])/2+(Math.random()-.5)*(t[2]-t[0])/4,(t[1]+t[3])/2+(Math.random()-.5)*(t[3]-t[1])/4],n=new(0,u.default)(new pe(r));me.addFeature(n),console.log(xe),++xe>3?(k.default.getView().animate({center:r,zoom:Math.min(18,Math.max(14,k.default.getView().getZoom()+Math.random()-.5))}),setTimeout(e,2e3*Math.random()+2e3)):setTimeout(e,500)}),500);