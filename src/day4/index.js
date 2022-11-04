import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import ColorFilter from 'ol-ext/filter/Colorize'
import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'


import './index.css'
setInfo(info)

map.getView().setCenter([260938, 6250524])
map.getView().setZoom(14)

const backLayer = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
map.addLayer(backLayer)
backLayer.addFilter(new ColorFilter({
  color: '#050', 
  value: 1
}))
