import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import { elevationMap, pixelTransform } from 'ol-ext/util/imagesLoader'
import TileWMS from 'ol/source/TileWMS'
import CSSFilter from 'ol-ext/filter/CSS'

import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'

import './index.css'
import TileLayer from 'ol/layer/Tile.js'

setInfo(info)
map.getView().setMaxZoom(12)
map.getView().setZoom(7.6)
map.getView().setCenter([8494, 6248012])

const backLayer = new ol_layer_Geoportail({ 
  layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
})
map.addLayer(backLayer)

const elev = new TileLayer ({
  title: 'MNT-SRTM3',
  className: 'elevation',
  minResolution: 0,
  maxResolution: 197231.79878968254,
  source: new TileWMS({
    url: 'https://wxs.ign.fr/altimetrie/geoportail/r/wms',
    projection: 'EPSG:3857',
    attributions: [ 'Geoservices-IGN' ],
    crossOrigin: 'anonymous',
    params: {
      //LAYERS: 'ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES',
      LAYERS: 'ELEVATION.ELEVATIONGRIDCOVERAGE.SRTM3',
      FORMAT: 'image/x-bil;bits=32',
      VERSION: '1.3.0'
    }
  })
});
map.addLayer(elev);

const setElevation = function(val) {
  elev.getSource().setTileLoadFunction(elevationMap(z => {
    if (z > val) {
      return [44, 126, 190, 0]
    } else if (z > val - 3) {
      return [44, 126, 190, 255 * (val-z) / 3]
    } else {
      return [44, 126, 190, 255]
    }
  }))
}
setElevation(120)

document.querySelector('input').addEventListener('change', e => {
  setElevation(parseInt(e.target.value))
})

/*
const shadow = new TileLayer ({
	"title": "SRTM30 Hillshade - by terrestris",
  className: 'hillshade',
  opacity: .4,
	"extent": [
		-20037508.342789244,
		-7558415.656081782,
		20037508.342789244,
		8399737.889818361
	],
	"queryable": false,
	"minResolution": 0,
	"maxResolution": 156543.03392804097,
	"source": new TileWMS({
		"url": "https://ows.mundialis.de/osm/service?",
		"projection": "EPSG:3857",
		"attributions": ['&copy; terrestris'],
		"crossOrigin": "anonymous",
		"params": {
			"LAYERS": "SRTM30-Hillshade",
			"FORMAT": "image/png",
			"VERSION": "1.3.0"
		}
	})
});
map.addLayer(shadow);

elev.addFilter(new CSSFilter({ blend:'multiply' }));
*/
