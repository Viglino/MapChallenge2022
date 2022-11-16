import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import Fill from 'ol/style/Fill.js'
import HexBin from 'ol-ext/source/HexBin'

import GeoJSONX from 'ol-ext/format/GeoJSONX'
import VectorImageLayer from 'ol/layer/VectorImage'
import VectorSource from 'ol/source/Vector.js'

import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'

import './index.css'
import Style from 'ol/style/Style.js'
setInfo(info)

map.getView().setZoom(6)
map.getView().setCenter([253080, 5857122])

const backLayer = new ol_layer_Geoportail({ 
  layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
  opacity: .8
})
map.addLayer(backLayer)

const styleCache = [];
function getStyle(pop) {
  pop = Math.round(pop/100)
  if (!styleCache[pop]) {
    let d = Math.min(1, pop/300);
    d = Math.pow(Math.sin(d * Math.PI / 2), .5)
    if (d < .25) {
      // Blue > yellow
      d *= 4
      console.log(d)
      styleCache[pop] = new Style({
        fill: new Fill({ color: [
          180 * (1-d) + 255 * d,
          180 * (1-d) + 255 * d,
          200 * (1-d) + 220 * d,
          1 // d + .3
        ]})
      })
    } else {
      // Yellow > red
      d = (d - .25) * 4 / 3
      styleCache[pop] = new Style({
        fill: new Fill({ color: [
          255 * (1-d) + 128 * d,
          255 * (1-d) + 0 * d,
          220 * (1-d) + 25 * d,
        ]})
      })
    }
  }
  return styleCache[pop]
}

// Kontur source
const source = new VectorSource({
  /*
  url: 'https://viglino.github.io/maps/static/kontur-pop/france.geojsonx',
  format: new GeoJSONX(),
  */
  attributions: [ "<a href='https://data.humdata.org/dataset/kontur-population-dataset'>Kontur &copy; CC-By-SA</a>" ],
})

const kontur = new VectorImageLayer ({
  className: 'kontur',
  style: f => {
    return getStyle(f.get('population'))
  },
  minZoom: 10
});
map.addLayer(kontur)

// Load data
document.body.classList.add('loading')
fetch('https://viglino.github.io/maps/static/kontur-pop/france.geojsonx')
  .then(response => response.text()) 
  .then(geojs => {
    const parser = new GeoJSONX()
    const features = parser.readFeatures(geojs, {
      featureProjection: map.getView().getProjection()
    });
    source.addFeatures(features)
    kontur.setSource(source)
    document.body.classList.remove('loading')
  });

// Bin layer at smaller zoom level
const hexbin = new HexBin({
  source: source,		// source of the bin
  size: 5000,			  // hexagon size (in map unit)
  maxZoom: 10
});

const binLayer = new VectorImageLayer({ 
  title: 'Bin',
  className: 'bin',
  source: hexbin, 
  style: feature => {
    let pop = 0;
    feature.get('features').forEach(f => {
      pop += f.get('population')
    })
    pop /= feature.get('features').length
    return getStyle(pop);
  },
  maxZoom: 10
});
// binLayer.addFilter(new CSSFilter({ blend: 'multiply' }));
map.addLayer(binLayer)

// Popup
import Hover from 'ol-ext/interaction/Hover'
import Popup from 'ol-ext/overlay/Popup'

const popup = new Popup({
  positioning: 'bottom-center'
})
map.addOverlay(popup)
const hover = new Hover ({
  cursor: 'pointer',
  hitTolerance: 2
})

hover.on('leave', () => {
  popup.hide()
});

hover.on('hover', e => {
  const f = e.feature
  if (f) {
    const pop = f.get('population') ||f.get('features')[0].get('population');
    popup.show(e.coordinate, 'pop: ' + pop)
  } else {
    popup.hide()
  }
})
map.addInteraction(hover)