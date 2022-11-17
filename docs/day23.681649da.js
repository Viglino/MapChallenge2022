function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},a=e.parcelRequirecc54;null==a&&((a=function(t){if(t in i)return i[t].exports;if(t in s){var e=s[t];delete s[t];var a={id:t,exports:{}};return i[t]=a,e.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){s[t]=e},e.parcelRequirecc54=a);var n=a("6gELa"),h=a("610XN"),r=a("20LS2"),o=a("fnScq"),l=a("gbCDL"),d=a("4QhZh"),g=a("ejLRd"),c=(o=a("fnScq"),a("jZquI")),u=class extends o.default{constructor(t){super(),this.game=t.game,this.resample=t.resample||1,this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=32,this.sprites=t.sprites||[],this.targets=t.targets||[]}getImage(){return this.canvas}overflow(t){if(!this.game.frameState)return!1;var e=this.game.frameState.extent,i=t.getBBox(this.game.frameState.viewState.resolution);return e[0]>i[0]?"E":e[1]>i[1]?"N":e[2]<i[2]?"W":e[3]<i[3]&&"S"}getPixel(t){var e=this.game.frameState.coordinateToPixelTransform;return[e[0]*t[0]+e[1]*t[1]+e[4],e[2]*t[0]+e[3]*t[1]+e[5]]}dispatch(){if(this.game.frameState)for(var t=this.sprites.length,e=0;e<t-1;e++)for(var i=e+1;i<t;i++){var s=this.collide(this.sprites[e],this.sprites[i]);s&&(this.sprites[e].dispatchEvent({type:"collide",sprite:this.sprites[i],hit:s}),this.sprites[i].dispatchEvent({type:"collide",sprite:this.sprites[e],hit:s}))}}collide(t,e){if(!this.game.frameState)return!1;var i=t.getBBox(this.game.frameState.viewState.resolution),s=e.getBBox(this.game.frameState.viewState.resolution);if(!(0,c.intersects)(i,s))return!1;var a=this.getPixel(i),n=this.getPixel(s),h=this.resample,r=Math.trunc(t.getImage().size*t.getImage().getScale()/h),o=this.canvas;o.width=o.height=r;var l=o.getContext("2d");l.save(),l.globalCompositeOperation="copy",l.fillStyle="#FFF",l.fillRect(0,0,r,r),l.globalCompositeOperation="destination-out",l.drawImage(t.getImage().getImage(),0,0,t.getImage().size,t.getImage().size,0,0,r,r),l.globalCompositeOperation="source-out",l.translate((n[0]-a[0])/h,(n[1]-a[1])/h),l.drawImage(e.getImage().getImage(),0,0,e.getImage().size,e.getImage().size,0,0,r,r),l.restore();for(var d=l.getImageData(0,0,r,r),g=3;g<d.data.length;g+=4)if(d.data[g]>0){var u=g/4/r|0;return[(g/4-u*r|0)*h,u*h]}}},m=class extends o.default{constructor(t){t=t||{},super();var e=t.map||new(0,l.default)({target:t.target,loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,view:new(0,d.default)({zoom:t.zoom,center:t.center}),interactions:[],controls:[],layers:t.layers});if(t.controls)for(var i=0;i<t.controls.length;i++)e.addControl(t.controls[i]);this.setMap(e),this.pause_=!0,this.collisions=[],this.collision=new u({game:this,resample:t.collisionResample})}setMap(t){this._listener&&g.default.unByKey(this._listener),this._listener=null,this.map=t,this.map&&(this._listener=this.map.on("postcompose",this.anim_.bind(this)))}getMap(){return this.map}getView(){return this.map.getView()}addControl(t){return this.map.addControl(t)}collide(t,e){return this.collision.collide(t,e)}start(){this.time=(new Date).getTime(),this.pause_=!1,this.map.render(),this.dispatchEvent({type:"start"})}pause(){this.pause_=!0,this.dispatchEvent({type:"pause"})}paused(){return this.pause_}addCollision(t){t instanceof Array||(t=[t]),this.collisions=this.collisions.concat(t)}anim_(t){if(t.dt=t.frameState.time-this.time,this.time=t.frameState.time,this.frameState=t.frameState,!this.pause_){for(var e=this.collisions.length-1;e>=0;e--)this.collisions[e].dispatch();this.dispatchEvent({type:"render",context:t.context,dt:t.dt,frameState:t.frameState,vectorContext:t.vectorContext}),this.map.render()}}timer(t){this._time&&!0!==t?console.log("[TIMER] "+(new Date-this._time)+" : "+(t||"timer")):console.log("[TIMER] start"),this._time=new Date}},p=a("iGyOD"),f=a("j2K3b"),v=a("l9IGS"),_=a("d5AAH"),w=a("2zf1Y"),y=a("kuKBR"),S=a("23ytq"),M=a("ayeEa"),I=class extends M.default{constructor(t){t=t||{};var e=document.createElement("canvas"),i=e.width=e.height=t.size||64;super({img:e,imgSize:[i,i],scale:t.scale}),this.size=i,this.offset=[0,0];var s,a=this;t.img?s=this.img_=t.img:((s=this.img_=new Image).crossOrigin=t.crossOrigin||"anonymous",s.src=t.src),t.states&&(this.states=t.states),s.width?this.drawImage_():s.onload=function(){a.drawImage_()}}drawImage_(){var t=this.getImage().getContext("2d");t.clearRect(0,0,this.size,this.size),t.drawImage(this.img_,this.offset[0],this.offset[1],this.size,this.size,0,0,this.size,this.size)}setState(t,e){var i=this.states[t]||{},s=[((i.start||0)+Math.trunc(e)%i.length)*(i.size||this.size),(i.line||0)*(i.size||this.size)];return s[0]==this.offset[0]&&s[1]==this.offset[1]||(this.offset=s,this.drawImage_()),e+1>=i.length}setAnchor(t){var e=this.getAnchor();e[0]=t[0]*this.size,e[1]=t[1]*this.size}};I.prototype.states={idle:{line:2,length:1},encant_N:{line:0,length:7},encant_W:{line:1,length:7},encant_S:{line:2,length:7},encant_E:{line:3,length:7},thrust_N:{line:4,length:8},thrust_W:{line:5,length:8},thrust_S:{line:6,length:8},thrust_E:{line:7,length:8},walk_N:{line:8,start:1,length:8},walk_W:{line:9,start:1,length:8},walk_S:{line:10,start:1,length:8},walk_E:{line:11,start:1,length:8},slash_N:{line:12,length:6},slash_W:{line:13,length:6},slash_S:{line:14,length:6},slash_E:{line:15,length:6},shoot_N:{line:16,length:13},shoot_W:{line:17,length:13},shoot_S:{line:18,length:13},shoot_E:{line:19,length:13},hurt:{line:20,length:6}};var C=I;Math.sign||(Math.sign=function(t){return(t=Number(t))?t>0?1:-1:t}),Math.trunc||(Math.trunc=function(t){return t<0?Math.ceil(t):Math.floor(t)});var x=class extends p.default{constructor(t){t=t||{};var e=new(0,f.default)(t.position||[0,0]);super(e),this.coord=e,this.style=new(0,v.default)({image:new C(t),text:new(0,y.default)({font:"bold 12px helvetica,sans-serif",text:t.name||"",offsetY:-(t.size||64)/2*t.scale,textBaseline:"alphabetic",stroke:new(0,_.default)({color:[255,255,255,.5],width:5}),fill:new(0,w.default)({color:"#333"})})}),this.setStyle([this.style]),this.image=this.style.getImage(),this.frate=t.frameRate||100,this.currentState="idle",this.startState=0,this.speed=0,this.dir=[0,0]}setName(t){this.style.getText().setText(t),this.changed()}setCoordinate(t){this.coord.setCoordinates(t)}getCoordinate(){return this.coord.getCoordinates()}setGeometry(t){this.coord=t,p.default.prototype.setGeometry.call(this,t)}getImage(){return this.image}setRotation(t){this.style.getImage().setRotation(t),this.changed()}getRotation(){return this.style.getImage().getRotation()}setScale(t){this.style.getImage().setScale(t),this.changed()}getScale(){return this.style.getImage().getScale()}getBBox(t){var e=this.getCoordinate(),i=this.image.size*this.image.getScale()*t/2;return[e[0]-i,e[1]-i,e[0]+i,e[1]+i]}setState(t,e){return this.currentState=t,this.startState=e||(new Date).getTime(),this.dispatchEvent({type:"state",state:this.currentState,end:!1}),this.endState=!1,this.image.setState(this.currentState,0)}update(t){var e=this.image.setState(this.currentState,(t.frameState.time-this.startState)/this.frate);return e&&!this.endState&&(this.dispatchEvent({type:"state",state:this.currentState,end:!0}),this.endState=!0),e}setPath(t,e){null!=e&&(this.speed=e),t&&t.length&&(this.path=t,this.destination=1,this.moving_=!0,this.angle=Math.atan2(this.path[1][0]-this.path[0][0],this.path[1][1]-this.path[0][1]),this.dir=[Math.sin(this.angle),Math.cos(this.angle)],this.setCoordinate(this.path[0]),this.dispatchEvent({type:"change:direction",angle:this.angle}))}setDestination(t,e){this.setPath([this.getCoordinate(),t],e)}setDirection(t,e){this.destination=!1,this.moving_=!0,null!=e&&(this.speed=e),this.angle=t,this.dir=[Math.sin(this.angle),Math.cos(this.angle)],this.dispatchEvent({type:"change:direction",angle:this.angle})}getQuarter(){switch((Math.round(2*this.angle/Math.PI)+4)%4){case 0:return"N";case 1:return"E";case 2:return"S";case 3:return"W"}}moving(){return this.moving_}stop(){this.moving_=!1}restart(){this.moving_=!0}move(t){if(this.moving_){var e=this.getCoordinate(),i=[this.speed*this.dir[0]*t.dt,this.speed*this.dir[1]*t.dt];if(e[0]+=i[0],e[1]+=i[1],this.destination){var s=this.path[this.destination][0]-e[0],a=this.path[this.destination][1]-e[1];if(s&&Math.sign(s)!=Math.sign(this.dir[0])||a&&Math.sign(a)!=Math.sign(this.dir[1]))if(this.destination++,this.destination>=this.path.length)this.stop(),this.setCoordinate(this.path[this.destination-1]),this.destination=0,this.dispatchEvent({type:"destination"});else{for(var n=(0,S.ol_coordinate_dist2d)(e,this.path[this.destination-1]);;){var h=(0,S.ol_coordinate_dist2d)(this.path[this.destination],this.path[this.destination-1]);if(h>n)break;if(n-=h,this.destination++,this.destination>=this.path.length)return this.stop(),this.setCoordinate(this.path[this.destination-1]),this.destination=0,void this.dispatchEvent({type:"destination"})}this.setCoordinate(this.path[this.destination-1]),this.angle=Math.atan2(this.path[this.destination][0]-this.path[this.destination-1][0],this.path[this.destination][1]-this.path[this.destination-1][1]),this.dir=[Math.sin(this.angle),Math.cos(this.angle)],this.dispatchEvent({type:"change:direction",angle:this.angle}),this.move({type:t.type,dt:n/this.speed,frameState:t.frameState})}else this.setCoordinate(e)}else this.setCoordinate(e)}this.update(t)}setSpeed(t){this.speed=t}getSpeed(){return this.speed}},b=a("1B70O"),z=a("jZUWm");var E=a("VCbYw"),V=(g=a("ejLRd"),a("iQyfo"));o=a("fnScq");window.ol&&!ol.particule&&(ol.particule={});var R=class extends o.default{constructor(t){super(t=t||{}),this.setOverlay(t.overlay),this.coordinate=t.coordinate||[0,0]}setOverlay(t){this._overlay=t}getOverlay(){return this._overlay}draw(){}update(){}getRandomCoord(t){return this.getOverlay().randomCoord?this.getOverlay().randomCoord():[t,0]}},P=class extends E.default{constructor(t){t=t||{};var e=V.default.create("CANVAS",{className:((t.className||"")+" ol-animated-overlay").trim()});super({element:e,stopEvent:!1}),this._canvas=e,this._ctx=this._canvas.getContext("2d"),this._listener=[],this._time=0,this._particuleClass=t.particule||R,t.createParticule&&(this._createParticule=t.createParticule),this._fps=1e3/(t.fps||25);var i=this._createParticule();this._psize=i.get("size")||[50,50],this.set("density",t.density||.5),this.set("speed",t.speed||4),this.set("angle","number"==typeof t.angle?t.angle:Math.PI/4),!1!==t.animate&&this.setAnimation(!0),document.addEventListener("visibilitychange",function(){this._pause=!0}.bind(this))}setVisible(t){this.element.style.display=t?"block":"none",t&&this.setAnimation(this.get("animation"))}getVisible(){return"none"!=this.element.style.display}updatePixelPosition(){}setMap(t){if(this.getMap()&&this.getMap().getViewport().querySelector(".ol-overlaycontainer").removeChild(this._canvas),this._listener.forEach((function(t){(0,g.unByKey)(t)})),this._listener=[],super.setMap(t),t){var e=t.getSize();this._canvas.width=e[0],this._canvas.height=e[1],this.draw(),this._listener.push(t.on("change:size",function(){var e=t.getSize();this._canvas.width===e[0]&&this._canvas.height===e[1]||(this._canvas.width=e[0],this._canvas.height=e[1],this.draw())}.bind(this)))}}getParticules(){var t=this._psize[0],e=this._psize[1],i=this.get("density")*this._canvas.width*this._canvas.height/t/e<<0;if(this._particules||(this._particules=[]),i>this._particules.length)for(var s=this._particules.length;s<i;s++)this._particules.push(this._createParticule(this,this.randomCoord()));else this._particules.length=i;return this._particules}_createParticule(t,e){return new this._particuleClass({overlay:t,coordinate:e})}randomCoord(){return[Math.random()*(this._canvas.width+this._psize[0])-this._psize[0]/2,Math.random()*(this._canvas.height+this._psize[1])-this._psize[1]/2]}draw(t){var e=this._ctx;this.clear(),e.beginPath(),this.getParticules().forEach(function(e){t&&(e.update(t),this.testExit(e)),e.draw(this._ctx)}.bind(this))}testExit(t){var e=this._psize;t.coordinate[0]<-e[0]?(t.coordinate[0]=this._canvas.width+e[0],t.coordinate[1]=Math.random()*(this._canvas.height+e[1])-e[1]/2):t.coordinate[0]>this._canvas.width+e[0]?(t.coordinate[0]=-e[0],t.coordinate[1]=Math.random()*(this._canvas.height+e[1])-e[1]/2):t.coordinate[1]<-e[1]?(t.coordinate[0]=Math.random()*(this._canvas.width+e[0])-e[0]/2,t.coordinate[1]=this._canvas.height+e[1]):t.coordinate[1]>this._canvas.height+e[1]&&(t.coordinate[0]=Math.random()*(this._canvas.width+e[0])-e[0]/2,t.coordinate[1]=-e[1])}clear(){this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height)}getCanvas(){return this._canvas}setAnimation(t){t=!1!==t,this.set("animation",t),t?(this._pause=!0,requestAnimationFrame(this._animate.bind(this))):this.dispatchEvent({type:"animation:stop",time:this._time})}_animate(t){this.getVisible()&&this.get("animation")&&(this._pause?requestAnimationFrame(function(t){this._time=t,requestAnimationFrame(this._animate.bind(this))}.bind(this)):(t-this._time>this._fps&&(this.draw(t-this._time),this._time=t),requestAnimationFrame(this._animate.bind(this)))),this._pause=!1}},O=class extends R{constructor(t){super(t=t||{}),this.set("size",[100,100]);var e=document.createElement("CANVAS");e.width=200,e.height=200;var i=e.getContext("2d"),s=this.gradient=i.createRadialGradient(50,50,0,50,50,50);s.addColorStop(0,"rgba(255,255,255,.2"),s.addColorStop(1,"rgba(255,255,255,0"),this.image=e;for(var a=0;a<7;a++){i.save();var n=100*Math.random(),h=100*Math.random();i.translate(n,h),i.fillStyle=s,i.fillRect(0,0,e.width,e.height),i.restore()}}draw(t){t.save(),t.translate(this.coordinate[0],this.coordinate[1]),t.drawImage(this.image,-this.image.width/2,-this.image.width/2),t.restore()}update(t){var e=this.getOverlay().get("speed")*t/this.getOverlay()._fps,i=this.getOverlay().get("angle");this.coordinate[0]+=e*Math.cos(i),this.coordinate[1]+=e*Math.sin(i)}};V=a("iQyfo");(0,z.default)(t('<div> <h2> Day 2: lines Flow lines style </h2> <p> Use <a href="http://viglino.github.io/ol-ext/doc/doc-pages/ol.filter.Mask.html" target="_new"> ol-ext Mask filter </a> to enhance administrative boundary and focus on the map. </p> </div>')),b.permalink.setUrlReplace(!1),b.default.getView().setZoom(15),b.default.getView().setCenter([-129695,5805721]);const A=new m({map:b.default});window.game=A;const N=new(0,n.default)({preload:1/0,layer:"ORTHOIMAGERY.ORTHOPHOTOS"});A.getMap().addLayer(N);const k=new(0,h.default)({source:new(0,r.default)});b.default.addLayer(k);let D=-Math.PI/2,T=b.default.getView().getCenter();const B=new x({position:b.default.getView().getCenter(),src:"https://viglino.github.io/ol-games/examples/data/plane.png",size:175,scale:.5,frameRate:10,states:{idle:{line:0,length:3}}});k.getSource().addFeature(B);const Z=new x({position:b.default.getView().getCenter(),src:"https://viglino.github.io/ol-games/examples/img/Biploar_shadow.png",size:200,scale:.3,frameRate:10,states:{idle:{line:0,length:0}}});k.getSource().addFeature(Z),Z.getStyle()[0].setZIndex(-1),Z.getStyle()[0].getImage().setOpacity(.5),window.shadow=Z,A.on("render",(function(t){D+=L,T[0]+=.2*t.dt*Math.cos(D),T[1]-=.2*t.dt*Math.sin(D),A.getView().setCenter(T),b.default.getView().getZoom()<q?b.default.getView().setZoom(Math.min(q,b.default.getView().getZoom()+t.dt/5e3)):b.default.getView().getZoom()>q&&b.default.getView().setZoom(Math.max(q,b.default.getView().getZoom()-t.dt/5e3)),B.getGeometry().setCoordinates(T),B.getStyle()[0].getImage().setRotation(D+Math.PI/2),B.update(t),Z.getGeometry().setCoordinates([T[0]+30*b.default.getView().getResolution(),T[1]-40*b.default.getView().getResolution()]),Z.getStyle()[0].getImage().setScale(.4+.03*(1-b.default.getView().getResolution())),Z.getStyle()[0].getImage().setRotation(D+Math.PI/2)})),A.start();let L=0,q=b.default.getView().getZoom();document.addEventListener("keydown",(t=>{switch(t.key){case"ArrowUp":q=17;break;case"ArrowDown":q=14;break;case"ArrowLeft":L=-Math.PI/500;break;case"ArrowRight":L=Math.PI/500}})),document.addEventListener("keyup",(t=>{switch(t.key){case"ArrowUp":case"ArrowDown":q=b.default.getView().getZoom();break;default:L=0}}));const F=new P({particule:O,density:.5,angle:Math.PI/3,speed:1});b.default.addOverlay(F),window.cloud=F;const W=V.default.create("DIV",{className:"bar",parent:document.body});V.default.create("DIV",{className:"left",on:{pointerdown:()=>{L=-Math.PI/500}},parent:W}),V.default.create("DIV",{className:"up",on:{pointerdown:()=>{q=17}},parent:W}),V.default.create("DIV",{className:"down",on:{pointerdown:()=>{q=14}},parent:W}),V.default.create("DIV",{className:"right",on:{pointerdown:()=>{L=Math.PI/500}},parent:W}),document.addEventListener("pointerup",(()=>{q=b.default.getView().getZoom(),L=0})),V.default.create("BUTTON",{text:"Clouds",click:()=>{F.setVisible(!F.getVisible())},parent:W});