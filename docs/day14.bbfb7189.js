function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},n=t.parcelRequirecc54;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequirecc54=n);var s,o=n("7qsnY"),a=n("20LS2"),h=n("6gELa"),u=n("kPMpK"),d=n("cgPpQ"),g=n("iGyOD"),l=(d=n("cgPpQ"),a=n("20LS2"),n("23ytq"));a=n("20LS2");s=a.default.prototype.clear,a.default.prototype.clear=function(e){this.dispatchEvent({type:"clearstart"}),s.call(this,e),this.dispatchEvent({type:"clearend"})};var c=class extends a.default{constructor(e){super(e=e||{}),this._bindModify=this._onModifyFeature.bind(this),this._watch=!0,this._origin=e.source,this._listen=!1!==e.listenChange,this._geomFn=e.geometryFunction||l.ol_coordinate_getFeatureCenter||function(e){return e.getGeometry().getFirstCoordinate()},this._origin.on("addfeature",this._onAddFeature.bind(this)),this._origin.on("removefeature",this._onRemoveFeature.bind(this)),this._origin.on("clearstart",this._onClearFeature.bind(this)),this._origin.on("clearend",this._onClearFeature.bind(this)),"function"==typeof e.flatAttributes&&(this._flatAttributes=e.flatAttributes)}_onAddFeature(e,t,i){var r=e.feature||e.target;(t=t||this.getBinAt(this._geomFn(r),!0))&&t.get("features").push(r),this._listen&&!1!==i&&r.on("change",this._bindModify)}_onRemoveFeature(e,t,i){if(this._watch){var r=e.feature||e.target;if(t=t||this.getBinAt(this._geomFn(r))){for(var n,s=t.get("features"),o=0;n=s[o];o++)if(n===r){s.splice(o,1);break}s.length||this.removeFeature(t)}this._listen&&!1!==i&&r.un("change",this._bindModify)}}_onClearFeature(e){"clearstart"===e.type?(this._listen&&this._origin.getFeatures().forEach(function(e){e.un("change",this._bindModify)}.bind(this)),this.clear(),this._watch=!1):this._watch=!0}getBin(e){for(var t,i=this.getFeatures(),r=0;t=i[r];r++)for(var n,s=t.get("features"),o=0;n=s[o];o++)if(n===e)return t;return null}getGridGeomAt(e){return new(0,d.default)([e])}getBinAt(e,t){var i={},r=this.getGridGeomAt(e,i);if(!r)return null;var n=r.getInteriorPoint?r.getInteriorPoint().getCoordinates():r.getInteriorPoints().getCoordinates()[0],s=this.getFeaturesAtCoordinate(n)[0];return!s&&t&&(i.geometry=r,i.features=[],i.center=n,s=new(0,g.default)(i),this.addFeature(s)),s||null}_onModifyFeature(e){var t=this.getBin(e.target),i=this.getBinAt(this._geomFn(e.target),"create");t!==i&&(t&&this._onRemoveFeature(e,t,!1),i&&this._onAddFeature(e,i,!1)),this.changed()}reset(){this.clear();for(var e,t=this._origin.getFeatures(),i=0;e=t[i];i++)this._onAddFeature({feature:e});this.changed()}getGridFeatures(){var e=[];return this.getFeatures().forEach(function(t){var i=new(0,g.default)(t.getGeometry().clone());for(var r in t.getProperties())"features"!==r&&"geometry"!==r&&i.set(r,t.get(r));i.set("nb",t.get("features").length),this._flatAttributes(i,t.get("features")),e.push(i)}.bind(this)),e}_flatAttributes(){}setFlatAttributesFn(e){"function"==typeof e&&(this._flatAttributes=e)}getSource(){return this._origin}},_=n("fnScq"),f=class extends _.default{constructor(e){super(e=e||{}),this.size_=e.size||8e4,this.origin_=e.origin||[0,0],this.layout_=this.layout[e.layout]||this.layout.pointy}setLayout(e){this.layout_=this.layout[e]||this.layout.pointy,this.changed()}getLayout(){return 0!=this.layout_[9]?"pointy":"flat"}setOrigin(e){this.origin_=e,this.changed()}getOrigin(){return this.origin_}setSize(e){this.size_=e||8e4,this.changed()}getSize(){return this.size_}cube2hex(e){return[e[0],e[2]]}hex2cube(e){return[e[0],-e[0]-e[1],e[1]]}hex2offset(e){return this.layout_[9]?[e[0]+(e[1]-(1&e[1]))/2,e[1]]:[e[0],e[1]+(e[0]+(1&e[0]))/2]}offset2hex(e){return this.layout_[9]?[e[0]-(e[1]-(1&e[1]))/2,e[1]]:[e[0],e[1]-(e[0]+(1&e[0]))/2]}cube_round(e){var t=Math.round(e[0]),i=Math.round(e[1]),r=Math.round(e[2]),n=Math.abs(t-e[0]),s=Math.abs(i-e[1]),o=Math.abs(r-e[2]);return n>s&&n>o?t=-i-r:s>o?i=-t-r:r=-t-i,[t,i,r]}hex_round(e){return this.cube2hex(this.cube_round(this.hex2cube(e)))}hex_corner(e,t,i){return[e[0]+t*this.layout_[8+i%6*2],e[1]+t*this.layout_[9+i%6*2]]}getHexagonAtCoord(e){return this.getHexagon(this.coord2hex(e))}getHexagon(e){for(var t=[],i=this.hex2coord(e),r=0;r<=7;r++)t.push(this.hex_corner(i,this.size_,r,this.layout_[8]));return t}hex2coord(e){return[this.origin_[0]+this.size_*(this.layout_[0]*e[0]+this.layout_[1]*e[1]),this.origin_[1]+this.size_*(this.layout_[2]*e[0]+this.layout_[3]*e[1])]}coord2hex(e){var t=[(e[0]-this.origin_[0])/this.size_,(e[1]-this.origin_[1])/this.size_],i=this.layout_[4]*t[0]+this.layout_[5]*t[1],r=this.layout_[6]*t[0]+this.layout_[7]*t[1];return this.hex_round([i,r])}cube_distance(e,t){return Math.max(Math.abs(e[0]-t[0]),Math.abs(e[1]-t[1]),Math.abs(e[2]-t[2]))}lerp(e,t,i){return e+(t-e)*i}cube_lerp(e,t,i){return[this.lerp(e[0]+1e-6,t[0],i),this.lerp(e[1]+1e-6,t[1],i),this.lerp(e[2]+1e-6,t[2],i)]}cube_line(e,t){var i=this.cube_distance(e,t);if(!i)return[e];for(var r=[],n=0;n<=i;n++)r.push(this.cube_round(this.cube_lerp(e,t,n/i)));return r}hex_neighbors(e,t){if(void 0!==t)return[e[0]+this.neighbors.hex[t%6][0],e[1]+this.neighbors.hex[t%6][1]];var i=[];for(t=0;t<6;t++)i.push([e[0]+this.neighbors.hex[t][0],e[1]+this.neighbors.hex[t][1]]);return i}cube_neighbors(e,t){if(void 0!==t)return[e[0]+this.neighbors.cube[t%6][0],e[1]+this.neighbors.cube[t%6][1],e[2]+this.neighbors.cube[t%6][2]];var i=[];for(t=0;t<6;t++)i.push([e[0]+this.neighbors.cube[t][0],e[1]+this.neighbors.cube[t][1],e[2]+this.neighbors.cube[t][2]]);for(t=0;t<6;t++)i[t]=this.cube2hex(i[t]);return i}};f.prototype.layout={pointy:[Math.sqrt(3),Math.sqrt(3)/2,0,1.5,Math.sqrt(3)/3,-1/3,0,2/3,Math.cos(Math.PI/180*30),Math.sin(Math.PI/180*30),Math.cos(Math.PI/180*90),Math.sin(Math.PI/180*90),Math.cos(Math.PI/180*150),Math.sin(Math.PI/180*150),Math.cos(Math.PI/180*210),Math.sin(Math.PI/180*210),Math.cos(Math.PI/180*270),Math.sin(Math.PI/180*270),Math.cos(Math.PI/180*330),Math.sin(Math.PI/180*330)],flat:[1.5,0,Math.sqrt(3)/2,Math.sqrt(3),2/3,0,-1/3,Math.sqrt(3)/3,Math.cos(Math.PI/180*0),Math.sin(Math.PI/180*0),Math.cos(Math.PI/180*60),Math.sin(Math.PI/180*60),Math.cos(Math.PI/180*120),Math.sin(Math.PI/180*120),Math.cos(Math.PI/180*180),Math.sin(Math.PI/180*180),Math.cos(Math.PI/180*240),Math.sin(Math.PI/180*240),Math.cos(Math.PI/180*300),Math.sin(Math.PI/180*300)]},f.prototype.neighbors={cube:[[1,-1,0],[1,0,-1],[0,1,-1],[-1,1,0],[-1,0,1],[0,-1,1]],hex:[[1,0],[1,-1],[0,-1],[-1,0],[-1,1],[0,1]]};var m=f,y=class extends c{constructor(e){super(e=e||{}),this._hexgrid=new m(e),this.reset()}getGridGeomAt(e){var t=this._hexgrid.coord2hex(e);return new(0,d.default)([this._hexgrid.getHexagon(t)])}setSize(e,t){this._hexgrid.setSize(e),t||this.reset()}getSize(){return this._hexgrid.getSize()}setLayout(e,t){this._hexgrid.setLayout(e),t||this.reset()}getLayout(){return this._hexgrid.getLayout()}setOrigin(e,t){this._hexgrid.setOrigin(e),t||this.reset()}getOrigin(){return this._hexgrid.getOrigin()}getHexFeatures(){return super.getGridFeatures()}},p=n("610XN"),x=n("l9IGS"),v=n("2zf1Y"),M=n("5Revz"),b=n("31ZqB"),F=n("eHnTw"),C=n("iTTi2"),P=n("cw4dl"),S=(g=n("iGyOD"),n("7h13W")),w=n("j2K3b"),E=n("pMeEw"),G=n("9iujS"),I=n("gKdkP"),A=(p=n("610XN"),a=n("20LS2"),n("btuox")),B=n("jZquI"),L=n("d1ltq"),T=(x=n("l9IGS"),n("kBSVF")),U=(d=n("cgPpQ"),n("gzr8q")),q=n("lVQul");const R=[0,0,0,0],V=[],D="modifystart",O="modifyend";class k extends C.default{constructor(e,t,i){super(e),this.features=t,this.mapBrowserEvent=i}}class N extends E.default{constructor(e){let t;if(super(e),this.on,this.once,this.un,this.boundHandleFeatureChange_=this.handleFeatureChange_.bind(this),this.condition_=e.condition?e.condition:A.primaryAction,this.defaultDeleteCondition_=function(e){return(0,A.altKeyOnly)(e)&&(0,A.singleClick)(e)},this.deleteCondition_=e.deleteCondition?e.deleteCondition:this.defaultDeleteCondition_,this.insertVertexCondition_=e.insertVertexCondition?e.insertVertexCondition:A.always,this.vertexFeature_=null,this.vertexSegments_=null,this.lastPixel_=[0,0],this.ignoreNextSingleClick_=!1,this.featuresBeingModified_=null,this.rBush_=new(0,G.default),this.pixelTolerance_=void 0!==e.pixelTolerance?e.pixelTolerance:10,this.snappedToVertex_=!1,this.changingFeature_=!1,this.dragSegments_=[],this.overlay_=new(0,p.default)({source:new(0,a.default)({useSpatialIndex:!1,wrapX:!!e.wrapX}),style:e.style?e.style:W(),updateWhileAnimating:!0,updateWhileInteracting:!0}),this.SEGMENT_WRITERS_={Point:this.writePointGeometry_.bind(this),LineString:this.writeLineStringGeometry_.bind(this),LinearRing:this.writeLineStringGeometry_.bind(this),Polygon:this.writePolygonGeometry_.bind(this),MultiPoint:this.writeMultiPointGeometry_.bind(this),MultiLineString:this.writeMultiLineStringGeometry_.bind(this),MultiPolygon:this.writeMultiPolygonGeometry_.bind(this),Circle:this.writeCircleGeometry_.bind(this),GeometryCollection:this.writeGeometryCollectionGeometry_.bind(this)},this.source_=null,this.hitDetection_=null,e.features?t=e.features:e.source&&(this.source_=e.source,t=new(0,b.default)(this.source_.getFeatures()),this.source_.addEventListener(I.default.ADDFEATURE,this.handleSourceAdd_.bind(this)),this.source_.addEventListener(I.default.REMOVEFEATURE,this.handleSourceRemove_.bind(this))),!t)throw new Error("The modify interaction requires features, a source or a layer");e.hitDetection&&(this.hitDetection_=e.hitDetection),this.features_=t,this.features_.forEach(this.addFeature_.bind(this)),this.features_.addEventListener(F.default.ADD,this.handleFeatureAdd_.bind(this)),this.features_.addEventListener(F.default.REMOVE,this.handleFeatureRemove_.bind(this)),this.lastPointerEvent_=null,this.delta_=[0,0],this.snapToPointer_=void 0===e.snapToPointer?!this.hitDetection_:e.snapToPointer}addFeature_(e){const t=e.getGeometry();if(t){const i=this.SEGMENT_WRITERS_[t.getType()];i&&i(e,t)}const i=this.getMap();i&&i.isRendered()&&this.getActive()&&this.handlePointerAtPixel_(this.lastPixel_,i),e.addEventListener(P.default.CHANGE,this.boundHandleFeatureChange_)}willModifyFeatures_(e,t){if(!this.featuresBeingModified_){this.featuresBeingModified_=new(0,b.default);const i=this.featuresBeingModified_.getArray();for(let e=0,r=t.length;e<r;++e){const r=t[e];for(let e=0,t=r.length;e<t;++e){const t=r[e].feature;t&&!i.includes(t)&&this.featuresBeingModified_.push(t)}}0===this.featuresBeingModified_.getLength()?this.featuresBeingModified_=null:this.dispatchEvent(new k(D,this.featuresBeingModified_,e))}}removeFeature_(e){this.removeFeatureSegmentData_(e),this.vertexFeature_&&0===this.features_.getLength()&&(this.overlay_.getSource().removeFeature(this.vertexFeature_),this.vertexFeature_=null),e.removeEventListener(P.default.CHANGE,this.boundHandleFeatureChange_)}removeFeatureSegmentData_(e){const t=this.rBush_,i=[];t.forEach((function(t){e===t.feature&&i.push(t)}));for(let e=i.length-1;e>=0;--e){const r=i[e];for(let e=this.dragSegments_.length-1;e>=0;--e)this.dragSegments_[e][0]===r&&this.dragSegments_.splice(e,1);t.remove(r)}}setActive(e){this.vertexFeature_&&!e&&(this.overlay_.getSource().removeFeature(this.vertexFeature_),this.vertexFeature_=null),super.setActive(e)}setMap(e){this.overlay_.setMap(e),super.setMap(e)}getOverlay(){return this.overlay_}handleSourceAdd_(e){e.feature&&this.features_.push(e.feature)}handleSourceRemove_(e){e.feature&&this.features_.remove(e.feature)}handleFeatureAdd_(e){this.addFeature_(e.element)}handleFeatureChange_(e){if(!this.changingFeature_){const t=e.target;this.removeFeature_(t),this.addFeature_(t)}}handleFeatureRemove_(e){this.removeFeature_(e.element)}writePointGeometry_(e,t){const i=t.getCoordinates(),r={feature:e,geometry:t,segment:[i,i]};this.rBush_.insert(t.getExtent(),r)}writeMultiPointGeometry_(e,t){const i=t.getCoordinates();for(let r=0,n=i.length;r<n;++r){const n=i[r],s={feature:e,geometry:t,depth:[r],index:r,segment:[n,n]};this.rBush_.insert(t.getExtent(),s)}}writeLineStringGeometry_(e,t){const i=t.getCoordinates();for(let r=0,n=i.length-1;r<n;++r){const n=i.slice(r,r+2),s={feature:e,geometry:t,index:r,segment:n};this.rBush_.insert((0,B.boundingExtent)(n),s)}}writeMultiLineStringGeometry_(e,t){const i=t.getCoordinates();for(let r=0,n=i.length;r<n;++r){const n=i[r];for(let i=0,s=n.length-1;i<s;++i){const s=n.slice(i,i+2),o={feature:e,geometry:t,depth:[r],index:i,segment:s};this.rBush_.insert((0,B.boundingExtent)(s),o)}}}writePolygonGeometry_(e,t){const i=t.getCoordinates();for(let r=0,n=i.length;r<n;++r){const n=i[r];for(let i=0,s=n.length-1;i<s;++i){const s=n.slice(i,i+2),o={feature:e,geometry:t,depth:[r],index:i,segment:s};this.rBush_.insert((0,B.boundingExtent)(s),o)}}}writeMultiPolygonGeometry_(e,t){const i=t.getCoordinates();for(let r=0,n=i.length;r<n;++r){const n=i[r];for(let i=0,s=n.length;i<s;++i){const s=n[i];for(let n=0,o=s.length-1;n<o;++n){const o=s.slice(n,n+2),a={feature:e,geometry:t,depth:[i,r],index:n,segment:o};this.rBush_.insert((0,B.boundingExtent)(o),a)}}}}writeCircleGeometry_(e,t){const i=t.getCenter(),r={feature:e,geometry:t,index:0,segment:[i,i]},n={feature:e,geometry:t,index:1,segment:[i,i]},s=[r,n];r.featureSegments=s,n.featureSegments=s,this.rBush_.insert((0,B.createOrUpdateFromCoordinate)(i),r);let o=t;const a=(0,U.getUserProjection)();if(a&&this.getMap()){const e=this.getMap().getView().getProjection();o=o.clone().transform(a,e),o=(0,d.fromCircle)(o).transform(e,a)}this.rBush_.insert(o.getExtent(),n)}writeGeometryCollectionGeometry_(e,t){const i=t.getGeometriesArray();for(let t=0;t<i.length;++t){const r=i[t];(0,this.SEGMENT_WRITERS_[r.getType()])(e,r)}}createOrUpdateVertexFeature_(e,t,i){let r=this.vertexFeature_;if(r){r.getGeometry().setCoordinates(e)}else r=new(0,g.default)(new(0,w.default)(e)),this.vertexFeature_=r,this.overlay_.getSource().addFeature(r);return r.set("features",t),r.set("geometries",i),r}handleEvent(e){if(!e.originalEvent)return!0;let t;return this.lastPointerEvent_=e,e.map.getView().getInteracting()||e.type!=S.default.POINTERMOVE||this.handlingDownUpSequence||this.handlePointerMove_(e),this.vertexFeature_&&this.deleteCondition_(e)&&(t=!(e.type!=S.default.SINGLECLICK||!this.ignoreNextSingleClick_)||this.removePoint()),e.type==S.default.SINGLECLICK&&(this.ignoreNextSingleClick_=!1),super.handleEvent(e)&&!t}handleDragEvent(e){this.ignoreNextSingleClick_=!1,this.willModifyFeatures_(e,this.dragSegments_);const t=[e.coordinate[0]+this.delta_[0],e.coordinate[1]+this.delta_[1]],i=[],r=[];for(let n=0,s=this.dragSegments_.length;n<s;++n){const s=this.dragSegments_[n],o=s[0],a=o.feature;i.includes(a)||i.push(a);const h=o.geometry;r.includes(h)||r.push(h);const u=o.depth;let d;const g=o.segment,l=s[1];for(;t.length<h.getStride();)t.push(g[l][t.length]);switch(h.getType()){case"Point":d=t,g[0]=t,g[1]=t;break;case"MultiPoint":d=h.getCoordinates(),d[o.index]=t,g[0]=t,g[1]=t;break;case"LineString":d=h.getCoordinates(),d[o.index+l]=t,g[l]=t;break;case"MultiLineString":case"Polygon":d=h.getCoordinates(),d[u[0]][o.index+l]=t,g[l]=t;break;case"MultiPolygon":d=h.getCoordinates(),d[u[1]][u[0]][o.index+l]=t,g[l]=t;break;case"Circle":if(g[0]=t,g[1]=t,0===o.index)this.changingFeature_=!0,h.setCenter(t),this.changingFeature_=!1;else{this.changingFeature_=!0;const i=e.map.getView().getProjection();let r=(0,L.distance)((0,U.fromUserCoordinate)(h.getCenter(),i),(0,U.fromUserCoordinate)(t,i));const n=(0,U.getUserProjection)();if(n){const e=h.clone().transform(n,i);e.setRadius(r),r=e.transform(i,n).getRadius()}h.setRadius(r),this.changingFeature_=!1}}d&&this.setGeometryCoordinates_(h,d)}this.createOrUpdateVertexFeature_(t,i,r)}handleDownEvent(e){if(!this.condition_(e))return!1;const t=e.coordinate;this.handlePointerAtPixel_(e.pixel,e.map,t),this.dragSegments_.length=0,this.featuresBeingModified_=null;const i=this.vertexFeature_;if(i){const r=e.map.getView().getProjection(),n=[],s=i.getGeometry().getCoordinates(),o=(0,B.boundingExtent)([s]),a=this.rBush_.getInExtent(o),h={};a.sort(z);for(let i=0,o=a.length;i<o;++i){const o=a[i],u=o.segment;let d=(0,q.getUid)(o.geometry);const g=o.depth;if(g&&(d+="-"+g.join("-")),h[d]||(h[d]=new Array(2)),"Circle"!==o.geometry.getType()||1!==o.index)if(!(0,L.equals)(u[0],s)||h[d][0])if(!(0,L.equals)(u[1],s)||h[d][1])(0,q.getUid)(u)in this.vertexSegments_&&!h[d][0]&&!h[d][1]&&this.insertVertexCondition_(e)&&n.push(o);else{if(h[d][0]&&0===h[d][0].index){let e=o.geometry.getCoordinates();switch(o.geometry.getType()){case"LineString":case"MultiLineString":continue;case"MultiPolygon":e=e[g[1]];case"Polygon":if(o.index!==e[g[0]].length-2)continue}}this.dragSegments_.push([o,1]),h[d][1]=o}else this.dragSegments_.push([o,0]),h[d][0]=o;else{const e=H(t,o,r);(0,L.equals)(e,s)&&!h[d][0]&&(this.dragSegments_.push([o,0]),h[d][0]=o)}}n.length&&this.willModifyFeatures_(e,[n]);for(let e=n.length-1;e>=0;--e)this.insertVertex_(n[e],s)}return!!this.vertexFeature_}handleUpEvent(e){for(let t=this.dragSegments_.length-1;t>=0;--t){const i=this.dragSegments_[t][0],r=i.geometry;if("Circle"===r.getType()){const t=r.getCenter(),n=i.featureSegments[0],s=i.featureSegments[1];n.segment[0]=t,n.segment[1]=t,s.segment[0]=t,s.segment[1]=t,this.rBush_.update((0,B.createOrUpdateFromCoordinate)(t),n);let o=r;const a=(0,U.getUserProjection)();if(a){const t=e.map.getView().getProjection();o=o.clone().transform(a,t),o=(0,d.fromCircle)(o).transform(t,a)}this.rBush_.update(o.getExtent(),s)}else this.rBush_.update((0,B.boundingExtent)(i.segment),i)}return this.featuresBeingModified_&&(this.dispatchEvent(new k(O,this.featuresBeingModified_,e)),this.featuresBeingModified_=null),!1}handlePointerMove_(e){this.lastPixel_=e.pixel,this.handlePointerAtPixel_(e.pixel,e.map,e.coordinate)}handlePointerAtPixel_(e,t,i){const r=i||t.getCoordinateFromPixel(e),n=t.getView().getProjection(),s=function(e,t){return j(r,e,n)-j(r,t,n)};let o,a;if(this.hitDetection_){const i="object"==typeof this.hitDetection_?e=>e===this.hitDetection_:void 0;t.forEachFeatureAtPixel(e,((e,t,i)=>{if("Point"===(i=i||e.getGeometry()).getType()&&this.features_.getArray().includes(e)){a=i;const t=i.getFlatCoordinates().slice(0,2);o=[{feature:e,geometry:i,segment:[t,t]}]}return!0}),{layerFilter:i})}if(!o){const e=(0,U.fromUserExtent)((0,B.createOrUpdateFromCoordinate)(r,R),n),i=t.getView().getResolution()*this.pixelTolerance_,s=(0,U.toUserExtent)((0,B.buffer)(e,i,R),n);o=this.rBush_.getInExtent(s)}if(o&&o.length>0){const i=o.sort(s)[0],h=i.segment;let u=H(r,i,n);const d=t.getPixelFromCoordinate(u);let g=(0,L.distance)(e,d);if(a||g<=this.pixelTolerance_){const e={};if(e[(0,q.getUid)(h)]=!0,this.snapToPointer_||(this.delta_[0]=u[0]-r[0],this.delta_[1]=u[1]-r[1]),"Circle"===i.geometry.getType()&&1===i.index)this.snappedToVertex_=!0,this.createOrUpdateVertexFeature_(u,[i.feature],[i.geometry]);else{const r=t.getPixelFromCoordinate(h[0]),n=t.getPixelFromCoordinate(h[1]),s=(0,L.squaredDistance)(d,r),a=(0,L.squaredDistance)(d,n);g=Math.sqrt(Math.min(s,a)),this.snappedToVertex_=g<=this.pixelTolerance_,this.snappedToVertex_&&(u=s>a?h[1]:h[0]),this.createOrUpdateVertexFeature_(u,[i.feature],[i.geometry]);const l={};l[(0,q.getUid)(i.geometry)]=!0;for(let t=1,i=o.length;t<i;++t){const i=o[t].segment;if(!((0,L.equals)(h[0],i[0])&&(0,L.equals)(h[1],i[1])||(0,L.equals)(h[0],i[1])&&(0,L.equals)(h[1],i[0])))break;{const r=(0,q.getUid)(o[t].geometry);r in l||(l[r]=!0,e[(0,q.getUid)(i)]=!0)}}}return void(this.vertexSegments_=e)}}this.vertexFeature_&&(this.overlay_.getSource().removeFeature(this.vertexFeature_),this.vertexFeature_=null)}insertVertex_(e,t){const i=e.segment,r=e.feature,n=e.geometry,s=e.depth,o=e.index;let a;for(;t.length<n.getStride();)t.push(0);switch(n.getType()){case"MultiLineString":case"Polygon":a=n.getCoordinates(),a[s[0]].splice(o+1,0,t);break;case"MultiPolygon":a=n.getCoordinates(),a[s[1]][s[0]].splice(o+1,0,t);break;case"LineString":a=n.getCoordinates(),a.splice(o+1,0,t);break;default:return}this.setGeometryCoordinates_(n,a);const h=this.rBush_;h.remove(e),this.updateSegmentIndices_(n,o,s,1);const u={segment:[i[0],t],feature:r,geometry:n,depth:s,index:o};h.insert((0,B.boundingExtent)(u.segment),u),this.dragSegments_.push([u,1]);const d={segment:[t,i[1]],feature:r,geometry:n,depth:s,index:o+1};h.insert((0,B.boundingExtent)(d.segment),d),this.dragSegments_.push([d,0]),this.ignoreNextSingleClick_=!0}removePoint(){if(this.lastPointerEvent_&&this.lastPointerEvent_.type!=S.default.POINTERDRAG){const e=this.lastPointerEvent_;this.willModifyFeatures_(e,this.dragSegments_);const t=this.removeVertex_();return this.featuresBeingModified_&&this.dispatchEvent(new k(O,this.featuresBeingModified_,e)),this.featuresBeingModified_=null,t}return!1}removeVertex_(){const e=this.dragSegments_,t={};let i,r,n,s,o,a,h,u,d,g,l,c=!1;for(o=e.length-1;o>=0;--o)n=e[o],g=n[0],l=(0,q.getUid)(g.feature),g.depth&&(l+="-"+g.depth.join("-")),l in t||(t[l]={}),0===n[1]?(t[l].right=g,t[l].index=g.index):1==n[1]&&(t[l].left=g,t[l].index=g.index+1);for(l in t){switch(d=t[l].right,h=t[l].left,a=t[l].index,u=a-1,g=void 0!==h?h:d,u<0&&(u=0),s=g.geometry,r=s.getCoordinates(),i=r,c=!1,s.getType()){case"MultiLineString":r[g.depth[0]].length>2&&(r[g.depth[0]].splice(a,1),c=!0);break;case"LineString":r.length>2&&(r.splice(a,1),c=!0);break;case"MultiPolygon":i=i[g.depth[1]];case"Polygon":i=i[g.depth[0]],i.length>4&&(a==i.length-1&&(a=0),i.splice(a,1),c=!0,0===a&&(i.pop(),i.push(i[0]),u=i.length-1))}if(c){this.setGeometryCoordinates_(s,r);const t=[];if(void 0!==h&&(this.rBush_.remove(h),t.push(h.segment[0])),void 0!==d&&(this.rBush_.remove(d),t.push(d.segment[1])),void 0!==h&&void 0!==d){const e={depth:g.depth,feature:g.feature,geometry:g.geometry,index:u,segment:t};this.rBush_.insert((0,B.boundingExtent)(e.segment),e)}this.updateSegmentIndices_(s,a,g.depth,-1),this.vertexFeature_&&(this.overlay_.getSource().removeFeature(this.vertexFeature_),this.vertexFeature_=null),e.length=0}}return c}setGeometryCoordinates_(e,t){this.changingFeature_=!0,e.setCoordinates(t),this.changingFeature_=!1}updateSegmentIndices_(e,t,i,r){this.rBush_.forEachInExtent(e.getExtent(),(function(n){n.geometry===e&&(void 0===i||void 0===n.depth||(0,T.equals)(n.depth,i))&&n.index>t&&(n.index+=r)}))}}function z(e,t){return e.index-t.index}function j(e,t,i){const r=t.geometry;if("Circle"===r.getType()){let n=r;if(1===t.index){const t=(0,U.getUserProjection)();t&&(n=n.clone().transform(t,i));const r=(0,L.squaredDistance)(n.getCenter(),(0,U.fromUserCoordinate)(e,i)),s=Math.sqrt(r)-n.getRadius();return s*s}}const n=(0,U.fromUserCoordinate)(e,i);return V[0]=(0,U.fromUserCoordinate)(t.segment[0],i),V[1]=(0,U.fromUserCoordinate)(t.segment[1],i),(0,L.squaredDistanceToSegment)(n,V)}function H(e,t,i){const r=t.geometry;if("Circle"===r.getType()&&1===t.index){let t=r;const n=(0,U.getUserProjection)();return n&&(t=t.clone().transform(n,i)),(0,U.toUserCoordinate)(t.getClosestPoint((0,U.fromUserCoordinate)(e,i)),i)}const n=(0,U.fromUserCoordinate)(e,i);return V[0]=(0,U.fromUserCoordinate)(t.segment[0],i),V[1]=(0,U.fromUserCoordinate)(t.segment[1],i),(0,U.toUserCoordinate)((0,L.closestOnSegment)(n,V),i)}function W(){const e=(0,x.createEditingStyle)();return function(t,i){return e.Point}}var K=N,Q=n("6yJ0x"),X=n("1B70O");(0,n("jZUWm").default)(e('<div> <h2> Day 14: hexagons </h2> <p> Use <a href="http://viglino.github.io/ol-ext/doc/doc-pages/ol.style.FlowLine.html" target="_new"> ol-ext Hexbin source </a> to aggregate data on hexagons. </p> </div>')),X.default.getView().setZoom(13),X.default.getView().setCenter([259982,6250835]);const Z=new(0,h.default)({layer:"GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2"});X.default.addLayer(Z);const Y=new(0,o.default)({source:new(0,a.default)({url:"./paris-photo.geojson",format:new(0,u.default),attributions:["<a href='https://twitter.com/search?q=paris%20autrefois%20%28from%3ASamuelMartin75%29&src=typed_query&f=live'>@SamuelMartin</a>"]})}),J=new y({source:Y.getSource(),size:500}),$=new(0,p.default)({title:"Bin",className:"bin",source:J,style:e=>{const t=[0,170,255,e.get("features").length/10+.11];return new(0,x.default)({fill:new(0,v.default)({color:t})})}});$.addFilter(new(0,M.default)({blend:"multiply"})),X.default.addLayer($),X.default.addLayer(Y);const ee=new K({source:J.getSource()});X.default.addInteraction(ee),X.default.addInteraction(new(0,Q.default)({layers:[Y],cursor:"move"}));