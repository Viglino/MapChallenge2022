function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequirecc54;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequirecc54=o),o.register("iGyOD",(function(t,r){e(t.exports,"default",(()=>a));var n=o("fnScq"),s=o("cw4dl"),i=o("eJ4LZ"),h=o("bsgMw");class l extends n.default{constructor(e){if(super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),e)if("function"==typeof e.getSimplifiedGeometry){const t=e;this.setGeometry(t)}else{const t=e;this.setProperties(t)}}clone(){const e=new l(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());const t=this.getGeometry();t&&e.setGeometry(t.clone());const r=this.getStyle();return r&&e.setStyle(r),e}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&((0,h.unlistenByKey)(this.geometryChangeKey_),this.geometryChangeKey_=null);const e=this.getGeometry();e&&(this.geometryChangeKey_=(0,h.listen)(e,s.default.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(e){this.set(this.geometryName_,e)}setStyle(e){this.style_=e,this.styleFunction_=e?function(e){if("function"==typeof e)return e;{let t;if(Array.isArray(e))t=e;else{(0,i.assert)("function"==typeof e.getZIndex,41);t=[e]}return function(){return t}}}(e):void 0,this.changed()}setId(e){this.id_=e,this.changed()}setGeometryName(e){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()}}var a=l})),o.register("2zf1Y",(function(t,r){e(t.exports,"default",(()=>o));class n{constructor(e){e=e||{},this.color_=void 0!==e.color?e.color:null}clone(){const e=this.getColor();return new n({color:Array.isArray(e)?e.slice():e||void 0})}getColor(){return this.color_}setColor(e){this.color_=e}}var o=n}));