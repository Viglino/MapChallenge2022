function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=t.parcelRequirecc54;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},t.parcelRequirecc54=r);var o=r("6gELa"),n=r("4b0g4"),a=r("2RsmU"),h=r("cgPpQ"),l=r("jZquI"),c=r("610XN"),u=r("20LS2"),g=r("iGyOD"),d=r("l9IGS"),_=r("d5AAH"),f=(u=r("20LS2"),r("2zf1Y")),p=(c=r("610XN"),r("j2K3b")),m=(g=r("iGyOD"),r("31ZqB")),v=r("pMeEw"),y=r("h6Aha"),w=(r("cgPpQ"),l=r("jZquI"),r("ejLRd")),E=(h=r("cgPpQ"),class extends v.default{constructor(e){e=e||{},super({handleDownEvent:function(e){return t.handleDownEvent_(e)},handleDragEvent:function(e){return this.handleDragEvent_(e)},handleMoveEvent:function(e){return this.handleMoveEvent_(e)},handleUpEvent:function(e){return this.handleUpEvent_(e)}});var t=this;this.selection_=new(0,m.default),this.handles_=new(0,m.default),this.overlayLayer_=new(0,c.default)({source:new(0,u.default)({features:this.handles_,useSpatialIndex:!1,wrapX:!1}),name:"Transform overlay",displayInLayerSwitcher:!1,style:function(e){return t.style[(e.get("handle")||"default")+(e.get("constraint")||"")+(e.get("option")||"")]}}),this.features_=e.features,"function"==typeof e.filter&&(this._filter=e.filter),this.layers_=e.layers?e.layers instanceof Array?e.layers:[e.layers]:null,this._handleEvent=e.condition||function(){return!0},this.addFn_=e.addCondition||function(){return!1},this.setPointRadius(e.pointRadius),this.set("translateFeature",!1!==e.translateFeature),this.set("translate",!1!==e.translate),this.set("translateBBox",!0===e.translateBBox),this.set("stretch",!1!==e.stretch),this.set("scale",!1!==e.scale),this.set("rotate",!1!==e.rotate),this.set("keepAspectRatio",e.keepAspectRatio||function(e){return e.originalEvent.shiftKey}),this.set("modifyCenter",e.modifyCenter||function(e){return e.originalEvent.metaKey||e.originalEvent.ctrlKey}),this.set("noFlip",e.noFlip||!1),this.set("selection",!1!==e.selection),this.set("hitTolerance",e.hitTolerance||0),this.set("enableRotatedTransform",e.enableRotatedTransform||!1),this.set("keepRectangle",e.keepRectangle||!1),this.set("buffer",e.buffer||0),this.on("propertychange",(function(){this.drawSketch_()})),this.setDefaultStyle()}setMap(e){var t=this.getMap();if(t){var i=t.getTargetElement();t.removeLayer(this.overlayLayer_),this.previousCursor_&&i&&(i.style.cursor=this.previousCursor_),this.previousCursor_=void 0}super.setMap(e),this.overlayLayer_.setMap(e),null===e&&this.select(null),null!==e&&(this.isTouch=/touch/.test(e.getViewport().className),this.setDefaultStyle())}setActive(e){this.select(null),this.overlayLayer_&&this.overlayLayer_.setVisible(e),super.setActive(e)}setDefaultStyle(e){var t=(e=e||{}).pointStroke||new(0,_.default)({color:[255,0,0,1],width:1}),i=e.stroke||new(0,_.default)({color:[255,0,0,1],width:1,lineDash:[4,4]}),s=e.fill||new(0,f.default)({color:[255,0,0,.01]}),r=e.pointFill||new(0,f.default)({color:[255,255,255,.8]}),o=new(0,y.default)({fill:r,stroke:t,radius:this.isTouch?12:6,displacement:this.isTouch?[24,-24]:[12,-12],points:15});o.setDisplacement||(o.getAnchor()[0]=this.isTouch?-10:-5);var n=new(0,y.default)({fill:r,stroke:t,radius:this.isTouch?16:8,points:4,angle:Math.PI/4}),a=new(0,y.default)({fill:r,stroke:t,radius:this.isTouch?12:6,points:4,angle:Math.PI/4});function h(e,t,i){return[new(0,d.default)({image:e,stroke:t,fill:i})]}this.style={default:h(n,i,s),translate:h(n,t,r),rotate:h(o,t,r),rotate0:h(n,t,r),scale:h(n,t,r),scale1:h(n,t,r),scale2:h(n,t,r),scale3:h(n,t,r),scalev:h(a,t,r),scaleh1:h(a,t,r),scalev2:h(a,t,r),scaleh3:h(a,t,r)},this.drawSketch_()}setStyle(e,t){if(t){this.style[e]=t instanceof Array?t:[t];for(var i=0;i<this.style[e].length;i++){var s=this.style[e][i].getImage();s&&("rotate"==e&&(s.getAnchor()[0]=-5),this.isTouch&&s.setScale(1.8));var r=this.style[e][i].getText();r&&("rotate"==e&&r.setOffsetX(this.isTouch?14:7),this.isTouch&&r.setScale(1.8))}this.drawSketch_()}}getFeatureAtPixel_(e){var t=this;return this.getMap().forEachFeatureAtPixel(e,(function(e,i){var s=!1;if(!i){if(e===t.bbox_)return!!t.get("translateBBox")&&{feature:e,handle:"translate",constraint:"",option:""};if(t.handles_.forEach((function(t){t===e&&(s=!0)})),s)return{feature:e,handle:e.get("handle"),constraint:e.get("constraint"),option:e.get("option")}}if(!t.get("selection"))return t.selection_.getArray().some((function(t){return e===t}))?{feature:e}:null;if(t._filter)return t._filter(e,i)?{feature:e}:null;if(t.layers_){for(var r=0;r<t.layers_.length;r++)if(t.layers_[r]===i)return{feature:e};return null}return t.features_?(t.features_.forEach((function(t){t===e&&(s=!0)})),s?{feature:e}:null):{feature:e}}),{hitTolerance:this.get("hitTolerance")})||{}}getGeometryRotateToZero_(e,t){var i=e.getGeometry(),s=this.getMap().getView().getRotation();if(0===s||!this.get("enableRotatedTransform"))return t?i.clone():i;var r=i.clone();return r.rotate(-1*s,this.getMap().getView().getCenter()),r}_isRectangle(e){return!(!this.get("keepRectangle")||"Polygon"!==e.getType())&&5===e.getCoordinates()[0].length}drawSketch_(e){var t,i,s,r=this.selection_.item(0)&&this._isRectangle(this.selection_.item(0).getGeometry());if(this.overlayLayer_.getSource().clear(),this.selection_.getLength()){var o,n=this.getMap().getView().getRotation(),a=this.getGeometryRotateToZero_(this.selection_.item(0)).getExtent();r&&(o=this.getGeometryRotateToZero_(this.selection_.item(0)).getCoordinates()[0].slice(0,4)).unshift(o[3]),a=(0,l.buffer)(a,this.get("buffer")),this.selection_.forEach(function(e){var t=this.getGeometryRotateToZero_(e).getExtent();(0,l.extend)(a,t)}.bind(this));var c=1===this.selection_.getLength()?this._pointRadius(this.selection_.item(0)):0;if(!c||c instanceof Array||(c=[c,c]),!0===e)this.ispt_||(this.overlayLayer_.getSource().addFeature(new(0,g.default)({geometry:new(0,p.default)(this.center_),handle:"rotate0"})),s=(0,h.fromExtent)(a),this.get("enableRotatedTransform")&&0!==n&&s.rotate(n,this.getMap().getView().getCenter()),i=this.bbox_=new(0,g.default)(s),this.overlayLayer_.getSource().addFeature(i));else{if(this.ispt_){var u=this.getMap().getPixelFromCoordinate([a[0],a[1]]);if(u){var d=c&&c[0]||10,_=c&&c[1]||10;a=(0,l.boundingExtent)([this.getMap().getCoordinateFromPixel([u[0]-d,u[1]-_]),this.getMap().getCoordinateFromPixel([u[0]+d,u[1]+_])])}}s=r?new(0,h.default)([o]):(0,h.fromExtent)(a),this.get("enableRotatedTransform")&&0!==n&&s.rotate(n,this.getMap().getView().getCenter()),i=this.bbox_=new(0,g.default)(s);var f=[],m=s.getCoordinates()[0];if(!this.ispt_||c){if(f.push(i),!this.iscircle_&&!this.ispt_&&this.get("stretch")&&this.get("scale"))for(t=0;t<m.length-1;t++)i=new(0,g.default)({geometry:new(0,p.default)([(m[t][0]+m[t+1][0])/2,(m[t][1]+m[t+1][1])/2]),handle:"scale",constraint:t%2?"h":"v",option:t}),f.push(i);if(this.get("scale"))for(t=0;t<m.length-1;t++)i=new(0,g.default)({geometry:new(0,p.default)(m[t]),handle:"scale",option:t}),f.push(i);this.get("translate")&&!this.get("translateFeature")&&(i=new(0,g.default)({geometry:new(0,p.default)([(m[0][0]+m[2][0])/2,(m[0][1]+m[2][1])/2]),handle:"translate"}),f.push(i))}!this.iscircle_&&this.get("rotate")&&(i=new(0,g.default)({geometry:new(0,p.default)(m[3]),handle:"rotate"}),f.push(i)),this.overlayLayer_.getSource().addFeatures(f)}}}select(e,t){if(e){if(e.getGeometry&&e.getGeometry()){if(t)this.selection_.push(e);else{var i=this.selection_.getArray().indexOf(e);this.selection_.removeAt(i)}this.ispt_=1===this.selection_.getLength()&&"Point"==this.selection_.item(0).getGeometry().getType(),this.iscircle_=1===this.selection_.getLength()&&"Circle"==this.selection_.item(0).getGeometry().getType(),this.drawSketch_(),this.watchFeatures_(),this.dispatchEvent({type:"select",feature:e,features:this.selection_})}}else this.selection_&&(this.selection_.clear(),this.drawSketch_())}setSelection(e){this.selection_.clear(),e.forEach(function(e){this.selection_.push(e)}.bind(this)),this.ispt_=1===this.selection_.getLength()&&"Point"==this.selection_.item(0).getGeometry().getType(),this.iscircle_=1===this.selection_.getLength()&&"Circle"==this.selection_.item(0).getGeometry().getType(),this.drawSketch_(),this.watchFeatures_(),this.dispatchEvent({type:"select",features:this.selection_})}watchFeatures_(){this._featureListeners&&this._featureListeners.forEach((function(e){(0,w.unByKey)(e)})),this._featureListeners=[],this.selection_.forEach(function(e){this._featureListeners.push(e.on("change",function(){this.isUpdating_||this.drawSketch_()}.bind(this)))}.bind(this))}handleDownEvent_(e){if(this._handleEvent(e,this.selection_)){var t=this.getFeatureAtPixel_(e.pixel),i=t.feature;if(this.selection_.getLength()&&this.selection_.getArray().indexOf(i)>=0&&(this.ispt_&&this.get("translate")||this.get("translateFeature"))&&(t.handle="translate"),t.handle){this.mode_=t.handle,this.opt_=t.option,this.constraint_=t.constraint;var s=this.getMap().getView().getRotation();this.coordinate_=i.get("handle")?i.getGeometry().getCoordinates():e.coordinate,this.pixel_=this.getMap().getCoordinateFromPixel(this.coordinate_),this.geoms_=[],this.rotatedGeoms_=[];for(var r,o=(0,l.createEmpty)(),n=(0,l.createEmpty)(),a=0;r=this.selection_.item(a);a++)if(this.geoms_.push(r.getGeometry().clone()),o=(0,l.extend)(o,r.getGeometry().getExtent()),this.get("enableRotatedTransform")&&0!==s){var c=this.getGeometryRotateToZero_(r,!0);this.rotatedGeoms_.push(c),n=(0,l.extend)(n,c.getExtent())}if(this.extent_=(0,h.fromExtent)(o).getCoordinates()[0],this.get("enableRotatedTransform")&&0!==s&&(this.rotatedExtent_=(0,h.fromExtent)(n).getCoordinates()[0]),"rotate"===this.mode_){this.center_=this.getCenter()||(0,l.getCenter)(o);var u=e.map.getTargetElement();u.style.cursor=this.Cursors.rotate0,this.previousCursor_=u.style.cursor}else this.center_=(0,l.getCenter)(o);return this.angle_=Math.atan2(this.center_[1]-e.coordinate[1],this.center_[0]-e.coordinate[0]),this.dispatchEvent({type:this.mode_+"start",feature:this.selection_.item(0),features:this.selection_,pixel:e.pixel,coordinate:e.coordinate}),!0}if(this.get("selection")){if(i){this.addFn_(e)||this.selection_.clear();var g=this.selection_.getArray().indexOf(i);g<0?this.selection_.push(i):this.selection_.removeAt(g)}else this.selection_.clear();return this.ispt_=1===this.selection_.getLength()&&"Point"==this.selection_.item(0).getGeometry().getType(),this.iscircle_=1===this.selection_.getLength()&&"Circle"==this.selection_.item(0).getGeometry().getType(),this.drawSketch_(),this.watchFeatures_(),this.dispatchEvent({type:"select",feature:i,features:this.selection_,pixel:e.pixel,coordinate:e.coordinate}),!1}}}getCenter(){return this.get("center")}setCenter(e){return this.set("center",e)}handleDragEvent_(e){if(this._handleEvent(e,this.features_)){var t,i,s,r,o=this.getMap().getView().getRotation(),n=[this.coordinate_[0],this.coordinate_[1]],a=[e.coordinate[0],e.coordinate[1]];switch(this.isUpdating_=!0,this.mode_){case"rotate":var h=Math.atan2(this.center_[1]-a[1],this.center_[0]-a[0]);if(!this.ispt)for(t=0;s=this.selection_.item(t);t++)(r=this.geoms_[t].clone()).rotate(h-this.angle_,this.center_),"Circle"==r.getType()&&r.setCenterAndRadius(r.getCenter(),r.getRadius()),s.setGeometry(r);this.drawSketch_(!0),this.dispatchEvent({type:"rotating",feature:this.selection_.item(0),features:this.selection_,angle:h-this.angle_,pixel:e.pixel,coordinate:e.coordinate});break;case"translate":var l=a[0]-n[0],c=a[1]-n[1];for(t=0;s=this.selection_.item(t);t++)s.getGeometry().translate(l,c);this.handles_.forEach((function(e){e.getGeometry().translate(l,c)})),this.coordinate_=e.coordinate,this.dispatchEvent({type:"translating",feature:this.selection_.item(0),features:this.selection_,delta:[l,c],pixel:e.pixel,coordinate:e.coordinate});break;case"scale":var u=this.center_;if(this.get("modifyCenter")(e)){var g=this.extent_;this.get("enableRotatedTransform")&&0!==o&&(g=this.rotatedExtent_),u=g[(Number(this.opt_)+2)%4]}var d=1==this.geoms_.length&&this._isRectangle(this.geoms_[0]),_=this.constraint_,f=this.opt_,m=this.coordinate_,v=e.coordinate;if(this.get("enableRotatedTransform")&&0!==o){var y=new(0,p.default)(this.coordinate_);y.rotate(-1*o,u),m=y.getCoordinates();var w=new(0,p.default)(e.coordinate);w.rotate(-1*o,u),v=w.getCoordinates()}var E=(v[0]-u[0])/(m[0]-u[0]),x=(v[1]-u[1])/(m[1]-u[1]),C=[v[0]-m[0],v[1]-m[1]];if(this.get("enableRotatedTransform")&&0!==o){var S=new(0,p.default)(u);S.rotate(-1*o,this.getMap().getView().getCenter()),u=S.getCoordinates()}for(this.get("noFlip")&&(E<0&&(E=-E),x<0&&(x=-x)),this.constraint_?"h"==this.constraint_?E=1:x=1:this.get("keepAspectRatio")(e)&&(E=x=Math.min(E,x)),t=0;s=this.selection_.item(t);t++)(r=0!==o&&this.get("enableRotatedTransform")?this.rotatedGeoms_[t].clone():this.geoms_[t].clone()).applyTransform(function(e,t,s){if(s<2)return t;if(d){var o=[[6],[0,8],[2],[4]],n=[e[0],e[1]],a=[e[2],e[3]],h=[e[4],e[5]],l=[e[6],e[7]],c=[e[8],e[9]];if(_){var g=f%2==0?this._countVector(n,a):this._countVector(l,n),p=this._projectVectorOnVector(C,g),m=[...o[f],...o[f+1<o.length?f+1:0]];for(i=0;i<e.length;i+=s)t[i]=m.includes(i)?e[i]+p[0]:e[i],t[i+1]=m.includes(i)?e[i+1]+p[1]:e[i+1]}else{var y,w;switch(f){case 0:C=this._countVector(l,v),y=this._projectVectorOnVector(C,this._countVector(h,l)),w=this._projectVectorOnVector(C,this._countVector(n,l)),[t[0],t[1]]=this._movePoint(n,y),[t[4],t[5]]=this._movePoint(h,w),[t[6],t[7]]=this._movePoint(l,C),[t[8],t[9]]=this._movePoint(c,y);break;case 1:C=this._countVector(n,v),y=this._projectVectorOnVector(C,this._countVector(l,n)),w=this._projectVectorOnVector(C,this._countVector(a,n)),[t[0],t[1]]=this._movePoint(n,C),[t[2],t[3]]=this._movePoint(a,y),[t[6],t[7]]=this._movePoint(l,w),[t[8],t[9]]=this._movePoint(c,C);break;case 2:C=this._countVector(a,v),y=this._projectVectorOnVector(C,this._countVector(n,a)),w=this._projectVectorOnVector(C,this._countVector(h,a)),[t[0],t[1]]=this._movePoint(n,w),[t[2],t[3]]=this._movePoint(a,C),[t[4],t[5]]=this._movePoint(h,y),[t[8],t[9]]=this._movePoint(c,w);break;case 3:C=this._countVector(h,v),y=this._projectVectorOnVector(C,this._countVector(a,h)),w=this._projectVectorOnVector(C,this._countVector(l,h)),[t[2],t[3]]=this._movePoint(a,w),[t[4],t[5]]=this._movePoint(h,C),[t[6],t[7]]=this._movePoint(l,y)}}}else for(i=0;i<e.length;i+=s)1!=E&&(t[i]=u[0]+(e[i]-u[0])*E),1!=x&&(t[i+1]=u[1]+(e[i+1]-u[1])*x);return"Circle"==r.getType()&&r.setCenterAndRadius(r.getCenter(),r.getRadius()),t}.bind(this)),this.get("enableRotatedTransform")&&0!==o&&r.rotate(o,this.getMap().getView().getCenter()),s.setGeometry(r);this.drawSketch_(),this.dispatchEvent({type:"scaling",feature:this.selection_.item(0),features:this.selection_,scale:[E,x],pixel:e.pixel,coordinate:e.coordinate})}this.isUpdating_=!1}}handleMoveEvent_(e){if(this._handleEvent(e,this.features_)&&!this.mode_){var t=this.getFeatureAtPixel_(e.pixel),i=e.map.getTargetElement();if(t.feature){var s=t.handle?this.Cursors[(t.handle||"default")+(t.constraint||"")+(t.option||"")]:this.Cursors.select;void 0===this.previousCursor_&&(this.previousCursor_=i.style.cursor),i.style.cursor=s}else void 0!==this.previousCursor_&&(i.style.cursor=this.previousCursor_),this.previousCursor_=void 0}}handleUpEvent_(e){"rotate"===this.mode_&&(e.map.getTargetElement().style.cursor=this.Cursors.default,this.previousCursor_=void 0);return this.dispatchEvent({type:this.mode_+"end",feature:this.selection_.item(0),features:this.selection_,oldgeom:this.geoms_[0],oldgeoms:this.geoms_}),this.drawSketch_(),this.mode_=null,!1}setPointRadius(e){this._pointRadius="function"==typeof e?e:function(){return e}}getFeatures(){return this.selection_}_projectVectorOnVector(e,t){var i=(e[0]*t[0]+e[1]*t[1])/(t[0]*t[0]+t[1]*t[1]);return[t[0]*i,t[1]*i]}_countVector(e,t){return[t[0]-e[0],t[1]-e[1]]}_movePoint(e,t){return[e[0]+t[0],e[1]+t[1]]}});E.prototype.Cursors={default:"auto",select:"pointer",translate:"move",rotate:"move",rotate0:"move",scale:"nesw-resize",scale1:"nwse-resize",scale2:"nesw-resize",scale3:"nwse-resize",scalev:"ew-resize",scaleh1:"ns-resize",scalev2:"ew-resize",scaleh3:"ns-resize"};var x=E,C=r("23ytq"),S=(d=r("l9IGS"),f=r("2zf1Y"),r("1B70O"));(0,r("jZUWm").default)(e('<div> <h2> Day 12: GeoImage transform and scale </h2> <p> Use <a href="http://viglino.github.io/ol-ext/doc/doc-pages/ol.interaction.Transform.html" target="_new"> ol-ext Transform interaction</a> to scale a GeoImage on the map. </p> </div>')),S.permalink.setUrlReplace(!1);const R=new(0,o.default)({layer:"GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2"});S.default.addLayer(R),S.default.getView().setZoom(14),S.default.getView().setCenter([274764,6243935]);const T=new(0,n.default)({name:"Georef",opacity:1,source:new(0,a.default)({url:"https://viglino.github.io/ol-ext/examples/data/IGNF_PVA_1-0__1976-03-24_pt.jpg",imageCenter:[274764.75,6243935.64],imageScale:[.589,.597],imageRotate:7.44*Math.PI/180,projection:"EPSG:3857",attributions:["<a href='http://www.geoportail.gouv.fr/actualite/181/telechargez-les-cartes-et-photographies-aeriennes-historiques'>Photo historique &copy; IGN</a>"]})});S.default.addLayer(T);const V=new(0,o.default)({layer:"TRANSPORTNETWORKS.ROADS",opacity:.3});S.default.addLayer(V),T.getSource().getPolygon=function(){var e=this.getCenter(),t=this.getScale(),i=this.getGeoImage().width*t[0],s=this.getGeoImage().height*t[1],r=[e[0]-i/2,e[1]-s/2],o=[e[0]+i/2,e[1]+s/2],n=(0,l.boundingExtent)([r,o]),a=(0,h.fromExtent)(n);return a.rotate(-this.getRotation(),e),a};const b=new(0,c.default)({source:new(0,u.default),style:new(0,d.default)({fill:new(0,f.default)({color:"rgba(0,0,0,0)"})})});S.default.addLayer(b);const G=new(0,g.default)(T.getSource().getPolygon());b.getSource().addFeature(G),T.getSource().getGeoImage().addEventListener("load",(()=>{const e=new(0,g.default)(T.getSource().getPolygon());G.setGeometry(e.getGeometry())}));const P=new x({selection:!1,stretch:!1,keepRectangle:!0});let L,k,A,M;S.default.addInteraction(P),P.select(G,!0),P.on("rotatestart",(e=>{L=T.getSource().getRotation()})),P.on("rotating",(e=>{T.getSource().setRotation(L-e.angle)})),P.on("translatestart",(e=>{k=T.getSource().getCenter()})),P.on("translating",(e=>{k[0]+=e.delta[0],k[1]+=e.delta[1],T.getSource().setCenter(k)})),P.on("scalestart",(e=>{A=T.getSource().getScale()[0],M=T.getSource().getScale()[1]})),P.on("scaling",(e=>{const t=G.getGeometry().getCoordinates().pop(),i=(0,C.ol_coordinate_dist2d)(t[0],t[1]),s=(0,C.ol_coordinate_dist2d)(t[1],t[2]),r=[(t[0][0]+t[2][0])/2,(t[0][1]+t[2][1])/2],o=T.getSource().getGeoImage();T.getSource().setScale([s/o.width,i/o.height]),T.getSource().setCenter(r)})),window.geoimg=T,window.transform=P;