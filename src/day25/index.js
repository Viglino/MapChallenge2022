import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'

import Halftone from 'ol-ext/filter/Halftone'
import CanvasFilter from 'ol-ext/filter/CanvasFilter'

import './index.css'
setInfo(info)

map.getView().setZoom(16.5)
map.getView().setCenter([-187018, 6125404])

ol_layer_Geoportail.register("BUILDINGS.BUILDINGS", { "key": "topographie", "server":"https://wxs.ign.fr/geoportail/wmts","layer":"BUILDINGS.BUILDINGS","title":"Routes","format":"image/png","style":"normal","queryable":false,"tilematrix":"PM","minZoom":6,"maxZoom":18,"bbox":[-63.969162,-21.49687,55.964417,71.584076],"desc":"Affichage du réseau routier français et européen.","originators":{"IGN":{"href":"http://www.ign.fr","attribution":"Institut national de l'information géographique et forestière","logo":"https://wxs.ign.fr/static/logos/IGN/IGN.gif","minZoom":6,"maxZoom":18,"constraint":[{"minZoom":15,"maxZoom":18,"bbox":[-63.37252,-21.475586,55.925865,51.31212]},{"minZoom":6,"maxZoom":14,"bbox":[-63.969162,-21.49687,55.964417,71.584076]}]}}})
ol_layer_Geoportail.register("GEOGRAPHICALNAMES.NAMES", { "key": "topographie", "server":"https://wxs.ign.fr/geoportail/wmts","layer":"GEOGRAPHICALNAMES.NAMES","title":"Routes","format":"image/png","style":"normal","queryable":false,"tilematrix":"PM","minZoom":6,"maxZoom":18,"bbox":[-63.969162,-21.49687,55.964417,71.584076],"desc":"Affichage du réseau routier français et européen.","originators":{"IGN":{"href":"http://www.ign.fr","attribution":"Institut national de l'information géographique et forestière","logo":"https://wxs.ign.fr/static/logos/IGN/IGN.gif","minZoom":6,"maxZoom":18,"constraint":[{"minZoom":15,"maxZoom":18,"bbox":[-63.37252,-21.475586,55.925865,51.31212]},{"minZoom":6,"maxZoom":14,"bbox":[-63.969162,-21.49687,55.964417,71.584076]}]}}})

/* Roads */
const road = new ol_layer_Geoportail({ 
  className: 'road',
  layer: 'TRANSPORTNETWORKS.ROADS'
})
map.addLayer(road)

//road.addFilter(new CanvasFilter({ invert: 100 }))
road.addFilter(new Halftone({
  color: '#06f',
  size: 3
}))

/* Buildings */
const building = new ol_layer_Geoportail({ 
  className: 'building',
  layer: 'BUILDINGS.BUILDINGS'
})
map.addLayer(building)

//building.addFilter(new CanvasFilter({ invert: 100 }))
building.addFilter(new Halftone({
  color: '#f05',
  size: 5
}))

/* Names */
const name = new ol_layer_Geoportail({ 
  className: 'name',
  layer: 'GEOGRAPHICALNAMES.NAMES'
})
map.addLayer(name)
