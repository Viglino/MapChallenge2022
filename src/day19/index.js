import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import GlobeControl from 'ol-ext/control/Globe'
import map from '../common/map.js'
import 'ol-ext/util/View'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'

import './index.css'
setInfo(info)

const backLayer = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
map.addLayer(backLayer)

// Layers for the overview
var layers2 = [
  new ol_layer_Geoportail({ layer: 'ORTHOIMAGERY.ORTHOPHOTOS' })
];

// New control on the map
var globe = new GlobeControl({
  layers: layers2,
  follow: true,
  panAnimation: 'elastic'
});
map.addControl(globe);

// Set center when ready
setTimeout(() => {
  globe.setCenter(map.getView().getCenter(), true)
}, 500)
window.globe = globe

// Move on click
map.getView().setZoom(5)
map.getView().setCenter([1373435, 5676503])

globe.getGlobe().on('click', e => {
  map.getView().flyTo({
    center: e.coordinate,
    zoomAt: map.getView().getZoom() - 1
  })
})