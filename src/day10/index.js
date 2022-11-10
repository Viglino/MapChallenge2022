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
import Select from 'ol/interaction/Select'
import Hover from 'ol-ext/interaction/Hover'
import { click } from 'ol/events/condition'

import scribbleFill from 'ol-ext/geom/Scribble'

/* Something get wrong with import?
import multip from 'ol/geom/MultiPolygon'
import multipjs from 'ol/geom/Multipolygon.js'
if (!multip.prototype.scribbleFill) multip.prototype.scribbleFill = multipjs.prototype.scribbleFill
*/

setInfo(info)

/* Calculate scribble style */
function scribbleStyle(feature, resolution) {
  //const colors = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a']
  const colors = [[31,119,180],[174,199,232],[255,127,14],[255,187,120],[44,160,44],[152,223,138],[214,39,40],[255,152,150],[148,103,189],[197,176,213],[140,86,75],[196,156,148],[227,119,194],[247,182,210],[127,127,127],[199,199,199],[188,189,34],[219,219,141],[23,190,207],[158,218,229]];

  const a = Math.random() * Math.PI;
  feature.set('angle', a)
  const color = colors[Math.floor(Math.random() * colors.length)];
  feature.set('color',color)
  // Calculate step according to resolution
  const maxres = 10000;
  const step =  Math.max (8*maxres, 8*resolution);

  // cache scribble geom in the feature to prevent calculating
  const scribble = {
    step: step,
    geom: scribbleFill(feature.getGeometry(), { interval: step, angle: a }) // feature.getGeometry().scribbleFill({ interval: step, angle: a })
  };
  feature._scribble = scribble;
};

function getStyle(feature, resolution) {
  const a = feature.get('angle');
  const color = feature.get('color');

  // Calculate step according to resolution
  const maxres = 10000;
  const step =  Math.max (8*maxres, 8*resolution);
  const width = Math.max (2, 2*maxres/resolution);

  const style = [ 
    new Style({
      stroke: new Stroke({ 
        width: .5, 
        color: color//'rgba(255,0,0,.5)' 
      }),
      fill: new Fill({ color: 'transparent' })
    })
  ]

  // cache scribble geom in the feature to prevent calculating
  let scribble = feature._scribble;
  if (scribble && scribble.step !== step) {
    scribble = {
      step: step,
      geom: scribbleFill(feature.getGeometry(), { interval: step, angle: a }) // feature.getGeometry().scribbleFill({ interval: step, angle: a })
    };
    feature._scribble = scribble;
  }
  if (scribble) {
    style.push(new Style({
      stroke: new Stroke({ 
        width: width, 
        color: color 
      }),
      geometry: scribble.geom
    }));
  }
  
  return style;
}

// Vector layer
var vector = new VectorLayer({
  source: new VectorSource({
    url: 'https://openlayers.org/en/v4.6.5/examples/data/geojson/countries.geojson',
    format: new GeoJSON()
  }),
  style: getStyle
})
map.addLayer(vector);

var filter = new CanvasFilter();
var paperFilter = new PaperFilter({ scale : 2, light: 60 });
filter.addSVGFilter(paperFilter);
vector.addFilter(filter);

// Hover interaction with cursor fill
map.addInteraction(new Hover({
  cursor: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAihJREFUWEftlr/LEnEcx193KTQ89JQEDSKELi03BIbQ1uKQptAQYqtbQtDUIBHV2BCIgejk4B8guuhSBs8YYUGoCEa2nSbR8JCHxsfnDtSyu+qo5b7LHXfv7+f9+r6/P+4UnLUacAk4B2jAsbNu9irFXrJWjIE4cNfU33HYz1ZmB6ACOeAxcAE4DbwD7gEN2+oOBPsAXgHPgPM+n++5YRgCkgRaQB0YAA8d1LeV7AIcAq+BsKIoH0Oh0KGmaWfC4TDFYlGKCcQVs6rrAE+A+4CqqurnWCymNhqNs9FolHa7zXA4JJkU/3UCQzcTkFEfmascRVGWmUzmuF6vHwwGA+LxOOOxrEFotVqbELdt83UgkCkwTN0pueZyuVWlUllPTbVapdvtUqvJLjxpGxDWmnBgs18iRivrdSAQYDqdbqlHoxGRSGTrmZsQWwCaptHr9RyNyC2ILQBxbjabJBKJfwaxC/BWjlqnEOVymXw+/80wjJvmGeEIfFO0C/ACeHoSxK+TKBQKq1Kp9Gk+n98A3vy2s9lBAJaAdSAJwDVA5mAvRDab/drpdN7run4d0P/UXPqJ8UvgKuADLAB59wOEruukUql5v9/vzGazW39jbPW1Ri57L7ADsAURDAZJp9NfJpNJcblcFtwwtxKQ62XzG/ABuLhTfJ2E3+83FotFHii7Zb4JIPePgAd7ilv7Ur6Grja7/wFXzX5WzAPwEvAS8BLwEvAS+O8JfAcOZLAhCzd6QAAAAABJRU5ErkJggg==") 0 13, auto'
}))

// Select
const select = new Select({
  style: getStyle,
  condition: click
});
map.addInteraction(select)
select.on('select', e => {
  e.selected.forEach(feature => {
    scribbleStyle(feature, map.getView().getResolution())
    cancelScribble()
  });
  select.getFeatures().clear();
})

// Auto scribble
function doScribble() {
  const ext = map.getView().calculateExtent()
  const pt = [
    (ext[0] + ext[2]) / 2 + (Math.random() - 0.5) * (ext[2] - ext[0]) / 2 ,
    (ext[1] + ext[3]) / 2 + (Math.random() - 0.5) * (ext[3] - ext[1]) / 2 ,
  ]
  const f = map.getFeaturesAtPixel(map.getPixelFromCoordinate(pt)).pop();
  if (f) {
    scribbleStyle(f, map.getView().getResolution())
  }
  tout = setTimeout(doScribble, Math.random()*2000 + 500)
}
// Cancel next scribble and start a new one
function cancelScribble() {
  clearTimeout(tout)
  tout = setTimeout(doScribble, Math.random()*2000 + 3000)
}
let tout = setTimeout(doScribble, 1000)