import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'

import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import GeoJSON from 'ol/format/GeoJSON'

import './index.css'
setInfo(info)
map.getView().setCenter([-419446, 4173494])

const backLayer = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
map.addLayer(backLayer)

// Vector layer
var vector = new VectorLayer({
  source: new VectorSource({
    url: './30day.geojson',
    format: new GeoJSON()
  }),
})
map.addLayer(vector);



import Imageline from 'ol-ext/control/Imageline'
// Create Imageline control when features are loaded
const iline = new Imageline({
  source: vector.getSource(),
  hover: true,
  linkColor: '#ff0',
  getImage: function(f) {
    return './day' + f.get('day') + '.png';
  },
  getTitle: function(f) {
    return f.get('title');
  }
});
map.addControl (iline);

// Refresh on load
vector.getSource().on('change', function(e) {
  if (vector.getSource().getState() == 'ready') {
    iline.refresh();
  }
});

// Click on an image
iline.on('select', function(e){
  /*
  map.getView().animate({
    center: e.feature.getGeometry().getFirstCoordinate(),
    zoom: Math.round(8 + Math.random())
  });
  */
  setTimeout(() => {
    select.getFeatures().clear();
    select.getFeatures().push(e.feature);
  })
  window.open('./day' + e.feature.get('day') + '.html', 'day')
});

import Select from 'ol/interaction/Select'
import { click } from 'ol/events/condition'
// Select
const select = new Select({ hitTolerance: 5, condition: click });
map.addInteraction(select);
select.on('select', function(e){
  var f = e.selected[0];
  iline.select(f);
});
