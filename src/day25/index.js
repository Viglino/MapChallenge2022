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

ol_layer_Geoportail.register("BUILDINGS.BUILDINGS", {"layer":"BUILDINGS.BUILDINGS","theme":"topographie","desc":"Affichage des constructions couvrant le territoire français.","server":"https://data.geopf.fr/wmts","bbox":[-63.9692,-21.4969,55.9644,71.5841],"format":"image/png","minZoom":6,"maxZoom":18,"originators":{"Geoservices":{"attribution":"Géoservices","href":"https://geoservices.ign.fr/"}},"queryable":false,"style":"normal","tilematrix":"PM","title":"Bâtiments","legend":["https://data.geopf.fr/annexes/ressources/legendes/LEGEND.jpg","https://data.geopf.fr/annexes/ressources/legendes/BUILDINGS.BUILDINGS-legend.png"]});
ol_layer_Geoportail.register("GEOGRAPHICALNAMES.NAMES", {"layer":"GEOGRAPHICALNAMES.NAMES","theme":"topographie","desc":"Affichage des noms des villes, villages, lieux-dits ...","server":"https://data.geopf.fr/wmts","bbox":[-63.9692,-21.4969,55.9644,71.5841],"format":"image/png","minZoom":6,"maxZoom":18,"originators":{"Geoservices":{"attribution":"Géoservices","href":"https://geoservices.ign.fr/"}},"queryable":false,"style":"normal","tilematrix":"PM","title":"Dénominations géographiques","legend":["https://data.geopf.fr/annexes/ressources/legendes/LEGEND.jpg"]});

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
