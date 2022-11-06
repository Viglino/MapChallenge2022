import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import ol_control_Notification from 'ol-ext/control/Notification'

import VectorLayer from 'ol/layer/Vector.js'
import VectorSource from 'ol/source/Vector.js'
import GeoJSON from 'ol/format/GeoJSON'
import Style from 'ol/style/Style.js'
import Stroke from 'ol/style/Stroke.js'
import Circle from 'ol/style/Circle'
import Fill from 'ol/style/Fill.js'
import { getLength } from 'ol/sphere'

import Dijskra from 'ol-ext/geom/Dijkstra'
import Placemark from 'ol-ext/overlay/Placemark'

import map from '../common/map.js'
import setInfo from '../common/setInfo.js'
import info from './page-info.html'


import './index.css'

setInfo(info)

const notif = new ol_control_Notification()
map.addControl(notif)

const backLayer = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
map.addLayer(backLayer)
map.getView().setZoom(6)
map.getView().setCenter([256551, 5905459])

// The vector graph
const graph = new VectorSource({
  url: 'https://viglino.github.io/ol-ext/examples/data/ROUTE120.geojson',
  format: new GeoJSON()
});
const vector = new VectorLayer({
  title: 'Graph',
  source: graph
});
map.addLayer(vector);


// A layer to draw the result
const result = new VectorSource();
map.addLayer ( new VectorLayer({
  source: result,
  style: new Style({ 
    stroke: new Stroke({ 
      width: 2,
      color: "#f00"
    }) 
  })
}));

// Dijkstra
var dijkstra = new Dijskra({
  source: graph
});

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
  notif.show('Calculating...', Infinity)
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
    var t = (e.distance/1000).toFixed(2) + 'km';
    // Weighted distance
    var h = e.wDistance / 1000;
    var mn = Math.round((e.wDistance%1000)/1000*60);
    if (mn < 10) mn = '0'+mn;
    t += '<br/>' + h.toFixed(0) + 'h ' + mn + 'mn';
    notif.show(t, 10000);
  }
  result.addFeatures(e.route);
  start = end;
  popStart.show(start);
  popEnd.hide();
});

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
map.addLayer(nodes);

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

// Start / end Placemark
const popStart = new Placemark({ popupClass: 'flagv', color: '#080' });
map.addOverlay(popStart);
const popEnd = new Placemark({ popupClass: 'flag finish', color: '#000' });
map.addOverlay(popEnd);

// Manage start / end on click
let start, end;
map.on('click', function(e) {
  if (!start) {
    start = e.coordinate;
    popStart.show(start);
  } else {
    popEnd.show(e.coordinate);
    setTimeout(function() {
      var se = dijkstra.path(start, e.coordinate);
      if (se) {
        start = se[0];
        end = se[1];
      } else {
        popEnd.hide();
      }
    }, 100)
  }
});

