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
map.getView().setZoom(17.2)
map.getView().setCenter([-187893, 6120701])

const backLayer = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
map.addLayer(backLayer)

import TileWFS from 'ol-ext/source/TileWFS'
import VectorLayer from 'ol/layer/Vector.js'

var source = new TileWFS({
  url: 'https://data.geopf.fr/wfs/ows',
  typeName: 'BDTOPO_V3:batiment',
  tileZoom: 16
});
const bati = new VectorLayer({
  title: 'Buildings',
  source: source,
  maxResolution: 3,  // prevent load on small zoom 
  declutter: true
})
map.addLayer(bati)

// Add a render 3D to the buildings
import render3D from 'ol-ext/layer/Render3D'
var r3D = new render3D({ 
  height: function(f) {
    return f.get('hauteur') / 1.5;
  }, 
  //ghost: true,
  active: true,
  maxResolution: 2, 
  defaultHeight: 3.5 
});
bati.setRender3D(r3D);
