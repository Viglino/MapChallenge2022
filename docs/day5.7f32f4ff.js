var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequirecc54;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,s.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequirecc54=s),s.register("5Revz",(function(e,t){var n,o,r,a;n=e.exports,o="default",r=()=>l,Object.defineProperty(n,o,{get:r,set:a,enumerable:!0,configurable:!0});var i=s("agkzb"),d=class extends i.default{constructor(e){super(e),this._layers=[]}setBlend(e){this.set("blend",e),this._layers.forEach((function(t){t.once("postrender",function(t){t.context.canvas.parentNode.style["mix-blend-mode"]=e||""}.bind(this)),t.changed()}))}setFilter(e){this.set("filter",e),this._layers.forEach((function(t){t.once("postrender",function(t){t.context.canvas.parentNode.style.filter=e||""}.bind(this)),t.changed()}))}setDisplay(e){this.set("display",e),this._layers.forEach((function(t){t.once("postrender",function(t){t.context.canvas.parentNode.style.display=e?"":"none"}.bind(this)),t.changed()}))}addToLayer(e){e.once("postrender",function(e){e.context.canvas.parentNode.style["mix-blend-mode"]=this.get("blend")||"",e.context.canvas.parentNode.style.filter=this.get("filter")||"",e.context.canvas.parentNode.style.display=!1!==this.get("display")?"":"none"}.bind(this)),e.changed(),this._layers.push(e)}removeFromLayer(e){var t=this._layers.indexOf(e);t>=0&&(e.once("postrender",function(e){e.context.canvas.parentNode.style["mix-blend-mode"]="",e.context.canvas.parentNode.style.filter="",e.context.canvas.parentNode.style.display=""}.bind(this)),e.changed(),this._layers.splice(t,1))}},l=d}));