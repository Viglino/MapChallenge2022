function e(e,t,r,s){Object.defineProperty(e,t,{get:r,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},i=r.parcelRequirecc54;null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return s[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},r.parcelRequirecc54=i),i.register("kWPIP",(function(t,r){e(t.exports,"loadFeaturesXhr",(()=>a)),e(t.exports,"xhr",(()=>o));var s=i("eQaCk");let n=!1;function a(e,t,r,s,i,a,o){const u=new XMLHttpRequest;u.open("GET","function"==typeof e?e(r,s,i):e,!0),"arraybuffer"==t.getType()&&(u.responseType="arraybuffer"),u.withCredentials=n,u.onload=function(e){if(!u.status||u.status>=200&&u.status<300){const e=t.getType();let s;"json"==e||"text"==e?s=u.responseText:"xml"==e?(s=u.responseXML,s||(s=(new DOMParser).parseFromString(u.responseText,"application/xml"))):"arraybuffer"==e&&(s=u.response),s?a(t.readFeatures(s,{extent:r,featureProjection:i}),t.readProjection(s)):o()}else o()},u.onerror=o,u.send()}function o(e,t){return function(r,n,i,o,u){const h=this;a(e,t,r,n,i,(function(e,t){h.addFeatures(e),void 0!==o&&o(e)}),u||s.VOID)}}})),i.register("20LS2",(function(t,r){e(t.exports,"default",(()=>y));var s=i("31ZqB"),n=i("eHnTw"),a=i("iTTi2"),o=i("cw4dl"),u=i("5dXmB"),h=i("9iujS"),l=i("205E0"),d=i("gKdkP"),f=i("eQaCk"),c=i("gmEQj"),_=i("eJ4LZ"),E=i("jZquI"),g=i("kBSVF"),m=i("lVQul"),x=i("kKEgb"),p=i("bsgMw"),v=i("kWPIP");class F extends a.default{constructor(e,t,r){super(e),this.feature=t,this.features=r}}class I extends l.default{constructor(e){super({attributions:(e=e||{}).attributions,interpolate:!0,projection:void 0,state:"ready",wrapX:void 0===e.wrapX||e.wrapX}),this.on,this.once,this.un,this.loader_=f.VOID,this.format_=e.format,this.overlaps_=void 0===e.overlaps||e.overlaps,this.url_=e.url,void 0!==e.loader?this.loader_=e.loader:void 0!==this.url_&&((0,_.assert)(this.format_,7),this.loader_=(0,v.xhr)(this.url_,this.format_)),this.strategy_=void 0!==e.strategy?e.strategy:c.all;const t=void 0===e.useSpatialIndex||e.useSpatialIndex;let r,n;this.featuresRtree_=t?new(0,h.default):null,this.loadedExtentsRtree_=new(0,h.default),this.loadingExtentsCount_=0,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null,Array.isArray(e.features)?n=e.features:e.features&&(r=e.features,n=r.getArray()),t||void 0!==r||(r=new(0,s.default)(n)),void 0!==n&&this.addFeaturesInternal(n),void 0!==r&&this.bindFeaturesCollection_(r)}addFeature(e){this.addFeatureInternal(e),this.changed()}addFeatureInternal(e){const t=(0,m.getUid)(e);if(!this.addToIndex_(t,e))return void(this.featuresCollection_&&this.featuresCollection_.remove(e));this.setupChangeEvents_(t,e);const r=e.getGeometry();if(r){const t=r.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(t,e)}else this.nullGeometryFeatures_[t]=e;this.dispatchEvent(new F(d.default.ADDFEATURE,e))}setupChangeEvents_(e,t){this.featureChangeKeys_[e]=[(0,p.listen)(t,o.default.CHANGE,this.handleFeatureChange_,this),(0,p.listen)(t,u.default.PROPERTYCHANGE,this.handleFeatureChange_,this)]}addToIndex_(e,t){let r=!0;const s=t.getId();return void 0!==s&&(s.toString()in this.idIndex_?r=!1:this.idIndex_[s.toString()]=t),r&&((0,_.assert)(!(e in this.uidIndex_),30),this.uidIndex_[e]=t),r}addFeatures(e){this.addFeaturesInternal(e),this.changed()}addFeaturesInternal(e){const t=[],r=[],s=[];for(let t=0,s=e.length;t<s;t++){const s=e[t],n=(0,m.getUid)(s);this.addToIndex_(n,s)&&r.push(s)}for(let e=0,n=r.length;e<n;e++){const n=r[e],i=(0,m.getUid)(n);this.setupChangeEvents_(i,n);const a=n.getGeometry();if(a){const e=a.getExtent();t.push(e),s.push(n)}else this.nullGeometryFeatures_[i]=n}if(this.featuresRtree_&&this.featuresRtree_.load(t,s),this.hasListener(d.default.ADDFEATURE))for(let e=0,t=r.length;e<t;e++)this.dispatchEvent(new F(d.default.ADDFEATURE,r[e]))}bindFeaturesCollection_(e){let t=!1;this.addEventListener(d.default.ADDFEATURE,(function(r){t||(t=!0,e.push(r.feature),t=!1)})),this.addEventListener(d.default.REMOVEFEATURE,(function(r){t||(t=!0,e.remove(r.feature),t=!1)})),e.addEventListener(n.default.ADD,function(e){t||(t=!0,this.addFeature(e.element),t=!1)}.bind(this)),e.addEventListener(n.default.REMOVE,function(e){t||(t=!0,this.removeFeature(e.element),t=!1)}.bind(this)),this.featuresCollection_=e}clear(e){if(e){for(const e in this.featureChangeKeys_){this.featureChangeKeys_[e].forEach(p.unlistenByKey)}this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){const e=function(e){this.removeFeatureInternal(e)}.bind(this);this.featuresRtree_.forEach(e);for(const e in this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[e])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};const t=new F(d.default.CLEAR);this.dispatchEvent(t),this.changed()}forEachFeature(e){if(this.featuresRtree_)return this.featuresRtree_.forEach(e);this.featuresCollection_&&this.featuresCollection_.forEach(e)}forEachFeatureAtCoordinateDirect(e,t){const r=[e[0],e[1],e[0],e[1]];return this.forEachFeatureInExtent(r,(function(r){return r.getGeometry().intersectsCoordinate(e)?t(r):void 0}))}forEachFeatureInExtent(e,t){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(e,t);this.featuresCollection_&&this.featuresCollection_.forEach(t)}forEachFeatureIntersectingExtent(e,t){return this.forEachFeatureInExtent(e,(function(r){if(r.getGeometry().intersectsExtent(e)){const e=t(r);if(e)return e}}))}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let e;return this.featuresCollection_?e=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(e=this.featuresRtree_.getAll(),(0,x.isEmpty)(this.nullGeometryFeatures_)||(0,g.extend)(e,Object.values(this.nullGeometryFeatures_))),e}getFeaturesAtCoordinate(e){const t=[];return this.forEachFeatureAtCoordinateDirect(e,(function(e){t.push(e)})),t}getFeaturesInExtent(e,t){if(this.featuresRtree_){if(!(t&&t.canWrapX()&&this.getWrapX()))return this.featuresRtree_.getInExtent(e);const r=(0,E.wrapAndSliceX)(e,t);return[].concat(...r.map((e=>this.featuresRtree_.getInExtent(e))))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(e,t){const r=e[0],s=e[1];let n=null;const i=[NaN,NaN];let a=1/0;const o=[-1/0,-1/0,1/0,1/0];return t=t||f.TRUE,this.featuresRtree_.forEachInExtent(o,(function(e){if(t(e)){const t=e.getGeometry(),u=a;if(a=t.closestPointXY(r,s,i,a),a<u){n=e;const t=Math.sqrt(a);o[0]=r-t,o[1]=s-t,o[2]=r+t,o[3]=s+t}}})),n}getExtent(e){return this.featuresRtree_.getExtent(e)}getFeatureById(e){const t=this.idIndex_[e.toString()];return void 0!==t?t:null}getFeatureByUid(e){const t=this.uidIndex_[e];return void 0!==t?t:null}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(e){const t=e.target,r=(0,m.getUid)(t),s=t.getGeometry();if(s){const e=s.getExtent();r in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[r],this.featuresRtree_&&this.featuresRtree_.insert(e,t)):this.featuresRtree_&&this.featuresRtree_.update(e,t)}else r in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(t),this.nullGeometryFeatures_[r]=t);const n=t.getId();if(void 0!==n){const e=n.toString();this.idIndex_[e]!==t&&(this.removeFromIdIndex_(t),this.idIndex_[e]=t)}else this.removeFromIdIndex_(t),this.uidIndex_[r]=t;this.changed(),this.dispatchEvent(new F(d.default.CHANGEFEATURE,t))}hasFeature(e){const t=e.getId();return void 0!==t?t in this.idIndex_:(0,m.getUid)(e)in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&(0,x.isEmpty)(this.nullGeometryFeatures_):!this.featuresCollection_||0===this.featuresCollection_.getLength()}loadFeatures(e,t,r){const s=this.loadedExtentsRtree_,n=this.strategy_(e,t,r);for(let e=0,i=n.length;e<i;++e){const i=n[e];s.forEachInExtent(i,(function(e){return(0,E.containsExtent)(e.extent,i)}))||(++this.loadingExtentsCount_,this.dispatchEvent(new F(d.default.FEATURESLOADSTART)),this.loader_.call(this,i,t,r,function(e){--this.loadingExtentsCount_,this.dispatchEvent(new F(d.default.FEATURESLOADEND,void 0,e))}.bind(this),function(){--this.loadingExtentsCount_,this.dispatchEvent(new F(d.default.FEATURESLOADERROR))}.bind(this)),s.insert(i,{extent:i.slice()}))}this.loading=!(this.loader_.length<4)&&this.loadingExtentsCount_>0}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(e){const t=this.loadedExtentsRtree_;let r;t.forEachInExtent(e,(function(t){if((0,E.equals)(t.extent,e))return r=t,!0})),r&&t.remove(r)}removeFeature(e){if(!e)return;const t=(0,m.getUid)(e);t in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[t]:this.featuresRtree_&&this.featuresRtree_.remove(e);this.removeFeatureInternal(e)&&this.changed()}removeFeatureInternal(e){const t=(0,m.getUid)(e),r=this.featureChangeKeys_[t];if(!r)return;r.forEach(p.unlistenByKey),delete this.featureChangeKeys_[t];const s=e.getId();return void 0!==s&&delete this.idIndex_[s.toString()],delete this.uidIndex_[t],this.dispatchEvent(new F(d.default.REMOVEFEATURE,e)),e}removeFromIdIndex_(e){let t=!1;for(const r in this.idIndex_)if(this.idIndex_[r]===e){delete this.idIndex_[r],t=!0;break}return t}setLoader(e){this.loader_=e}setUrl(e){(0,_.assert)(this.format_,7),this.url_=e,this.setLoader((0,v.xhr)(e,this.format_))}}var y=I})),i.register("9iujS",(function(r,s){e(r.exports,"default",(()=>h));var n=i("4wfAy"),a=i("jZquI"),o=i("lVQul"),u=i("kKEgb");var h=class{constructor(e){this.rbush_=new(t(n))(e),this.items_={}}insert(e,t){const r={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3],value:t};this.rbush_.insert(r),this.items_[(0,o.getUid)(t)]=r}load(e,t){const r=new Array(t.length);for(let s=0,n=t.length;s<n;s++){const n=e[s],i=t[s],a={minX:n[0],minY:n[1],maxX:n[2],maxY:n[3],value:i};r[s]=a,this.items_[(0,o.getUid)(i)]=a}this.rbush_.load(r)}remove(e){const t=(0,o.getUid)(e),r=this.items_[t];return delete this.items_[t],null!==this.rbush_.remove(r)}update(e,t){const r=this.items_[(0,o.getUid)(t)],s=[r.minX,r.minY,r.maxX,r.maxY];(0,a.equals)(s,e)||(this.remove(t),this.insert(e,t))}getAll(){return this.rbush_.all().map((function(e){return e.value}))}getInExtent(e){const t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this.rbush_.search(t).map((function(e){return e.value}))}forEach(e){return this.forEach_(this.getAll(),e)}forEachInExtent(e,t){return this.forEach_(this.getInExtent(e),t)}forEach_(e,t){let r;for(let s=0,n=e.length;s<n;s++)if(r=t(e[s]),r)return r;return r}isEmpty(){return(0,u.isEmpty)(this.items_)}clear(){this.rbush_.clear(),this.items_={}}getExtent(e){const t=this.rbush_.toJSON();return(0,a.createOrUpdate)(t.minX,t.minY,t.maxX,t.maxY,e)}concat(e){this.rbush_.load(e.rbush_.all());for(const t in e.items_)this.items_[t]=e.items_[t]}}})),i.register("gmEQj",(function(t,r){e(t.exports,"all",(()=>n)),e(t.exports,"bbox",(()=>a)),e(t.exports,"tile",(()=>o));var s=i("gzr8q");function n(e,t){return[[-1/0,-1/0,1/0,1/0]]}function a(e,t){return[e]}function o(e){return function(t,r,n){const i=e.getZForResolution((0,s.fromUserResolution)(r,n)),a=e.getTileRangeForExtentAndZ((0,s.fromUserExtent)(t,n),i),o=[],u=[i,0,0];for(u[1]=a.minX;u[1]<=a.maxX;++u[1])for(u[2]=a.minY;u[2]<=a.maxY;++u[2])o.push((0,s.toUserExtent)(e.getTileCoordExtent(u),n));return o}}}));