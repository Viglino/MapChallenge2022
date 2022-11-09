import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import Mask from 'ol-ext/filter/Mask'
import Fill from 'ol/style/Fill.js'
import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'
import CanvasScaleLine from 'ol-ext/control/CanvasScaleLine'
import CanvasAttribution from 'ol-ext/control/CanvasAttribution'
import LayerSwitcher from 'ol-ext/control/LayerSwitcher'
import PrintDialog from 'ol-ext/control/PrintDialog'

import './index.css'
setInfo(info)
map.getView().setZoom(9)
map.getView().setCenter([-323699, 6074344])

const mapLayer = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
map.addLayer(mapLayer)

const photoLayer = new ol_layer_Geoportail({ layer: 'ORTHOIMAGERY.ORTHOPHOTOS' })
map.addLayer(photoLayer)

const roadLayer = new ol_layer_Geoportail({ layer: 'TRANSPORTNETWORKS.ROADS' })
map.addLayer(roadLayer)

map.addControl(new CanvasScaleLine)
map.addControl(new CanvasAttribution({ canvas: true }))
map.addControl(new LayerSwitcher)
map.addControl(new PrintDialog)