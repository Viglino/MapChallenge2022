import Map from 'ol/Map'
import View from 'ol/View';
import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import ol_ext_element from 'ol-ext/util/element';
import {register} from 'ol/proj/proj4';
import proj4 from 'proj4';
import setInfo from '../common/setInfo.js'
import info from './page-info.html'

// Import ol styles
import 'ol/ol.css'
import 'ol-ext/dist/ol-ext.css'

import './flat.css'

setInfo(info);

// WGS 84 / Antarctic Polar Stereographic
proj4.defs("EPSG:3031","+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs +type=crs");
// WGS 84 / Arctic Polar Stereographic
proj4.defs("EPSG:3995","+proj=stere +lat_0=90 +lat_ts=71 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs +type=crs");
// WGS 84 / EPSG Greenland Polar Stereographic
proj4.defs("EPSG:5938","+proj=stere +lat_0=90 +lon_0=-33 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs +type=crs");

register(proj4);

// Create map
const map = new Map({
  view: new View({
    projection: 'EPSG:3995',
    center: [0,0],
    zoom: 3.5,
    minZoom: 2
  }),
  target: ol_ext_element.create('DIV', { 
    className: 'map',
    parent: document.body
  })
})

const backLayer = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
//const backLayer = new ol_layer_Geoportail({ layer: 'ORTHOIMAGERY.ORTHOPHOTOS' })
map.addLayer(backLayer)

/* DEBUG */
window.map = map;
/**/