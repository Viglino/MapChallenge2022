import Geoportail from 'ol-ext/layer/Geoportail'

import VectorTileLayer from 'ol/layer/VectorTile'
import VectorTileSource from 'ol/source/VectorTile'
import MVTFormat from 'ol/format/MVT'
import Select from 'ol/interaction/Select'
import Feature from 'ol/Feature'
import RenderFeature from 'ol/render/Feature'
import { click } from 'ol/events/condition'

import map from '../map.js'
import styleFn from './styleFn.js'

map.addLayer(new Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' }))
map.addLayer(new VectorTileLayer({
  title: 'MVT',
  source: new VectorTileSource({
    format: new MVTFormat({
      featureClass: Feature
    }),
    url: 'https://wxs.ign.fr/topographie/geoportail/tms/1.0.0/BDTOPO/{z}/{x}/{y}.pbf'
  }),
  style: styleFn 
}))

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
const popup = new Popup({
  positioning: 'bottom-center'
})
map.addOverlay(popup)
const hover = new Hover({
  cursor: 'pointer',
  hitTolerance: 2
})

hover.on('leave', () => {
  popup.hide()
});

hover.on('hover', e => {
  const f = e.feature
  if (f) {
    popup.show(e.coordinate, f.get('layer')+ ' ' + (f.get('type_principal') || '') + '<br/>'+(f.get('symbo') || f.get('libelle') || ''))
  } else {
    popup.hide()
  }
})
map.addInteraction(hover)
