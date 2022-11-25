import VectorLayer from 'ol/layer/vector'
import VectorSource from 'ol/source/Vector'
import ol_layer_Geoportail from 'ol-ext/layer/Geoportail'
import GeoJSON from 'ol/format/GeoJSON.js'
import Select from 'ol/interaction/Select'
import {click} from 'ol/events/condition'
import Hover from 'ol-ext/interaction/Hover'

import Popup from 'ol-ext/overlay/Popup'
import ol_ext_element from 'ol-ext/util/element'
import Style from 'ol/style/Style'
import RegularShape from 'ol/style/RegularShape'

import GridReference from 'ol-ext/control/GridReference'

import map, { permalink } from '../common/map.js'
import setInfo from '../common/setInfo.js'

import info from './page-info.html'
import './index.css'
import Stroke from 'ol/style/stroke.js'
import Fill from 'ol/style/fill.js'

setInfo(info)
permalink.setUrlReplace(false)

map.getView().fit([265737, 6250813, 267275, 6251872])

const backLayer = new ol_layer_Geoportail({ layer: 'ORTHOIMAGERY.ORTHOPHOTOS' })
map.addLayer(backLayer)

const photo = new VectorLayer ({ 
  source: new VectorSource({
    url: './pere_lachaise.geojson',
    format: new GeoJSON(),
    attributions: [ "<a href='https://www.data.gouv.fr/fr/datasets/monuments-et-tombes-de-personnalites-du-cimetiere-du-pere-lachaise-openstreetmap-wikipedia-wikimedia/'>M Le Moine</a>" ],
  }),
  style: new Style({
    image: new RegularShape({
      radius: 6,
      points: 4,
      angle: Math.PI / 4,
      fill: new Fill({
        color: [0,0,0,.5]
      }),
      stroke: new Stroke({
        color: [0,0,0],
        width: 2.5
      })
    })
  })
});
map.addLayer(photo);

// Move interaction + hover cursor
map.addInteraction(new Hover({
  layers: [photo],
  cursor: 'pointer'
}));

// New control
const ref = new GridReference({
  extent: [265700, 6250700, 267300, 6252000],
  size: [11,12],
  target: document.body,
  source: photo.getSource(),
  property: "nom",
  sortFeatures: (f1, f2) => {
    const a = (f1.get('type') === 'music' ? 'A' : f1.get('type')) + '-' + f1.get('nom')
    const b = (f2.get('type') === 'music' ? 'A' : f2.get('type')) + '-' + f2.get('nom')
    return a===b ? 0 : a<b ? -1 : 1;
  },
  indexTitle: f => f.get('type')
});
map.addControl (ref);

// Control Select
var select = new Select({ condition: click });
map.addInteraction(select);

const popup = new Popup({
  popupClass: "default anim",
  positioning: 'bottom-center'
})
map.addOverlay(popup)

select.on('select', e => {
  const f = e.selected[0]
  if (f) {
    const elt = ol_ext_element.create('DIV', { 
      html: (f.get('resume') || f.get('nom')).replace(/<a href="/g, '<a target="_wiki" href="https://fr.wikipedia.org/'),
    })
    ol_ext_element.create('IMG', { 
      src: f.get('thumb'),
      parent: elt
    })
    ol_ext_element.create('P', { 
      html: 'photo &copy; ' + f.get('img_auteur'),
      class: 'center',
      parent: elt
    })
    ol_ext_element.create('A', { 
      href: f.get('lien_wikipedia'),
      class: 'center',
      html: '&copy; Wikipedia - OpenStreetMap',
      parent: elt
    })
    popup.show(f.getGeometry().getFirstCoordinate(), elt)
  } else {
    popup.hide()
  }
})

// Select feature when click on the reference index
ref.on('select', function(e) {
  select.getFeatures().clear();
  select.getFeatures().push (e.feature);
  select.dispatchEvent({ type: 'select', selected: [e.feature] })
  var p = e.feature.getGeometry().getFirstCoordinate();
  map.getView().animate({
    center: p,
    duration: 500
  });
});
