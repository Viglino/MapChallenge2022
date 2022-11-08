import VectorLayer from 'ol/layer/VectorImage'
import VectorSource from 'ol/source/Vector'
import GeoJSON from 'ol/format/GeoJSON.js'

import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'

import './index.css'
import Stroke from 'ol/style/stroke.js'
import Fill from 'ol/style/fill.js'
import Style from 'ol/style/style.js'
import PaperFilter from 'ol-ext/util/SVGFilter/Paper'
import CanvasFilter from 'ol-ext/filter/SVGFilter'

import multip from 'ol/geom/MultiPolygon'
import multipjs from 'ol/geom/Multipolygon.js'
import 'ol-ext/geom/Scribble'
// Something get wrong with import?
if (!multip.prototype.scribbleFill) multip.prototype.scribbleFill = multipjs.prototype.scribbleFill

setInfo(info)


function scribbleStyle(feature, resolution) {
  var colors = ['red','green','blue','cyan','magenta','yellow', 'orange', 'purple', 'GreenYellow'];

  var a = feature.get('angle') || Math.random() * Math.PI;
  feature.set('angle', a)
  var color = feature.get('color') || colors[Math.round(Math.random()*(colors.length-1))];
  feature.set('color',color)
  // Calculate step according to resolution
  var maxres = 10000;
  var step =  Math.max (8*maxres, 8*resolution);
  var width = Math.max (2, 2*maxres/resolution);

  // cache scribble geom in the feature to prevent calculating
  var scribble = feature._scribble;
  if (!scribble || scribble.step !== step) {
    scribble = {
      step: step,
      geom: feature.getGeometry().scribbleFill({ interval: step, angle: a })
    };
    feature._scribble = scribble;
    // console.log('calculating')
  }

  return [ 
    new Style({
      stroke: new Stroke({ 
        width: .5, 
        color: color//'rgba(255,0,0,.5)' 
      }),
      fill: new Fill({ color: 'transparent' })
    }),
    new Style({
      stroke: new Stroke({ 
        width: width, 
        color: color 
      }),
      geometry: scribble.geom
    })
  ];
};

// Vector layer
var vector = new VectorLayer({
  source: new VectorSource({
      url: 'https://openlayers.org/en/v4.6.5/examples/data/geojson/countries.geojson',
      format: new GeoJSON()
    }),
  style: scribbleStyle
})
map.addLayer(vector);

var filter = new CanvasFilter();
var paperFilter = new PaperFilter({ scale : 2, light: 60 });
filter.addSVGFilter(paperFilter);
vector.addFilter(filter);
