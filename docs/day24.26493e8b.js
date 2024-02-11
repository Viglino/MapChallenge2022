function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},o=t.parcelRequirecc54;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequirecc54=o);var s=o("6gELa"),n=o("610XN"),r=o("20LS2"),l=o("apY9r"),c=o("gYm1x"),d=o("kPMpK"),p=o("5VeMq"),u=o("6yJ0x"),m=o("iGyOD"),f=o("j2K3b"),g=o("l9IGS"),h=o("ayeEa"),w=o("1B70O"),y={eiffel_tower:{position:[255450,6250800],displacement:[0,50],scale:.5},triumph_arc:{position:[255477,6253464],displacement:[0,20],scale:.45},notre_dame:{position:[261550,6249946],displacement:[0,30],scale:.5},bastille:{position:[263685,6249999],displacement:[0,30],scale:.5},senat:{position:[260130,6249305],displacement:[0,15],scale:.45},nation:{position:[266972,6249068],displacement:[0,25],scale:.5},nation2:{icon:"nation",position:[266993,6249220],displacement:[0,25],scale:.7},vincennes:{position:[271137,6248125],displacement:[0,35],scale:.5},invalides:{position:[257421,6250288],displacement:[0,35],scale:.5},concorde:{position:[258414,6252166],displacement:[0,35],scale:.8},pt_palais:{position:[257707,6252185],displacement:[0,20],scale:.7},gd_palais:{position:[257373,6252170],displacement:[0,25],scale:.7},pantheon:{position:[261140,6248819],displacement:[0,35],scale:.4},gare_lyon:{position:[264287,6248488],displacement:[0,35],scale:.4},gare_orlean:{position:[263390,6247959],displacement:[0,10],scale:.6},gare_montparnasse:{position:[258594,6248311],displacement:[0,20],scale:.5},republique:{position:[263116,6252423],displacement:[0,30],scale:.7},st_denis:{position:[261347,6252990],displacement:[0,20],scale:.55},gare_nord:{position:[262146,6254540],displacement:[0,30],scale:.7},gare_est:{position:[262573,6253950],displacement:[0,25],scale:.6},sacre_coeur:{position:[260795,6255655],displacement:[0,25],scale:.55},liberty:{position:[253824,6249519],displacement:[0,30],scale:.7},carrousel:{position:[259681,6251452],displacement:[0,20],scale:.8},gare_lazare:{position:[258843,6253862],displacement:[0,20],scale:.55},chaumont:{position:[265230,6254695],displacement:[0,15],scale:.8},st_jacques:{position:[261433,6250817],displacement:[0,30],scale:.7},orsay:{position:[259e3,6251e3],displacement:[0,20],scale:.65},berlfort:{position:[259643,6246775],displacement:[0,20],scale:.7},vendome:{position:[259300,6252426],displacement:[0,25],scale:.45}};(0,o("jZUWm").default)(e('<div> <h2> Day 24: Paris 1900 </h2> <p> Visit Paris with Orky. </p> <p> Photos collected by <a href="https://twitter.com/SamuelMartin75" target="_new">@SamuelMartin75</a> on Twitter. <br> Monuments icons from <a href="https://fr.wikipedia.org/wiki/Fichier:1900_Garnier_Pocket_Map_or_Plan_of_Paris,_France_(_Eiffel_Tower_)_-_Geographicus_-_Paris-garnier-1900.jpg" target="_new">Garnier 1900 pocket map of Paris</a> public domain. <br> Old map "Carte de Paris de 1906" from <a href="https://geoservices.ign.fr/services-web-experts-cartes" target="_new">IGN-France</a> <br> Orky sprite is part of the <a href="https://github.com/makrohn/Universal-LPC-spritesheet" target="_new">Universal-LPC-spritesheet project!</a> </p> </div>')),w.permalink.setUrlReplace(!1),w.default.getView().setZoom(14),w.default.getView().setCenter([260352,6250845]),w.default.getView().setMinZoom(13),w.default.getView().setMaxZoom(15);const _=new(0,l.default)({map:w.default});window.game=_;const S=new(0,s.default)({preload:1/0,layer:"ORTHOIMAGERY.ORTHOPHOTOS",visible:!1});w.default.addLayer(S),s.default.register("GEOGRAPHICALGRIDSYSTEMS.1900TYPEMAPS",{layer:"GEOGRAPHICALGRIDSYSTEMS.1900TYPEMAPS",theme:"cartes",desc:"Carte topographique de Paris et de ses environs éditée en 1906.",server:"https://data.geopf.fr/wmts",bbox:[1.62941,48.4726,3,49.1548],format:"image/jpeg",minZoom:10,maxZoom:15,originators:{Geoservices:{attribution:"Géoservices",href:"https://geoservices.ign.fr/"}},queryable:!1,style:"normal",tilematrix:"PM",title:"Carte topographique - environs de Paris (1906)",legend:["https://data.geopf.fr/annexes/ressources/legendes/LEGEND.jpg"]});const b=new(0,s.default)({layer:"GEOGRAPHICALGRIDSYSTEMS.1900TYPEMAPS",extent:[2e5,6207837,319247,6298636]});w.default.addLayer(b);const v=["diamond","flask","leaf","pix","scroll","statue"],P=new(0,n.default)({source:new(0,r.default)({url:"./paris-photo.geojson",format:new(0,d.default),attributions:["<a href='https://twitter.com/search?q=paris%20autrefois%20%28from%3ASamuelMartin75%29&src=typed_query&f=live'>@SamuelMartin</a>"]}),style:e=>(e.getStyle()||e.setStyle(new(0,g.default)({image:new(0,h.default)({src:"./icon/"+v[Math.trunc(Math.random()*v.length)]+".png"})})),e.getStyle()),renderOrder:(e,t)=>t.getGeometry().getFirstCoordinate()[1]-e.getGeometry().getFirstCoordinate()[1]});w.default.addLayer(P);const O=new(0,u.default)({cursor:"pointer",layers:[P]});w.default.addInteraction(O);const G=new(0,p.default)({popupClass:"black anim",positioning:"bottom-left",offset:[0,-70],autoPan:!1});w.default.addOverlay(G);const M=new(0,n.default)({source:new(0,r.default),updateWhileAnimating:!0,updateWhileInteracting:!0,renderOrder:(e,t)=>t.getGeometry().getFirstCoordinate()[1]-e.getGeometry().getFirstCoordinate()[1]});w.default.addLayer(M);const x=new(0,c.default)({name:"Orky",position:[260352,6251083],src:"https://viglino.github.io/ol-games/examples/data/orc.png",scale:1.5});let E;x.getStyle()[0].getImage().setDisplacement([0,40]),x.getStyle()[0].getText().setOffsetY(-75),M.getSource().addFeature(x),Object.keys(y).forEach((e=>{const t=y[e],a=new(0,m.default)(new(0,f.default)(t.position));a.setStyle(new(0,g.default)({image:new(0,h.default)({src:"./monument/"+(t.icon||e)+".png",scale:t.scale,displacement:t.displacement})})),M.getSource().addFeature(a)})),setTimeout((()=>G.show(x.getCoordinate(),"\nHello, I'm Orky!<br/>\nLet's visit Paris 1900!<br/>\nWhere do you want to go?\n")),1e3);const T=document.querySelector(".photo");w.default.on("click",(function(e){E=w.default.getFeaturesAtPixel(e.pixel,{layerFilter:e=>e===P}).pop(),T.dataset.position=e.pixel[0]>window.innerWidth/2?"left":"right",E&&(T.querySelector("img").src=E.get("img"),T.querySelector("h3").innerText=E.get("title"),T.querySelector("p").innerHTML=E.get("description")+"<br/>&copy; "+E.get("copy")),delete T.dataset.visible,x.setDestination(e.coordinate,w.default.getView().getResolution()/7),x.setState("walk_"+x.getQuarter()),G.hide()})),x.on("destination",(function(){x.setState("idle"),E&&(T.dataset.visible=1,P.getSource().removeFeature(E))})),_.on("render",(function(e){x.move(e)})),_.start(),window.orc=x;