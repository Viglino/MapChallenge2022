import Geoportail from 'ol-ext/layer/Geoportail.js'
import ColorFilter from 'ol-ext/filter/Colorize'
import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'


import './index.css'
setInfo(info)

map.getView().setCenter([329844, 5757236])
map.getView().setZoom(17)

const backLayer = new Geoportail({ layer: 'ORTHOIMAGERY.ORTHOPHOTOS' })
map.addLayer(backLayer)
backLayer.addFilter(new ColorFilter({
  color: '#a00', 
  value: .2
}))
backLayer.addFilter(new ColorFilter({
  operation: 'saturation', 
  value: .7
}))

/*
Geoportail.register("ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW", {"key":"altimetrie","server":"https://wxs.ign.fr/geoportail/wmts","layer":"ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW","title":"Estompage","format":"image/png","style":"estompage_grayscale","queryable":false,"tilematrix":"PM","minZoom":0,"maxZoom":18,"bbox":[-63.186966,-21.406914,55.8884,50.9218],"desc":"Couche d'ombrage calculée à partir des données altimétriques de l'IGN permettant de mieux appréhender le relief. L'estompage proposé est réalisé à partir des données MNT BDAlti au pas de 25m avec deux soleils : un au nord-est de hauteur 45°, l'autre zénithal.","originators":{"IGN":{"href":"https://www.ign.fr","attribution":"Institut national de l'information géographique et forestière","logo":"https://wxs.ign.fr/static/logos/IGN/IGN.gif","minZoom":0,"maxZoom":18,"constraint":[{"minZoom":0,"maxZoom":18,"bbox":[-63.186966,-21.406914,55.8884,50.9218]}]}}});
const layer = new Geoportail({ layer: 'ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW' });
map.addLayer(layer)
*/

const road = new Geoportail({ 
  className: 'road',
  layer: 'TRANSPORTNETWORKS.ROADS' 
})
map.addLayer(road)
road.addFilter(new ColorFilter({
  operation: 'sepia', 
  preserveAlpha: true,
  color: '#f00', 
  value: .8
}))
