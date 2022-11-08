import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import Mask from 'ol-ext/filter/Mask'
import Fill from 'ol/style/Fill.js'
import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'

import MultiPolygon from 'ol/geom/MultiPolygon'
import Feature from 'ol/Feature'

import './index.css'
setInfo(info)


const plan = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
const photo = new ol_layer_Geoportail({ layer: 'ORTHOIMAGERY.ORTHOPHOTOS' })
map.addLayer(photo)
map.addLayer(plan)

map.getView().setZoom(16)
map.getView().setCenter([-172673, 5976786])

import Blob from 'ol-ext/interaction/Blob'
// Blob interaction
const blob = new Blob({ radius: 80, layers: plan });
map.addInteraction(blob);
