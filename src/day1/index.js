import Geoportail from 'ol-ext/layer/Geoportail'

import VectorTileLayer from 'ol/layer/VectorTile'
import VectorTileSource from 'ol/source/VectorTile'
import MVTFormat from 'ol/format/MVT'
import Feature from 'ol/Feature'
import TileWFS from 'ol-ext/source/TileWFS'
import ColorFilter from 'ol-ext/filter/Colorize'

import Select from 'ol/interaction/Select'
import { click } from 'ol/events/condition'

import map from '../common/map.js'
import styleFn from './styleFn.js'
import setInfo from '../common/setInfo.js'

import info from './page-info.html'
import './index.css'

setInfo(info)

const backLayer = new Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
backLayer.addFilter(new ColorFilter({
  operation: 'difference', 
  color: '#FA0', 
  value: 1
}))
map.addLayer(backLayer)

/**/
const layer = new VectorTileLayer({
  title: 'MVT',
  source: new VectorTileSource({
    format: new MVTFormat({
      featureClass: Feature
    }),
    url: 'https://wxs.ign.fr/topographie/geoportail/tms/1.0.0/BDTOPO/{z}/{x}/{y}.pbf'
  }),
  style: styleFn 
})
/*/
const layer = new VectorLayer({
  source: new TileWFS({
    url: 'https://wxs.ign.fr/topographie/geoportail/wfs',
    typeName: 'BDTOPO_V3:erp',
    tileZoom: 13
  }),
  minZoom: 8
})
/*/
map.getView().setMinZoom(16)
map.getView().setCenter([636860, 5651388])
map.addLayer(layer)

loadFonts(() => {
  layer.setStyle(styleFn)
})

// Select interaction
const select = new Select({
  hitTolerance: 2,
  condition: click
});
select.on('select', e => {
  const f = e.selected[0];
  if (f) {
    console.log(f.getProperties())
  }
})
map.addInteraction(select);

// Hover interaction
import Hover from 'ol-ext/interaction/Hover'
import Popup from 'ol-ext/overlay/Popup'
import loadFonts from '../common/loadFont.js'

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
    popup.show(e.coordinate, f.get('libelle') || '')
  } else {
    popup.hide()
  }
})
map.addInteraction(hover)
