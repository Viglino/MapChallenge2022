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
map.getView().setZoom(12)
map.getView().setCenter([-94031, 5761698])

/** /
const backLayer = new ol_layer_Geoportail({ 
  className: 'back',
  layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
  opacity: .8,
  visible: false
})
map.addLayer(backLayer)
backLayer.addFilter(new CSSFilter({ filter: 'grayscale(1)' }))
import LayerSwitcher from 'ol-ext/control/LayerSwitcher'
map.addControl(new LayerSwitcher)
/**/


const elev = new TileLayer ({
  title: 'MNT-RGE-Alti',
  className: 'elevation',
  extent: [ -7007874.496280316, -1460624.494037931, 5043253.3127169, 6639937.650114076 ],
  minResolution: 0,
  maxResolution: 197231.79878968254,
  source: new TileWMS({
    url: 'https://wxs.ign.fr/altimetrie/geoportail/r/wms',
    projection: 'EPSG:3857',
    attributions: [ 'Geoservices-IGN' ],
    crossOrigin: 'anonymous',
    params: {
      LAYERS: 'ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES',
      //LAYERS: 'ELEVATION.ELEVATIONGRIDCOVERAGE',
      FORMAT: 'image/x-bil;bits=32',
      VERSION: '1.3.0'
    }
  })
});
map.addLayer(elev);
const tints = [
  [44, 126, 190, 255],
  [113,171,216,255],
  [217,242,255],
  [217,242,255],
  [255,255,255]
]
elev.getSource().setTileLoadFunction(elevationMap(z => {
  let t;
  if (z > 0) {
    const dz = z/20
    const i = 0; // dz < .25 ? 0 : 1
    t = [
      tints[i][0] * (1-dz) + tints[i+1][0] * dz,
      tints[i][1] * (1-dz) + tints[i+1][1] * dz,
      tints[i][2] * (1-dz) + tints[i+1][2] * dz,
      255
    ];
  } else {
    t = tints[0];
  }
  return t;
}))


ol_layer_Geoportail.register("ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW", {"key":"altimetrie","server":"https://wxs.ign.fr/geoportail/wmts","layer":"ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW","title":"Estompage","format":"image/png","style":"estompage_grayscale","queryable":false,"tilematrix":"PM","minZoom":0,"maxZoom":18,"bbox":[-63.186966,-21.406914,55.8884,50.9218],"desc":"Couche d'ombrage calculée à partir des données altimétriques de l'IGN permettant de mieux appréhender le relief. L'estompage proposé est réalisé à partir des données MNT BDAlti au pas de 25m avec deux soleils : un au nord-est de hauteur 45°, l'autre zénithal.","originators":{"IGN":{"href":"http://www.ign.fr","attribution":"Institut national de l'information géographique et forestière","logo":"https://wxs.ign.fr/static/logos/IGN/IGN.gif","minZoom":0,"maxZoom":18,"constraint":[{"minZoom":0,"maxZoom":18,"bbox":[-63.186966,-21.406914,55.8884,50.9218]}]}}});
const shadow = new ol_layer_Geoportail({
  title: 'Estompage - by IGN-France',
  className: 'blend',
  layer: 'ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW',
});
/*
// enhance opacity
shadow.getSource().setTileLoadFunction(pixelTransform(function(p, i) {
  p[i+3] *= 2.5;
}));
*/
map.addLayer(shadow);

elev.addFilter(new CSSFilter({ blend:'multiply' }));

