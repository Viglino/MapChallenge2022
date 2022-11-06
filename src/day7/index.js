
import Geoportail from 'ol-ext/layer/Geoportail';
import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'


import './index.css'
setInfo(info)
map.getView().setZoom(6)
map.getView().setCenter([242601, 5841416])


Geoportail.register("INSEE.FILOSOFI.POPULATION", {"key":"economie","server":"https://wxs.ign.fr/geoportail/wmts","layer":"INSEE.FILOSOFI.POPULATION","title":"Densité de population","format":"image/png","style":"INSEE","queryable":true,"tilematrix":"PM","minZoom":6,"maxZoom":16,"bbox":[-63.37252,-21.475586,55.925865,51.31212],"desc":"Nombre d'individus par km²","originators":{"IGN":{"href":"https://www.ign.fr","attribution":"Institut national de l'information géographique et forestière","logo":"https://wxs.ign.fr/static/logos/IGN/IGN.gif","minZoom":6,"maxZoom":16,"constraint":[{"minZoom":6,"maxZoom":16,"bbox":[-63.37252,-21.475586,55.925865,51.31212]}]}}});
Geoportail.register("INSEE.FILOSOFI.LOGEMENTS.SURFACE.MOYENNE.SECRET", {"key":"economie","server":"https://wxs.ign.fr/geoportail/wmts","layer":"INSEE.FILOSOFI.LOGEMENTS.SURFACE.MOYENNE.SECRET","title":"Surface moyenne des logements (secret signalé)","format":"image/png","style":"INSEE","queryable":true,"tilematrix":"PM","minZoom":6,"maxZoom":16,"bbox":[-63.37252,-21.475586,55.925865,51.31212],"desc":"Surface moyenne des logements (les cases hachurées correspondent aux données secrétisées)","originators":{"IGN":{"href":"https://www.ign.fr","attribution":"Institut national de l'information géographique et forestière","logo":"https://wxs.ign.fr/static/logos/IGN/IGN.gif","minZoom":6,"maxZoom":16,"constraint":[{"minZoom":6,"maxZoom":16,"bbox":[-63.37252,-21.475586,55.925865,51.31212]}]}}});

// const backLayer = new Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
//const backLayer = new Geoportail({ layer: 'INSEE.FILOSOFI.POPULATION' });
const backLayer = new Geoportail({ 
  layer: 'INSEE.FILOSOFI.LOGEMENTS.SURFACE.MOYENNE.SECRET',
});
backLayer.getSource().setAttributions(['&copy; INSEE'])
map.addLayer(backLayer)


import Lego from 'ol-ext/filter/Lego'
var lego = new Lego({ brickSize: 16 });
backLayer.addFilter(lego);
