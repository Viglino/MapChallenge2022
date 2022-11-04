import VectorImageLayer from 'ol/layer/VectorImage.js'
import VectorSource from 'ol/source/Vector.js'
import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import GeoJSON from 'ol/format/GeoJSON.js'
import FlowLine from 'ol-ext/style/FlowLine'

import map from '../common/map.js'

import setInfo from '../common/setInfo.js'

import info from './page-info.html'
import './index.css'
import { unByKey } from 'ol/Observable.js'
import ol_ext_Ajax from 'ol-ext/util/Ajax.js'
import ol_interaction_Hover from 'ol-ext/interaction/Hover.js'
import Feature from 'ol/Feature'
import { LineString } from 'ol/geom.js'

setInfo(info)

const backLayer = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
map.addLayer(backLayer)
map.getView().setMinZoom(6)
map.getView().setCenter([251333, 5895217])

const dep = new VectorImageLayer ({ 
  source: new VectorSource({
    url: 'https://viglino.github.io/ol-ext/examples/data/departements.geojson',
    format: new GeoJSON(),
    attributions: [ "&copy; <a href='https://www.insee.fr'>INSEE</a>", "&copy; <a href='https://www.data.gouv.fr/fr/datasets/geofla-r/'>IGN</a>" ],
  })
});
map.addLayer(dep);

// Read Data
const flowData = {};
// Event handlers when source is ready
const listener = dep.getSource().on('change',function(e) {
  unByKey(listener)
  if (dep.getSource().getState() === 'ready') {
    let sel;
    dep.getSource().getFeatures().forEach(function (f) {
      let p, g = f.getGeometry();
      if (f.get('id')==='41') sel = f;
      if (g.getInteriorPoint) {
        p = g.getInteriorPoint().getFirstCoordinate();
      } else {
        var max = 0;
        g.getPolygons().forEach(function(poly) {
          var a = poly.getArea();
          if (max<a) {
            max = a;
            p = poly.getInteriorPoint().getFirstCoordinate();
          }
        });
      }
      flowData[f.get('id')] = {
        xy: p,
        data: []
      };
    })
    ol_ext_Ajax.get({
      url: 'https://viglino.github.io/ol-ext/examples/data/mobilite-2017.csv',
      dataType: 'CSV',
      success: function (data) {
        data = data.split('\n');
        data.shift();
        data.forEach(function(l) {
          l = l.split(',');
          if (flowData[l[0]] && flowData[l[1]]) {
            flowData[l[0]].data.push ({
              dep: l[1],
              xy: flowData[l[1]].xy,
              flow: parseInt(l[2])
            });
          }
        })
      }
    });
    setTimeout(function() {
//      select.dispatchEvent({ type:'select', selected:[sel] })
    }, 0);
  }
});

// Flow style
var done = false;
function getStyle(feature, res) {
  return new FlowLine({
    color: 'red',
    color2: 'yellow',
    width: 2,
    width2: feature.get('flow'),
    offset0: 10,
    arrow: 1,
    //geometry: feature.getGeometry(),
    zIndex: -(feature.getGeometry().getLastCoordinate()[1])
  });
}

// Nouvelle source de donnee
const flow = new VectorImageLayer({
  source: new VectorSource(),
  style: getStyle
})
map.addLayer(flow);

var hover = new ol_interaction_Hover({ cursor: 'pointer', layers: [dep] });
map.addInteraction(hover);
hover.on('enter', function(e) {
  const f = e.feature;
  flow.getSource().clear();
  if (f) {
    const id = f.get('id');
    const dep = flowData[id]
    dep.data.forEach(function(d) {
      if (d.flow > 300 && d.dep !== id) {
        const l = new Feature(new LineString([dep.xy, d.xy]))
        l.set('flow', Math.max(2, Math.min(30, d.flow/300)));
        l.set('flux', d.flow.toLocaleString());
        flow.getSource().addFeature(l);
      }
    });
  }
});
hover.on('leave', function(e) {
  flow.getSource().clear();
});
