import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'

import VectorLayer from 'ol/layer/Vector.js'

import map from '../common/map.js'
import dijkstra from './graph.js'
import { popStart, popEnd } from './placemark.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'

import './index.css'

setInfo(info)

const backLayer = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
map.addLayer(backLayer)
map.getView().setZoom(6)
map.getView().setCenter([256551, 5905459])

// The vector graph
map.addLayer(new VectorLayer({
  title: 'Graph',
  source: dijkstra.source
}));

// Manage start / end on click
map.on('click', e => {
  console.log(e, popStart)
  if (!dijkstra.get('start')) {
    dijkstra.set('start', e.coordinate);
    popStart.show(dijkstra.get('start'));
  } else {
    popEnd.show(e.coordinate);
    setTimeout(function() {
      var se = dijkstra.path(dijkstra.get('start'), e.coordinate);
      if (se) {
        dijkstra.set('start', se[0]);
        dijkstra.set('end', se[1]);
      } else {
        popEnd.hide();
      }
    }, 100)
  }
})

