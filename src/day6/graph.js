import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector.js'
import GeoJSON from 'ol/format/GeoJSON'
import Style from 'ol/style/Style.js'
import Stroke from 'ol/style/Stroke.js'
import Circle from 'ol/style/Circle'
import Fill from 'ol/style/Fill.js'
import { getLength } from 'ol/sphere'

import ol_control_Notification from 'ol-ext/control/Notification'
import Dijskra from 'ol-ext/geom/Dijkstra'

import map from '../common/map'
import { popStart, popEnd } from './placemark.js'

const notif = new ol_control_Notification()
map.addControl(notif)

notif.show('Click two points on the map...', 1E10)

const graph = new VectorSource({
  url: 'https://viglino.github.io/ol-ext/examples/data/ROUTE120.geojson',
  format: new GeoJSON()
});

// Dijkstra
var dijkstra = new Dijskra({
  source: graph
});

// Speed limits / road category
const speed = { 
  A: 1 / 120, 
  P: 1 / 80, 
  R: 1 / 70, 
  L: 1 / 60
};

// Get the weight of an edge
dijkstra.weight = function(feature) {
  var type = feature ? feature.get('type') : 'A';
  if (!speed[type]) console.error(type)
  return speed[type] || speed.L;
};
// Get direction of the edge
dijkstra.direction = function(feature) {
  return feature.get('dir');
}
// Get the real length of the geom
dijkstra.getLength = function(geom) {
  if (geom.getGeometry) {
    //? return geom.get('km')*1000;
    geom = geom.getGeometry();
  }
  return getLength(geom)
}

// Display nodes in a layer
var nodes = new VectorLayer({
  title: 'Nodes',
  source: dijkstra.getNodeSource(),
  style: new Style({
    image: new Circle({
      radius: 5,
      fill: new Fill({ color: [255,0,0,.1] })
    })
  })
});
setTimeout(() => map.addLayer(nodes))

// A layer to draw the result
const result = new VectorSource();
setTimeout(() => {
  map.addLayer (new VectorLayer({
    source: result,
    style: new Style({ 
      stroke: new Stroke({ 
        width: 2,
        color: "#f00"
      }) 
    })
  }));
})

// Paused > resume
dijkstra.on('pause', function(e) {
  if (e.overflow) {
    dijkstra.resume();
  } else {
    // User pause
  }
});

// Start processing
dijkstra.on('start', function(e) {
  notif.show('Calculating...', 1E10)
  result.clear();
});
// Finish > show the route
dijkstra.on('finish', function(e) {
  notif.hide();
  result.clear();
  console.log(e);
  if (!e.route.length) {
    if (e.wDistance === -1) notif.show('No route found...');
    else notif.show('No route found...');
  } else {
    var t = (e.distance/1000).toFixed(2) + ' km';
    // Weighted distance
    var h = e.wDistance / 1000;
    var mn = Math.round((e.wDistance%1000)/1000*60);
    if (mn < 10) mn = '0'+mn;
    t += '<br/>' + h.toFixed(0) + ' h ' + mn + ' mn';
    notif.show(t, 10000);
  }
  result.addFeatures(e.route);
  dijkstra.set('start', dijkstra.get('end'));
  popStart.show(dijkstra.get('start'));
  popEnd.hide();
});

export default dijkstra