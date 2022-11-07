import Geoportail from 'ol-ext/layer/Geoportail'
import ColorFilter from 'ol-ext/filter/Colorize'

import Delaunay from 'ol-ext/source/Delaunay'

import ZoomAnimation from 'ol-ext/featureanimation/Zoom'
import { ol_featureAnimation_ZoomOut as ZoomOutAnimation } from 'ol-ext/featureanimation/Zoom'
import BlinkAnimation from 'ol-ext/featureanimation/Blink'
import { easeIn, easeOut, linear } from 'ol/easing'

import map from '../common/map.js'
import { styles, lineStyle, circleRedStyle, styleKey } from './styleFn.js'
import setInfo from '../common/setInfo.js'

import info from './page-info.html'
import './index.css'
import VectorSource from 'ol/source/vector.js'
import VectorLayer from 'ol/layer/vector.js'
import { Feature } from 'ol'
import Point from 'ol/geom/point.js'

import { permalink }from '../common/map'

setInfo(info)
permalink.setUrlReplace(false)

const backLayer = new Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
backLayer.addFilter(new ColorFilter({
  operation: 'difference', 
  color: [255,192,128]
}))
map.addLayer(backLayer)
map.getView().setZoom(16)
map.getView().setCenter([636860, 5651388])

// Node source
var nodes = new VectorSource();
nodes.on('addfeature', function(e) {
  e.feature.set('style', styleKey[Math.floor(Math.random() * styleKey.length)]);
});
var vector = new VectorLayer({
  name: 'vector',
  source: nodes,
  style: function(f) {
    return styles[f.get('style')];
  }
});

// Delaunay source based on the node source
var delaunay = new Delaunay({
  source: nodes
});
var triangle = new VectorLayer({
  name: 'triangle',
  source: delaunay,
  style: function() { return lineStyle }
});

// Add to map
map.addLayer(triangle);
map.addLayer(vector);

// Animation on add feature
vector.getSource().on('addfeature', function(e) {
  vector.animateFeature (e.feature, new ZoomAnimation({
    duration: 500, 
    easing: easeIn
  }));
  var f = new Feature (e.feature.getGeometry().clone());
  f.setStyle(circleRedStyle);
  vector.animateFeature (f, new ZoomOutAnimation({
    fade: easeOut, 
    duration: 1500, 
    easing: linear
  }));
});
triangle.getSource().on('addfeature', function(e) {
  triangle.animateFeature (e.feature, new BlinkAnimation({
    nb: 15,
    duration: 2000, 
    easing: easeIn
  }));
});

let nb = 1
function addFeature() {
  const ext = map.getView().calculateExtent()
  const pt = [
    (ext[0] + ext[2]) / 2 + (Math.random() - 0.5) * (ext[2] - ext[0]) / 4 ,
    (ext[1] + ext[3]) / 2 + (Math.random() - 0.5) * (ext[3] - ext[1]) / 4 ,
  ]
  const f = new Feature(new Point(pt))
  // 
  nodes.addFeature(f);
  console.log(nb)
  if (++nb > 3) {
    map.getView().animate({
      center: pt,
      zoom: Math.min(18, Math.max(14, map.getView().getZoom() + Math.random() - .5))
    })
    setTimeout(addFeature, Math.random()*2000 + 2000)
  } else  {
    setTimeout(addFeature, 500)
  }
}

setTimeout(addFeature, 500)