// Import ol styles
import 'ol/ol.css'
import 'ol-ext/dist/ol-ext.css'

import Map from 'ol/Map'
import View from 'ol/View'
import ol_ext_element from 'ol-ext/util/element'
import Permalink from 'ol-ext/control/Permalink'

import './style.css'

// Create map
const map = new Map({
  view: new View({
    center: [0,0],
    zoom: 1
  }),
  target: ol_ext_element.create('DIV', { 
    className: 'map',
    parent: document.body
  })
})
setTimeout(() => {
  map.addControl(new Permalink({ visible: false }))
})

/* DEBUG */
window.map = map
/**/

export default map