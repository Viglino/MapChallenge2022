var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=e.parcelRequirecc54;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,r.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},e.parcelRequirecc54=r),r.register("agkzb",(function(e,t){var i,s,n,o;i=e.exports,s="default",n=()=>p,Object.defineProperty(i,s,{get:n,set:o,enumerable:!0,configurable:!0});var l=r("ejLRd"),c=r("lwtpg"),a=r("fnScq"),f=r("gbCDL"),h=class extends a.default{constructor(e){super(e),this._listener=[],e&&!1===e.active?this.set("active",!1):this.set("active",!0)}setActive(e){this.set("active",!0===e)}getActive(){return this.get("active")}};!function(){function e(e){this.get("active")&&e.context&&this.precompose(e)}function t(e){this.get("active")&&e.context&&this.postcompose(e)}function i(){if(this.renderSync)try{this.renderSync()}catch(e){}else this.changed()}function r(r){this.filters_||(this.filters_=[]),this.filters_.push(r),r.addToLayer&&r.addToLayer(this),r.precompose&&r._listener.push({listener:this.on(["precompose","prerender"],e.bind(r)),target:this}),r.postcompose&&r._listener.push({listener:this.on(["postcompose","postrender"],t.bind(r)),target:this}),r._listener.push({listener:r.on("propertychange",i.bind(this)),target:this}),i.call(this)}function s(e){var t;if(this.filters_||(this.filters_=[]),e){for(t=this.filters_.length-1;t>=0;t--)this.filters_[t]===e&&this.filters_.splice(t,1);for(t=e._listener.length-1;t>=0;t--)e._listener[t].target===this&&(e.removeFromLayer&&e.removeFromLayer(this),(0,l.unByKey)(e._listener[t].listener),e._listener.splice(t,1));i.call(this)}else this.filters_.forEach(function(e){this.removeFilter(e)}.bind(this))}f.default.prototype.addFilter=function(e){console.warn("[OL-EXT] addFilter deprecated on map."),r.call(this,e)},f.default.prototype.removeFilter=function(e){s.call(this,e)},f.default.prototype.getFilters=function(){return this.filters_||[]},c.default.prototype.addFilter=function(e){r.call(this,e)},c.default.prototype.removeFilter=function(e){s.call(this,e)},c.default.prototype.getFilters=function(){return this.filters_||[]}}();var p=h}));