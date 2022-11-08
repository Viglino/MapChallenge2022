import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import ColorFilter from 'ol-ext/filter/Colorize'
import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'


import './index.css'
setInfo(info)

map.getView().setCenter([329844, 5757236])
map.getView().setZoom(17)

const backLayer = new ol_layer_Geoportail({ layer: 'ORTHOIMAGERY.ORTHOPHOTOS' })
map.addLayer(backLayer)
backLayer.addFilter(new ColorFilter({
  color: '#a00', 
  value: .2
}))
backLayer.addFilter(new ColorFilter({
  operation: 'saturation', 
  color: '#a00', 
  value: 1
}))


const road = new ol_layer_Geoportail({ 
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
