function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},s=t.parcelRequirecc54;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequirecc54=s);var n=s("20LS2"),r=s("kPMpK"),o=s("agkzb"),l=class extends o.default{constructor(e){super(e),this._layers=[]}setBlend(e){this.set("blend",e),this._layers.forEach((function(t){t.once("postrender",function(t){t.context.canvas.parentNode.style["mix-blend-mode"]=e||""}.bind(this)),t.changed()}))}setFilter(e){this.set("filter",e),this._layers.forEach((function(t){t.once("postrender",function(t){t.context.canvas.parentNode.style.filter=e||""}.bind(this)),t.changed()}))}setDisplay(e){this.set("display",e),this._layers.forEach((function(t){t.once("postrender",function(t){t.context.canvas.parentNode.style.display=e?"":"none"}.bind(this)),t.changed()}))}addToLayer(e){console.log("add"),e.once("postrender",function(e){console.log(e.context.canvas.parentNode),e.context.canvas.parentNode.style["mix-blend-mode"]=this.get("blend")||"",e.context.canvas.parentNode.style.filter=this.get("filter")||"",e.context.canvas.parentNode.style.display=!1!==this.get("display")?"":"none"}.bind(this)),e.changed(),this._layers.push(e)}removeFromLayer(e){var t=this._layers.indexOf(e);t>=0&&(e.once("postrender",function(e){e.context.canvas.parentNode.style["mix-blend-mode"]="",e.context.canvas.parentNode.style.filter="",e.context.canvas.parentNode.style.display=""}.bind(this)),e.changed(),this._layers.splice(t,1))}},d=s("eEuqc"),u=s("42VYg"),h=s("5NhYx");class c extends u.default{constructor(e){const t=void 0!==(e=e||{}).projection?e.projection:"EPSG:3857",a=void 0!==e.tileGrid?e.tileGrid:(0,h.createXYZ)({extent:(0,h.extentFromProjection)(t),maxResolution:e.maxResolution,maxZoom:e.maxZoom,minZoom:e.minZoom,tileSize:e.tileSize});super({attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,opaque:e.opaque,projection:t,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileGrid:a,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:e.tileUrlFunction,url:e.url,urls:e.urls,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition,attributionsCollapsible:e.attributionsCollapsible,zDirection:e.zDirection}),this.gutter_=void 0!==e.gutter?e.gutter:0}getGutter(){return this.gutter_}}var f=c;var m=class extends f{constructor(e){let t;t=void 0!==(e=e||{}).attributions?e.attributions:['&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.'];const a=void 0!==e.crossOrigin?e.crossOrigin:"anonymous",i=void 0!==e.url?e.url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png";super({attributions:t,attributionsCollapsible:!1,cacheSize:e.cacheSize,crossOrigin:a,interpolate:e.interpolate,maxZoom:void 0!==e.maxZoom?e.maxZoom:19,opaque:void 0===e.opaque||e.opaque,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,transition:e.transition,url:i,wrapX:e.wrapX,zDirection:e.zDirection})}},g=s("l9IGS"),D=s("2zf1Y"),p=s("610XN"),v=(n=s("20LS2"),s("4DafG")),_=s("iQyfo"),w=class extends v.default{constructor(e){super({element:_.default.create("DIV",{className:(e.className||"")+" ol-timeline"+(e.target?"":" ol-unselectable ol-control")+(e.zoomButton?" ol-hasbutton":"")}),target:e.target}),this._scrollDiv=_.default.create("DIV",{className:"ol-scroll",parent:this.element}),this._buttons=_.default.create("DIV",{className:"ol-buttons",parent:this.element}),e.zoomButton&&(this.addButton({className:"ol-zoom-in",handleClick:function(){var e=this.get("zoom");e>=1?e++:e=Math.min(1,e+.1),e=Math.round(100*e)/100,this.refresh(e)}.bind(this)}),this.addButton({className:"ol-zoom-out",handleClick:function(){var e=this.get("zoom");e>1?e--:e-=.1,e=Math.round(100*e)/100,this.refresh(e)}.bind(this)})),this._intervalDiv=_.default.create("DIV",{className:"ol-center-date",parent:this.element}),this.element.addEventListener("mouseover",function(){this._select&&this._select.elt.classList.remove("ol-select")}.bind(this));var t=null;this._scrollDiv.addEventListener("scroll",function(){this._setScrollLeft(),t&&(clearTimeout(t),t=null),t=setTimeout(function(){this.dispatchEvent({type:"scroll",date:this.getDate(),dateStart:this.getDate("start"),dateEnd:this.getDate("end")})}.bind(this),e.scrollTimeout||15)}.bind(this)),_.default.scrollDiv(this._scrollDiv,{onmove:function(e){this._moving=e}.bind(this)}),this._tline=[],this._scrollLeft=0,this.set("maxWidth",e.maxWidth||2e3),this.set("minDate",e.minDate||1/0),this.set("maxDate",e.maxDate||-1/0),this.set("graduation",e.graduation),this.set("minZoom",e.minZoom||.2),this.set("maxZoom",e.maxZoom||4),this.setInterval(e.interval),e.getHTML&&(this._getHTML=e.getHTML),e.getFeatureDate&&(this._getFeatureDate=e.getFeatureDate),e.endFeatureDate&&(this._endFeatureDate=e.endFeatureDate),this.setFeatures(e.features||e.source,e.zoom)}setMap(e){super.setMap(e),this.refresh(this.get("zoom")||1,!0)}addButton(e){this.element.classList.add("ol-hasbutton"),_.default.create("BUTTON",{className:e.className||void 0,title:e.title,html:e.html,click:e.handleClick,parent:this._buttons})}setInterval(e){"string"==typeof e&&(e=/s$/.test(e)?1e3*parseFloat(e):/mn$/.test(e)?6e4*parseFloat(e):/h$/.test(e)?36e5*parseFloat(e):/d$/.test(e)?864e5*parseFloat(e):/y$/.test(e)?31536e6*parseFloat(e):0),this.set("interval",e||0),e?this.element.classList.add("ol-interval"):this.element.classList.remove("ol-interval"),this.refresh(this.get("zoom"))}_getHTML(e){return e.get("name")||""}_getFeatureDate(e){return e&&e.get?e.get("date"):null}_endFeatureDate(){}isCollapsed(){return this.element.classList.contains("ol-collapsed")}collapse(e){e?this.element.classList.add("ol-collapsed"):this.element.classList.remove("ol-collapsed"),this.dispatchEvent({type:"collapse",collapsed:this.isCollapsed()})}toggle(){this.element.classList.toggle("ol-collapsed"),this.dispatchEvent({type:"collapse",collapsed:this.isCollapsed()})}setFeatures(e,t){this._features=this._source=null,e instanceof n.default?this._source=e:this._features=e instanceof Array?e:[],this.refresh(t)}getFeatures(){return this._features||this._source.getFeatures()}refresh(e,t){if(this.getMap()){e||(e=this.get("zoom")),e=Math.min(this.get("maxZoom"),Math.max(this.get("minZoom"),e||1)),this.set("zoom",e),this._scrollDiv.innerHTML="";var a,i,s=this.getFeatures(),n=this._tline=[];s.forEach(function(e){(a=this._getFeatureDate(e))&&(a instanceof Date||(a=new Date(a)),this._endFeatureDate&&((i=this._endFeatureDate(e))instanceof Date||(i=new Date(i))),isNaN(a)||n.push({date:a,end:isNaN(i)?null:i,feature:e}))}.bind(this)),n.sort((function(e,t){return e.date<t.date?-1:e.date===t.date?0:1}));var r=_.default.create("DIV",{parent:this._scrollDiv}),o=this._minDate=Math.min(this.get("minDate"),n.length?n[0].date:1/0),l=this._maxDate=Math.max(this.get("maxDate"),n.length?n[n.length-1].date:-1/0);isFinite(o)||(this._minDate=o=new Date),isFinite(l)||(this._maxDate=l=new Date);var d=l-o,u=this.get("maxWidth"),h=this._scale=(d>u?u/d:1)*e;d=(l-(o=this._minDate=this._minDate-10/h))*h,_.default.setStyle(r,{width:d,maxWidth:"unset"}),this._drawTime(r,o,l,h),this.get("interval")?_.default.setStyle(this._intervalDiv,{width:this.get("interval")*h}):_.default.setStyle(this._intervalDiv,{width:""});var c=[],f=_.default.getStyle(this._scrollDiv,"lineHeight"),m=_.default.create("DIV",{className:"ol-features",parent:r});n.forEach(function(e){for(var t=e.date,a=e.elt=_.default.create("DIV",{className:"ol-feature",style:{left:Math.round((t-o)*h)},html:this._getHTML(e.feature),parent:m}),i=a.querySelectorAll("img"),s=0;s<i.length;s++)i[s].ondragstart=function(){return!1};e.end&&_.default.setStyle(a,{minWidth:(e.end-t)*h,width:(e.end-t)*h,maxWidth:"unset"});var n,r,l=_.default.getStyle(a,"left");for(a.addEventListener("click",function(){this._moving||this.dispatchEvent({type:"select",feature:e.feature})}.bind(this)),n=0;(r=c[n])&&!(l>r);n++);c[n]=l+_.default.getStyle(a,"width"),_.default.setStyle(a,{top:n*f})}.bind(this)),this._nbline=c.length,t&&this.setDate(this._minDate,{anim:!1,position:"start"}),this.dispatchEvent({type:"scroll",date:this.getDate(),dateStart:this.getDate("start"),dateEnd:this.getDate("end")})}}_getOffsetFromDate(e){return(e-this._minDate)*this._scale}_getDateFromOffset(e){return e/this._scale+this._minDate}_setScrollLeft(e){this._scrollLeft=e,void 0!==e&&(this._scrollDiv.scrollLeft=e)}_getScrollLeft(){return void 0===this._scrollLeft?this._scrollDiv.scrollLeft:this._scrollLeft}_drawTime(e,t,a,i){var s,n,r,o,l=_.default.create("DIV",{className:"ol-times",parent:e}),d=_.default.getStyle(l,"left"),u=_.default.getStyle(l,"height"),h=new Date(this._minDate).getFullYear();n=(new Date(0).setFullYear(String(h))-new Date(0).setFullYear(String(h-1)))*i;for(var c=Math.round(2*u/n)+1;!((s=new Date(0).setFullYear(h))>this._maxDate);)_.default.create("DIV",{className:"ol-time ol-year",style:{left:this._getOffsetFromDate(s)-d},html:h,parent:l}),h+=c;if(/day|month/.test(this.get("graduation"))&&(n=(new Date(0,0,1).setFullYear(String(h))-new Date(0,0,1).setFullYear(String(h-1)))*i,(o=Math.max(1,Math.round(12/Math.round(n/u/2))))<12))for(h=new Date(this._minDate).getFullYear(),r=o+1;(s=new Date(0,0,1)).setFullYear(h),s.setMonth(r-1),!(s>this._maxDate);)_.default.create("DIV",{className:"ol-time ol-month",style:{left:this._getOffsetFromDate(s)-d},html:s.toLocaleDateString(void 0,{month:"short"}),parent:l}),(r+=o)>12&&(h++,r=o+1);if("day"===this.get("graduation")){n=(new Date(0,1,1)-new Date(0,0,1))*i;var f=Math.max(1,Math.round(31/Math.round(n/u/2)));if(f<31){h=new Date(this._minDate).getFullYear(),r=0;for(var m=f;;)if((s=new Date(0,0,1)).setFullYear(h),s.setMonth(r),s.setDate(m),isNaN(s))++r>12&&(r=1,h++),m=f;else{if(s>this._maxDate)break;if(m>1){var g=this._getOffsetFromDate(s);this._getOffsetFromDate(new Date(h,r+1,1))-g>u&&_.default.create("DIV",{className:"ol-time ol-day",style:{left:g-d},html:m,parent:l})}h=s.getFullYear(),r=s.getMonth(),(m=s.getDate()+f)>new Date(h,r+1,0).getDate()&&(r++,m=f)}}}}setDate(e,t){var a;if(t=t||{},e instanceof Date?a=e:(this.getFeatures().indexOf(e)>=0&&(a=this._getFeatureDate(e)),!a||a instanceof Date||(a=new Date(a)),a&&!isNaN(a)||(a=new Date(String(e)))),!isNaN(a)){!1===t.anim&&this._scrollDiv.classList.add("ol-move");var i=this._getOffsetFromDate(a);if("start"===t.position?i+=_.default.outerWidth(this._scrollDiv)/2-_.default.getStyle(this._scrollDiv,"marginLeft")/2:"end"===t.position&&(i-=_.default.outerWidth(this._scrollDiv)/2-_.default.getStyle(this._scrollDiv,"marginLeft")/2),this._setScrollLeft(i),!1===t.anim&&this._scrollDiv.classList.remove("ol-move"),e)for(var s,n=0;s=this._tline[n];n++)s.feature===e?(s.elt.classList.add("ol-select"),this._select=s):s.elt.classList.remove("ol-select")}}roundDate(e,t){switch(t){case"mn":return new Date(this._roundTo(e,6e4));case"hour":return new Date(this._roundTo(e,36e5));case"day":return new Date(this._roundTo(e,864e5));case"month":return(e=new Date(this._roundTo(e,864e5))).getDate()>15&&(e=new Date(e.setMonth(e.getMonth()+1))),e=e.setDate(1),new Date(e);default:return new Date(e)}}getDate(e,t){var a;switch(t||(t=e),e){case"start":a=this.get("interval")?-_.default.getStyle(this._intervalDiv,"width")/2+_.default.getStyle(this._scrollDiv,"marginLeft")/2:-_.default.outerWidth(this._scrollDiv)/2+_.default.getStyle(this._scrollDiv,"marginLeft")/2;break;case"end":a=this.get("interval")?_.default.getStyle(this._intervalDiv,"width")/2-_.default.getStyle(this._scrollDiv,"marginLeft")/2:_.default.outerWidth(this._scrollDiv)/2-_.default.getStyle(this._scrollDiv,"marginLeft")/2;break;default:a=0}var i=this._getDateFromOffset(this._getScrollLeft()+a);return i=this.roundDate(i,t),new Date(i)}_roundTo(e,t){return Math.round(e/t)*t}getStartDate(){return new Date(this.get("minDate"))}getEndDate(){return new Date(this.get("maxDate"))}},y=s("jZUWm");var x=s("1B70O");(0,y.default)(e('<div> <h2> Day 5: Ukraine </h2> <p> Use <a href="http://viglino.github.io/ol-ext/doc/doc-pages/ol.control.Timeline.html" target="_new"> ol-ext Timeline control </a> to animate Ukraine boundaries between 1924 and 1954. </p> <p> Source <a href="https://fr.wikipedia.org/wiki/Histoire_de_l%27Ukraine" target="_new">Wikipédia</a> - <a href="https://www.axl.cefan.ulaval.ca/europe/ukraine-2histoire.htm" target="_new">Ukraine : Données historiques</a> </p> </div>'));const b=new(0,d.default)({source:new m});x.default.addLayer(b),x.default.getView().setZoom(6),x.default.getView().setCenter([3503920,6228683]);let F=1922;const L=new(0,g.default)({fill:new(0,D.default)({color:"#FFDD00"})}),S=new(0,g.default)({fill:new(0,D.default)({color:"#0057B7"})});const N=new(0,p.default)({title:"Ukraine",className:"ukr",source:new(0,n.default)({url:"./UKR-ADM.geojson",format:new(0,r.default),attributions:[]}),style:function(e){return e.get("before")&&F>=e.get("before")||e.get("after")&&F<e.get("after")?[]:e.get("before")||e.get("after")?S:L}});function T(e){F=e,document.body.querySelector("h2").innerText=e,document.body.querySelector(".info").innerHTML=k[e]||"",N.getSource().changed()}x.default.addLayer(N),N.addFilter(new l({blend:"multiply"}));const M=[{date:1922,info:"En <b>1922</b>, la République socialiste soviétique d'Ukraine, est créée par la Russie soviétique en réunissant l'Ukraine de l'Ouest et l'Ukraine du Sud-Est."},{date:1924,info:""},{date:1939,info:"En <b>1939</b>, l'URSS accorde à l'Ukraine un territoire pris sur la Pologne : la Volynie et la Galicie"},{date:1940,info:"En <b>1940</b>, on y ajouta la Bucovine (Tchernivtsi) et le Boudjak (sud-ouest d'Odessa), deux territoires «cédés» par la Roumanie"},{date:1945,info:"L'URSS transfére en <b>1945</b> un territoire pris sur la Tchécoslovaquie à l'Ukraine: la Ruthénie (Transcarpathie). En 1948, l'URSS annexe l'île roumaine des Serpents (\"Ostrov Zmeïnyi\")"},{date:1954,info:"En <b>1954</b>, le président Nikita Khrouchtchev donna la Crimée (qui sera annexée à la Russie en 2014) à l'Ukraine, officiellement pour commémorer la réunification de la Russie et de l’Ukraine."}],k={};M.forEach(((e,t)=>{k[e.date]=e.info,M[t]={text:e.date,info:e.info,date:new Date(e.date+"/01/01"),endDate:new Date(e.date+"/12/31")}}));let E="";for(let e=1919;e<1964;e++)k[e]?E=k[e]:k[e]=E;let O=new w({className:"ol-pointer",features:M,graduation:"year",minDate:new Date("1920/01/01"),maxDate:new Date("1964/12/31"),maxWidth:1500,getHTML:function(e){return e.text},getFeatureDate:function(e){return e.date},endFeatureDate:function(e){return e.endDate}});x.default.addControl(O),setTimeout((function(){O.setDate(F)})),O.addButton({className:"go",title:"GO!",handleClick:function(){Z()}}),O.on("scroll",(function(e){T(O.roundDate(e.date).getFullYear())}));var z=!1,U=new Date("1920"),q=new Date("1960");function Z(e){var t=O.getDate();if(z&&clearTimeout(z),!e){if(t>U&&t<q&&z)return z=!1,void O.element.classList.remove("running");t>q&&(t=U)}t>q?O.element.classList.remove("running"):(t<U&&(t=U),t=new Date(t.getTime()+126144e5),O.setDate(t,{anim:!1}),O.element.classList.add("running"),z=setTimeout((function(){Z(!0)}),100))}window.setDate=T;