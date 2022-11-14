import ol_layer_Geoportail from 'ol-ext/layer/Geoportail'

import map from '../common/map.js'

import setInfo from '../common/setInfo.js'

import info from './page-info.html'

import './index.css'
setInfo(info)

map.getView().setZoom(9)
map.getView().setCenter([259798, 5931906])

const backLayer = new ol_layer_Geoportail({ 
  layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2'
})
map.addLayer(backLayer)
