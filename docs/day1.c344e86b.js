function e(e,t,i,s){Object.defineProperty(e,t,{get:i,set:s,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},n=t.parcelRequirecc54;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},t.parcelRequirecc54=n),n.register("dUROT",(function(t,i){e(t.exports,"default",(()=>F));var s=n("31ZqB"),r=n("eHnTw"),o=n("iTTi2"),a=n("iGyOD"),l=n("7lBr2"),h=n("610XN"),d=n("eQaCk"),u=n("kKEgb"),y=n("l9IGS"),c=n("kBSVF"),g=n("lVQul"),f=n("btuox");const _="select";class m extends o.default{constructor(e,t,i,s){super(e),this.selected=t,this.deselected=i,this.mapBrowserEvent=s}}const p={};class v extends l.default{constructor(e){let t;if(super(),this.on,this.once,this.un,e=e||{},this.boundAddFeature_=this.addFeature_.bind(this),this.boundRemoveFeature_=this.removeFeature_.bind(this),this.condition_=e.condition?e.condition:f.singleClick,this.addCondition_=e.addCondition?e.addCondition:f.never,this.removeCondition_=e.removeCondition?e.removeCondition:f.never,this.toggleCondition_=e.toggleCondition?e.toggleCondition:f.shiftKeyOnly,this.multi_=!!e.multi&&e.multi,this.filter_=e.filter?e.filter:d.TRUE,this.hitTolerance_=e.hitTolerance?e.hitTolerance:0,this.style_=void 0!==e.style?e.style:function(){const e=(0,y.createEditingStyle)();return(0,c.extend)(e.Polygon,e.LineString),(0,c.extend)(e.GeometryCollection,e.LineString),function(t){return t.getGeometry()?e[t.getGeometry().getType()]:null}}(),this.features_=e.features||new(0,s.default),e.layers)if("function"==typeof e.layers)t=e.layers;else{const i=e.layers;t=function(e){return i.includes(e)}}else t=d.TRUE;this.layerFilter_=t,this.featureLayerAssociation_={}}addFeatureLayerAssociation_(e,t){this.featureLayerAssociation_[(0,g.getUid)(e)]=t}getFeatures(){return this.features_}getHitTolerance(){return this.hitTolerance_}getLayer(e){return this.featureLayerAssociation_[(0,g.getUid)(e)]}setHitTolerance(e){this.hitTolerance_=e}setMap(e){this.getMap()&&this.style_&&this.features_.forEach(this.restorePreviousStyle_.bind(this)),super.setMap(e),e?(this.features_.addEventListener(r.default.ADD,this.boundAddFeature_),this.features_.addEventListener(r.default.REMOVE,this.boundRemoveFeature_),this.style_&&this.features_.forEach(this.applySelectedStyle_.bind(this))):(this.features_.removeEventListener(r.default.ADD,this.boundAddFeature_),this.features_.removeEventListener(r.default.REMOVE,this.boundRemoveFeature_))}addFeature_(e){const t=e.element;if(this.style_&&this.applySelectedStyle_(t),!this.getLayer(t)){const e=this.getMap().getAllLayers().find((function(e){if(e instanceof h.default&&e.getSource()&&e.getSource().hasFeature(t))return e}));e&&this.addFeatureLayerAssociation_(t,e)}}removeFeature_(e){this.style_&&this.restorePreviousStyle_(e.element)}getStyle(){return this.style_}applySelectedStyle_(e){const t=(0,g.getUid)(e);t in p||(p[t]=e.getStyle()),e.setStyle(this.style_)}restorePreviousStyle_(e){const t=this.getMap().getInteractions().getArray();for(let i=t.length-1;i>=0;--i){const s=t[i];if(s!==this&&s instanceof v&&s.getStyle()&&-1!==s.getFeatures().getArray().lastIndexOf(e))return void e.setStyle(s.getStyle())}const i=(0,g.getUid)(e);e.setStyle(p[i]),delete p[i]}removeFeatureLayerAssociation_(e){delete this.featureLayerAssociation_[(0,g.getUid)(e)]}handleEvent(e){if(!this.condition_(e))return!0;const t=this.addCondition_(e),i=this.removeCondition_(e),s=this.toggleCondition_(e),n=!t&&!i&&!s,r=e.map,o=this.getFeatures(),l=[],h=[];if(n){(0,u.clear)(this.featureLayerAssociation_),r.forEachFeatureAtPixel(e.pixel,function(e,t){if(e instanceof a.default&&this.filter_(e,t))return this.addFeatureLayerAssociation_(e,t),h.push(e),!this.multi_}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(let e=o.getLength()-1;e>=0;--e){const t=o.item(e),i=h.indexOf(t);i>-1?h.splice(i,1):(o.remove(t),l.push(t))}0!==h.length&&o.extend(h)}else{r.forEachFeatureAtPixel(e.pixel,function(e,n){if(e instanceof a.default&&this.filter_(e,n))return!t&&!s||o.getArray().includes(e)?(i||s)&&o.getArray().includes(e)&&(l.push(e),this.removeFeatureLayerAssociation_(e)):(this.addFeatureLayerAssociation_(e,n),h.push(e)),!this.multi_}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(let e=l.length-1;e>=0;--e)o.remove(l[e]);o.extend(h)}return(h.length>0||l.length>0)&&this.dispatchEvent(new m(_,h,l,e)),!0}}var F=v})),n.register("iGyOD",(function(t,i){e(t.exports,"default",(()=>h));var s=n("fnScq"),r=n("cw4dl"),o=n("eJ4LZ"),a=n("bsgMw");class l extends s.default{constructor(e){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),e)if("function"==typeof e.getSimplifiedGeometry){const t=e;this.setGeometry(t)}else{const t=e;this.setProperties(t)}}clone(){const e=new l(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());const t=this.getGeometry();t&&e.setGeometry(t.clone());const i=this.getStyle();return i&&e.setStyle(i),e}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&((0,a.unlistenByKey)(this.geometryChangeKey_),this.geometryChangeKey_=null);const e=this.getGeometry();e&&(this.geometryChangeKey_=(0,a.listen)(e,r.default.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(e){this.set(this.geometryName_,e)}setStyle(e){this.style_=e,this.styleFunction_=e?function(e){if("function"==typeof e)return e;{let t;if(Array.isArray(e))t=e;else{(0,o.assert)("function"==typeof e.getZIndex,41);t=[e]}return function(){return t}}}(e):void 0,this.changed()}setId(e){this.id_=e,this.changed()}setGeometryName(e){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()}}var h=l}));