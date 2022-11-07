function t(t,e,s,i){Object.defineProperty(t,e,{get:s,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},n=e.parcelRequirecc54;null==n&&((n=function(t){if(t in s)return s[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return s[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequirecc54=n),n.register("ljDIj",(function(e,s){t(e.exports,"default",(()=>g));var i=n("j2K3b"),o=n("63y7W"),r=n("jZquI"),a=n("ee3b9"),l=n("kBSVF"),d=n("iTdJV"),h=n("a6roo");class f extends o.default{constructor(t,e){super(),e&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}appendPoint(t){this.flatCoordinates?(0,l.extend)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.changed()}clone(){const t=new f(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,s,i){if(i<(0,r.closestSquaredDistanceXY)(this.getExtent(),t,e))return i;const n=this.flatCoordinates,o=this.stride;for(let r=0,a=n.length;r<a;r+=o){const a=(0,h.squaredDistance)(t,e,n[r],n[r+1]);if(a<i){i=a;for(let t=0;t<o;++t)s[t]=n[r+t];s.length=o}}return i}getCoordinates(){return(0,d.inflateCoordinates)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getPoint(t){const e=this.flatCoordinates?this.flatCoordinates.length/this.stride:0;return t<0||e<=t?null:new(0,i.default)(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)}getPoints(){const t=this.flatCoordinates,e=this.layout,s=this.stride,n=[];for(let o=0,r=t.length;o<r;o+=s){const r=new(0,i.default)(t.slice(o,o+s),e);n.push(r)}return n}getType(){return"MultiPoint"}intersectsExtent(t){const e=this.flatCoordinates,s=this.stride;for(let i=0,n=e.length;i<n;i+=s){const s=e[i],n=e[i+1];if((0,r.containsXY)(t,s,n))return!0}return!1}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,a.deflateCoordinates)(this.flatCoordinates,0,t,this.stride),this.changed()}}var g=f})),n.register("dEQmT",(function(e,s){t(e.exports,"default",(()=>F));var i=n("ljDIj"),o=n("cgPpQ"),r=n("63y7W"),a=n("96blb"),l=n("jZquI"),d=n("ee3b9"),h=n("kBSVF"),f=n("ec4vu"),g=n("iTdJV"),u=n("4NB4B"),c=n("2cCpz"),C=n("1jq6X"),_=n("88eMt"),y=n("7Ifzt"),p=n("exEDy");class v extends r.default{constructor(t,e,s){if(super(),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!s&&!Array.isArray(t[0])){let i=this.getLayout();const n=t,o=[],r=[];for(let t=0,e=n.length;t<e;++t){const e=n[t];0===t&&(i=e.getLayout());const s=o.length,a=e.getEnds();for(let t=0,e=a.length;t<e;++t)a[t]+=s;(0,h.extend)(o,e.getFlatCoordinates()),r.push(a)}e=i,t=o,s=r}void 0!==e&&s?(this.setFlatCoordinates(e,t),this.endss_=s):this.setCoordinates(t,e)}appendPolygon(t){let e;if(this.flatCoordinates){const s=this.flatCoordinates.length;(0,h.extend)(this.flatCoordinates,t.getFlatCoordinates()),e=t.getEnds().slice();for(let t=0,i=e.length;t<i;++t)e[t]+=s}else this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();this.endss_.push(e),this.changed()}clone(){const t=this.endss_.length,e=new Array(t);for(let s=0;s<t;++s)e[s]=this.endss_[s].slice();const s=new v(this.flatCoordinates.slice(),this.layout,e);return s.applyProperties(this),s}closestPointXY(t,e,s,i){return i<(0,l.closestSquaredDistanceXY)(this.getExtent(),t,e)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,a.multiArrayMaxSquaredDelta)(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,a.assignClosestMultiArrayPoint)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,s,i))}containsXY(t,e){return(0,y.linearRingssContainsXY)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)}getArea(){return(0,C.linearRingss)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)}getCoordinates(t){let e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),(0,c.orientLinearRingsArray)(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,(0,g.inflateMultiCoordinatesArray)(e,0,this.endss_,this.stride)}getEndss(){return this.endss_}getFlatInteriorPoints(){if(this.flatInteriorPointsRevision_!=this.getRevision()){const t=(0,_.linearRingss)(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=(0,f.getInteriorPointsOfMultiArray)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_}getInteriorPoints(){return new(0,i.default)(this.getFlatInteriorPoints().slice(),"XYM")}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const t=this.flatCoordinates;(0,c.linearRingssAreOriented)(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,c.orientLinearRingsArray)(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){const e=[],s=[];return e.length=(0,p.quantizeMultiArray)(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),e,0,s),new v(e,"XY",s)}getPolygon(t){if(t<0||this.endss_.length<=t)return null;let e;if(0===t)e=0;else{const s=this.endss_[t-1];e=s[s.length-1]}const s=this.endss_[t].slice(),i=s[s.length-1];if(0!==e)for(let t=0,i=s.length;t<i;++t)s[t]-=e;return new(0,o.default)(this.flatCoordinates.slice(e,i),this.layout,s)}getPolygons(){const t=this.layout,e=this.flatCoordinates,s=this.endss_,i=[];let n=0;for(let r=0,a=s.length;r<a;++r){const a=s[r].slice(),l=a[a.length-1];if(0!==n)for(let t=0,e=a.length;t<e;++t)a[t]-=n;const d=new(0,o.default)(e.slice(n,l),t,a);i.push(d),n=l}return i}getType(){return"MultiPolygon"}intersectsExtent(t){return(0,u.intersectsLinearRingMultiArray)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);const s=(0,d.deflateMultiCoordinatesArray)(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===s.length)this.flatCoordinates.length=0;else{const t=s[s.length-1];this.flatCoordinates.length=0===t.length?0:t[t.length-1]}this.changed()}}var F=v})),n.register("88eMt",(function(e,s){t(e.exports,"linearRingss",(()=>o));var i=n("jZquI");function o(t,e,s,n){const o=[];let r=(0,i.createEmpty)();for(let a=0,l=s.length;a<l;++a){const l=s[a];r=(0,i.createOrUpdateFromFlatCoordinates)(t,e,l[0],n),o.push((r[0]+r[2])/2,(r[1]+r[3])/2),e=l[l.length-1]}return o}}));