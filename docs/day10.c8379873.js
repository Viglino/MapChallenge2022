function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},n=e.parcelRequirecc54;null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in s){var e=s[t];delete s[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){s[t]=e},e.parcelRequirecc54=n);var o=n("7qsnY"),r=n("20LS2"),a=n("kPMpK"),l=n("1B70O"),h=n("jZUWm");class d{constructor(t){t=t||{},this.color_=void 0!==t.color?t.color:null,this.lineCap_=t.lineCap,this.lineDash_=void 0!==t.lineDash?t.lineDash:null,this.lineDashOffset_=t.lineDashOffset,this.lineJoin_=t.lineJoin,this.miterLimit_=t.miterLimit,this.width_=t.width}clone(){const t=this.getColor();return new d({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getWidth(){return this.width_}setColor(t){this.color_=t}setLineCap(t){this.lineCap_=t}setLineDash(t){this.lineDash_=t}setLineDashOffset(t){this.lineDashOffset_=t}setLineJoin(t){this.lineJoin_=t}setMiterLimit(t){this.miterLimit_=t}setWidth(t){this.width_=t}}var c=d;class g{constructor(t){t=t||{},this.color_=void 0!==t.color?t.color:null}clone(){const t=this.getColor();return new g({color:Array.isArray(t)?t.slice():t||void 0})}getColor(){return this.color_}setColor(t){this.color_=t}}var u=g,f=n("4GUat"),p=n("fnScq"),m=(p=n("fnScq"),class extends p.default{constructor(t){"string"==typeof t&&(t={feoperation:t}),super(),t&&t.feoperation?(this._name=t.feoperation,this.element=document.createElementNS(m.NS||"http://www.w3.org/2000/svg",this._name),this.setProperties(t),t.operations instanceof Array&&this.appendChild(t.operations)):console.error("[SVGOperation]: no operation defined.")}getName(){return this._name}set(t,e){/^feoperation$|^operations$/.test(t)||(super.set(t,e),this.element.setAttribute(t,e))}setProperties(t){for(var e in t=t||{})this.set(e,t[e])}geElement(){return this.element}appendChild(t){t instanceof Array?t.forEach(function(t){this.appendChild(t)}.bind(this)):(t instanceof m||(t=new m(t)),this.element.appendChild(t.geElement()))}}),v=m,A=class extends p.default{constructor(t){t=t||{},super(),A.prototype.svg||(A.prototype.svg=document.createElementNS(this.NS,"svg"),A.prototype.svg.setAttribute("version","1.1"),A.prototype.svg.setAttribute("width",0),A.prototype.svg.setAttribute("height",0),A.prototype.svg.style.position="absolute",document.body.appendChild(A.prototype.svg)),this.element=document.createElementNS(this.NS,"filter"),this._id=t.id||"_ol_SVGFilter_"+A.prototype._id++,this.element.setAttribute("id",this._id),t.color&&this.element.setAttribute("color-interpolation-filters",t.color),t.operation&&this.addOperation(t.operation),A.prototype.svg.appendChild(this.element)}getId(){return this._id}remove(){this.element.remove()}addOperation(t){t instanceof Array?t.forEach(function(t){this.addOperation(t)}.bind(this)):(t instanceof v||(t=new v(t)),this.element.appendChild(t.geElement()))}grayscale(t){this.addOperation({feoperation:"feColorMatrix",type:"saturate",values:t||0})}luminanceToAlpha(t){t=t||{},this.addOperation({feoperation:"feColorMatrix",type:"luminanceToAlpha"}),t.gamma&&this.addOperation({feoperation:"feComponentTransfer",operations:[{feoperation:"feFuncA",type:"gamma",amplitude:t.gamma,exponent:1,offset:0}]})}applyTo(t){var e=document.createElement("CANVAS");return e.width=t.naturalWidth||t.width,e.height=t.naturalHeight||t.height,e.getContext("2d").filter="url(#"+this.getId()+")",e.getContext("2d").drawImage(t,0,0),e}};A.prototype.NS="http://www.w3.org/2000/svg",A.prototype.svg=null,A.prototype._id=0;var _=A,y=class extends _{constructor(t){super({id:(t=t||{}).id}),this.addOperation({feoperation:"feTurbulence",numOctaves:4,seed:0,type:"fractalNoise",baseFrequency:.2/(t.scale||1)}),this.addOperation({feoperation:"feDiffuseLighting","lighting-color":"rgb(255,255,255)",surfaceScale:1.5,kernelUnitLength:.01,diffuseConstant:1.1,result:"paper",operations:[{feoperation:"feDistantLight",elevation:t.light||50,azimuth:75}]}),this.addOperation({feoperation:"feBlend",in:"SourceGraphic",in2:"paper",mode:"multiply"})}setLight(t){this.element.querySelector("feDistantLight").setAttribute("elevation",t)}},C=n("agkzb"),w=class extends C.default{constructor(t){super(),this._svg={},t&&(t instanceof Array||(t=[t]),t.forEach(function(t){this.addSVGFilter(t)}.bind(this)))}addSVGFilter(t){var e="#"+t.getId();this._svg[e]=1,this.dispatchEvent({type:"propertychange",key:"svg",oldValue:this._svg})}removeSVGFilter(t){var e="#"+t.getId();delete this._svg[e],this.dispatchEvent({type:"propertychange",key:"svg",oldValue:this._svg})}precompose(){}postcompose(t){var e=[];for(var i in this._svg)e.push("url("+i+")");e=e.join(" ");var s=document.createElement("canvas");s.width=t.context.canvas.width,s.height=t.context.canvas.height,s.getContext("2d").drawImage(t.context.canvas,0,0),e&&(t.context.save(),t.context.clearRect(0,0,s.width,s.height),t.context.filter=e,t.context.drawImage(s,0,0),t.context.restore())}},x=n("dUROT"),b=n("6yJ0x"),L=n("btuox"),F=n("7TB1l"),E=n("cgPpQ"),D=n("ljDIj"),O=(E=n("cgPpQ"),n("63y7W")),R=n("96blb"),P=n("jZquI"),S=n("ee3b9"),M=n("kBSVF"),I=n("ec4vu"),J=n("iTdJV"),q=n("4NB4B"),B=n("2cCpz"),U=n("1jq6X"),G=n("88eMt"),T=n("7Ifzt"),N=n("exEDy");class V extends O.default{constructor(t,e,i){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!i&&!Array.isArray(t[0])){let s=this.getLayout();const n=t,o=[],r=[];for(let t=0,e=n.length;t<e;++t){const e=n[t];0===t&&(s=e.getLayout());const i=o.length,a=e.getEnds();for(let t=0,e=a.length;t<e;++t)a[t]+=i;(0,M.extend)(o,e.getFlatCoordinates()),r.push(a)}e=s,t=o,i=r}void 0!==e&&i?(this.setFlatCoordinates(e,t),this.endss_=i):this.setCoordinates(t,e)}appendPolygon(t){let e;if(this.flatCoordinates){const i=this.flatCoordinates.length;(0,M.extend)(this.flatCoordinates,t.getFlatCoordinates()),e=t.getEnds().slice();for(let t=0,s=e.length;t<s;++t)e[t]+=i}else this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();this.endss_.push(e),this.changed()}clone(){const t=this.endss_.length,e=new Array(t);for(let i=0;i<t;++i)e[i]=this.endss_[i].slice();const i=new V(this.flatCoordinates.slice(),this.layout,e);return i.applyProperties(this),i}closestPointXY(t,e,i,s){return s<(0,P.closestSquaredDistanceXY)(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,R.multiArrayMaxSquaredDelta)(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,R.assignClosestMultiArrayPoint)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,i,s))}containsXY(t,e){return(0,T.linearRingssContainsXY)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)}getArea(){return(0,U.linearRingss)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(t){let e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),(0,B.orientLinearRingsArray)(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,(0,J.inflateMultiCoordinatesArray)(e,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const t=(0,G.linearRingss)(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=(0,I.getInteriorPointsOfMultiArray)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new(0,D.default)(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const t=this.flatCoordinates;(0,B.linearRingssAreOriented)(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,B.orientLinearRingsArray)(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){const e=[],i=[];return e.length=(0,N.quantizeMultiArray)(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),e,0,i),new V(e,"XY",i)}getPolygon(t){if(t<0||this.endss_.length<=t)return null;let e;if(0===t)e=0;else{const i=this.endss_[t-1];e=i[i.length-1]}const i=this.endss_[t].slice(),s=i[i.length-1];if(0!==e)for(let t=0,s=i.length;t<s;++t)i[t]-=e;return new(0,E.default)(this.flatCoordinates.slice(e,s),this.layout,i)}getPolygons(){const t=this.layout,e=this.flatCoordinates,i=this.endss_,s=[];let n=0;for(let o=0,r=i.length;o<r;++o){const r=i[o].slice(),a=r[r.length-1];if(0!==n)for(let t=0,e=r.length;t<e;++t)r[t]-=n;const l=new(0,E.default)(e.slice(n,a),t,r);s.push(l),n=a}return s}getType(){return"MultiPolygon"}intersectsExtent(t){return(0,q.intersectsLinearRingMultiArray)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);const i=(0,S.deflateMultiCoordinatesArray)(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===i.length)this.flatCoordinates.length=0;else{const t=i[i.length-1];this.flatCoordinates.length=0===t.length?0:t[t.length-1]}this.changed()}}var k=V;n("4EGw0");var Q=n("23ytq");k.prototype.scribbleFill=function(t){var e,i,s,n=[],o=this.getPolygons();for(e=0;i=o[e];e++){var r=i.scribbleFill(t);r&&n.push(r)}if(!n.length)return null;var a,l=n[0];for(e=0;s=n[e];e++){a=s.getLineStrings();for(var h=0;h<a.length;h++)l.appendLineString(a[h])}return l},E.default.prototype.scribbleFill=function(t){var e,i,s,n=t.interval,o=t.angle||Math.PI/2,r=this.clone();r.rotate(o,[0,0]);var a=r.getCoordinates(),l=a[0];for(e=1;e<a.length;e++)l.push([]),l=l.concat(a[e]);for(var h=r.getExtent(),d=[],c=(Math.floor(h[1]/n)+1)*n;c<h[3];c+=n)s=(0,Q.ol_coordinate_splitH)(l,c,e),d=d.concat(s);if(!d.length)return null;var g=l.length-1,u=d[0][0].index;for(i=0;s=d[i];i++)d[i][0].index=(d[i][0].index-u+g)%g,d[i][1].index=(d[i][1].index-u+g)%g;for(var f=[];;){for(i=0;(s=d[i])&&s[0].done;i++);if(!s)break;for(var p=[];s;){s[0].done=!0,p.push(s[0].pt),p.push(s[1].pt);for(var m=s[0].pt[1]+n,v=1/0,A=null;d[i]&&!(d[i][0].pt[1]>m);){if(d[i][0].pt[1]===m){var _=Math.min((d[i][0].index-s[0].index+g)%g,(s[0].index-d[i][0].index+g)%g),y=Math.min((s[1].index-s[0].index+g)%g,(s[0].index-s[1].index+g)%g);_<v&&_<y&&(v=_,A=d[i][0].done?null:d[i])}i++}s=A}p.length&&f.push(p)}if(!f.length)return null;var C=new(0,F.default)(f);return C.rotate(-o,[0,0]),C.cspline({pointsPerSeg:8,tension:.9})};var W=function(t,e){switch(t.getType()){case"Polygon":return E.default.prototype.scribbleFill.call(t,e);case"MultiPolygon":return k.prototype.scribbleFill.call(t,e);default:return t}};function j(t,e){const i=[[31,119,180],[174,199,232],[255,127,14],[255,187,120],[44,160,44],[152,223,138],[214,39,40],[255,152,150],[148,103,189],[197,176,213],[140,86,75],[196,156,148],[227,119,194],[247,182,210],[127,127,127],[199,199,199],[188,189,34],[219,219,141],[23,190,207],[158,218,229]],s=Math.random()*Math.PI;t.set("angle",s);const n=i[Math.floor(Math.random()*i.length)];t.set("color",n);const o=Math.max(8e4,8*e),r={step:o,geom:W(t.getGeometry(),{interval:o,angle:s})};t._scribble=r}function X(t,e){const i=t.get("angle"),s=t.get("color"),n=Math.max(8e4,8*e),o=Math.max(2,2e4/e),r=[new(0,f.default)({stroke:new c({width:.5,color:s}),fill:new u({color:"transparent"})})];let a=t._scribble;return a&&a.step!==n&&(a={step:n,geom:W(t.getGeometry(),{interval:n,angle:i})},t._scribble=a),a&&r.push(new(0,f.default)({stroke:new c({width:o,color:s}),geometry:a.geom})),r}(0,h.default)(t('<div> <h2> Day 10: <strike>bad</strike> child map! </h2> <p> Use <a href="http://viglino.github.io/ol-ext/doc/doc-pages/ol.filter.Mask.html" target="_new"> ol-ext Scribble fill </a> to color countries on the map. </p> </div>'));var z=new(0,o.default)({source:new(0,r.default)({url:"https://openlayers.org/en/v4.6.5/examples/data/geojson/countries.geojson",format:new(0,a.default)}),style:X});l.default.addLayer(z);var Y=new w,K=new y({scale:2,light:60});Y.addSVGFilter(K),z.addFilter(Y),l.default.addInteraction(new(0,b.default)({cursor:'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAihJREFUWEftlr/LEnEcx193KTQ89JQEDSKELi03BIbQ1uKQptAQYqtbQtDUIBHV2BCIgejk4B8guuhSBs8YYUGoCEa2nSbR8JCHxsfnDtSyu+qo5b7LHXfv7+f9+r6/P+4UnLUacAk4B2jAsbNu9irFXrJWjIE4cNfU33HYz1ZmB6ACOeAxcAE4DbwD7gEN2+oOBPsAXgHPgPM+n++5YRgCkgRaQB0YAA8d1LeV7AIcAq+BsKIoH0Oh0KGmaWfC4TDFYlGKCcQVs6rrAE+A+4CqqurnWCymNhqNs9FolHa7zXA4JJkU/3UCQzcTkFEfmascRVGWmUzmuF6vHwwGA+LxOOOxrEFotVqbELdt83UgkCkwTN0pueZyuVWlUllPTbVapdvtUqvJLjxpGxDWmnBgs18iRivrdSAQYDqdbqlHoxGRSGTrmZsQWwCaptHr9RyNyC2ILQBxbjabJBKJfwaxC/BWjlqnEOVymXw+/80wjJvmGeEIfFO0C/ACeHoSxK+TKBQKq1Kp9Gk+n98A3vy2s9lBAJaAdSAJwDVA5mAvRDab/drpdN7run4d0P/UXPqJ8UvgKuADLAB59wOEruukUql5v9/vzGazW39jbPW1Ri57L7ADsAURDAZJp9NfJpNJcblcFtwwtxKQ62XzG/ABuLhTfJ2E3+83FotFHii7Zb4JIPePgAd7ilv7Ur6Grja7/wFXzX5WzAPwEvAS8BLwEvAS+O8JfAcOZLAhCzd6QAAAAABJRU5ErkJggg==") 0 13, auto'}));const H=new(0,x.default)({style:X,condition:L.click});function Z(){const t=l.default.getView().calculateExtent(),e=[(t[0]+t[2])/2+(Math.random()-.5)*(t[2]-t[0])/2,(t[1]+t[3])/2+(Math.random()-.5)*(t[3]-t[1])/2],i=l.default.getFeaturesAtPixel(l.default.getPixelFromCoordinate(e)).pop();i?(j(i,l.default.getView().getResolution()),$=setTimeout(Z,2e3*Math.random()+500)):$=setTimeout(Z)}l.default.addInteraction(H),H.on("select",(t=>{t.selected.forEach((t=>{j(t,l.default.getView().getResolution()),clearTimeout($),$=setTimeout(Z,2e3*Math.random()+3e3)})),H.getFeatures().clear()}));let $=setTimeout(Z,1e3);