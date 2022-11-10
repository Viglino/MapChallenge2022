import VectorImageLayer from 'ol/layer/VectorImage.js'
import VectorSource from 'ol/source/Vector.js'
import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import GeoJSON from 'ol/format/GeoJSON.js'
import HexBin from 'ol-ext/source/HexBin'
import VectorLayer from 'ol/layer/Vector'
import Style from 'ol/style/Style'
import Fill from 'ol/style/Fill'
import CSSFilter from 'ol-ext/filter/CSS'
import ModifyInteraction from 'ol/interaction/Modify'
import Hover from 'ol-ext/interaction/Hover'

import map from '../common/map.js'
import setInfo from '../common/setInfo.js'

import info from './page-info.html'
import './index.css'

setInfo(info)
map.getView().setZoom(13)
map.getView().setCenter([259982, 6250835])

const backLayer = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
map.addLayer(backLayer)

const photo = new VectorImageLayer ({ 
  source: new VectorSource({
    url: './paris-photo.geojson',
    format: new GeoJSON(),
    attributions: [ "<a href='https://twitter.com/search?q=paris%20autrefois%20%28from%3ASamuelMartin75%29&src=typed_query&f=live'>@SamuelMartin</a>" ],
  })
});

// Bin source
const hexbin = new HexBin({
  source: photo.getSource(),		// source of the bin
  size: 500			  // hexagon size (in map unit)
});

// Bin layer
const binLayer = new VectorLayer({ 
  title: 'Bin',
  className: 'bin',
  source: hexbin, 
  style: (feature) => {
    const nb = feature.get('features').length
    // const color = (nb > 5) ? [255,0,0] : nb > 2 ? 'orange' : [0,255,0]
    const color = [0,170,255, (nb/10 + .11)]
    return new Style({
      fill: new Fill({
        color: color
      })
    })
  }
});
binLayer.addFilter(new CSSFilter({ blend: 'multiply' }));

map.addLayer(binLayer)
map.addLayer(photo);

// Move interaction + hover cursor
const modify = new ModifyInteraction({ source: hexbin.getSource() });
map.addInteraction(modify);

map.addInteraction(new Hover({
  layers: [photo],
  cursor: 'move'
}));
