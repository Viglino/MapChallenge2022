import TileLayer from 'ol/layer/Tile.js'
import OSM from 'ol/source/OSM'

import OverpassSource from 'ol-ext/source/Overpass'
import VectorLayer from 'ol/layer/vector.js'
import { tile } from 'ol/loadingstrategy'
import { createXYZ } from 'ol/tilegrid'

import Style from 'ol/style/style.js'
import FontSymbol from 'ol-ext/style/FontSymbol'
import loadFonts from '../common/loadFont'
import Stroke from 'ol/style/Stroke'
import Fill from 'ol/style/Fill'

import 'ol-ext/style/FontMaki2Def'
import 'ol-ext/style/FontMakiDef'

import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'

import './index.css'
setInfo(info)

const backLayer = new TileLayer({
  source: new OSM()
})
map.addLayer(backLayer)
map.getView().setZoom(14)
map.getView().setCenter([452391, 6156107])


// Overpass layer source
const vectorSource = new OverpassSource({
  //way: false,
  filter: [ 'highway=bus_stop' ], 
  //filter: [ 'leisure' ], 
  // filter: [ 'leisure', 'sport=swimming' ], 
  // filter: [ 'highway' ], 
  // Tile strategy load at zoom 11
  strategy: tile(createXYZ({ minZoom: 11, maxZoom: 11, tileSize:512  })),
  // Bbox strategy : reload at each move
  //strategy: ol.loadingstrategy.bbox,
});


let busStyle 
// Create style on load
loadFonts(e => {
  busStyle = new Style({
    image: new FontSymbol({
      glyph: 'maki-bus',
      radius: 18,
      displacement: [0, 0],
      fontSize: .8,
      color: '#00AAFF',
      fill: new Fill({
        color: '#00AAFF'
      }),
      stroke: new Stroke({
        color: [255,255,255],
        width: 2
      })
    })
  })
})

// Add layer
map.addLayer(new VectorLayer({
  name: 'OSM',
  source: vectorSource,
  // Limit resolution to avoid large area request
  maxResolution: 20, // > zoom 13
  style: () => busStyle
}));

// Hover interaction
import Hover from 'ol-ext/interaction/Hover'
import Popup from 'ol-ext/overlay/Popup'

const popup = new Popup({
  positioning: 'bottom-center'
})
map.addOverlay(popup)
const hover = new Hover ({
  cursor: 'pointer',
  hitTolerance: 2
})

hover.on('leave', () => {
  popup.hide()
});

hover.on('hover', e => {
  const f = e.feature
  if (f) {
    popup.show(e.coordinate, f.get('name') || '')
  } else {
    popup.hide()
  }
})
map.addInteraction(hover)