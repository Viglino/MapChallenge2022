import ol_layer_Geoportail from 'ol-ext/layer/Geoportail'
import TileWMS from 'ol/source/TileWMS'
import TileLayer from 'ol/layer/Tile.js'
import LayerSwitcher from 'ol-ext/control/LayerSwitcher'
import LegendControl from 'ol-ext/control/Legend'
import Legend from 'ol-ext/legend/Legend'
import LegendImage from 'ol-ext/legend/Image'

import map from '../common/map.js'

import setInfo from '../common/setInfo.js'

import info from './page-info.html'

import './index.css'
setInfo(info)

map.getView().setZoom(9)
map.getView().setCenter([259798, 5931906])
map.addControl(new LayerSwitcher)

const backLayer = new ol_layer_Geoportail({ 
  layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
  baseLayer: true,
  visible: false
})
map.addLayer(backLayer)

const geology = new TileLayer ({
  "title": "Cartes géologiques",
  baseLayer: true,
  "extent": [
    -20037508.342789244,
    -238107693.26496765,
    20037508.342789244,
    238107693.26496765
  ],
  "queryable": false,
  "abstract": "Cartes géologiques",
  "minResolution": 3.1750000000000003,
  "maxResolution": 3527.777777777778,
  "source": new TileWMS({
    "url": "http://geoservices.brgm.fr/geologie?language=fre&",
    "projection": "EPSG:3857",
    "attributions": [
      "<a href='http://www.brgm.fr/'>&copy; Brgm</a>"
    ],
    "crossOrigin": "anonymous",
    "params": {
      "LAYERS": "GEOLOGIE",
      "FORMAT": "image/png",
      "VERSION": "1.3.0"
    }
  })
})
map.addLayer(geology)

// Define a new legend
var legend = new Legend({ 
  title: 'Legend',
  margin: 5,
  maxWidth: 300
});
var legendCtrl = new LegendControl({
  legend: legend,
  collapsed: false
});
map.addControl(legendCtrl);

// New legend associated with a layer
const geologyLegend = new Legend({ layer: geology })
geologyLegend.addItem(new LegendImage({
  title: 'Geology',
  src: 'http://geoservices.brgm.fr/geologie?language=fre&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=GEOSERVICES_GEOLOGIE&format=image/png&STYLE=default'
}))
legend.addItem(geologyLegend)

// New legend associated with a layer
const layerLegend = new Legend({ layer: backLayer })
layerLegend.addItem(new LegendImage({
  title: 'Plan IGN',
  src: 'https://www.geoportail.gouv.fr/depot/layers/GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2/legendes/GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2_16-legend.png'
}))
legend.addItem(layerLegend)
