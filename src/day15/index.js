import Geoportail from 'ol-ext/layer/Geoportail.js'
import CSSFilter from 'ol-ext/filter/CSS'

import map from '../common/map.js'
import setInfo from '../common/setInfo.js'

import info from './page-info.html'
import './index.css'
import TileWFS from 'ol-ext/source/TileWFS'
import VectorLayer from 'ol/layer/VectorImage'
import Style from 'ol/style/Style.js'
import Fill from 'ol/style/Fill.js'
import Hover from 'ol-ext/interaction/Hover.js'
import Popup from 'ol-ext/overlay/Popup'
import ProgressBar from 'ol-ext/control/ProgressBar'

setInfo(info)

map.getView().setZoom(13)
map.getView().setCenter([538143, 5945936])

const backLayer = new Geoportail({ 
  layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
})
map.addLayer(backLayer)

// Add layer 
Geoportail.register("Aire-Parcellaire", {"layer":"Aire-Parcellaire","theme":"parcellaire","desc":"Selon les règlements européens n°110/2008 du 15 janvier 2008, n°1151/2012 du 21 novembre 2012 et n°1308/2013 de l’OCM , le cahier des charges des appellations définit l’aire géographique. Le terme de « délimitation parcellaire » désigne une aire qui repose sur les limites administratives du cadastre (les parcelles) et dont le maillage suffisamment fin permet de tenir compte de variations très localisées des éléments du milieu physique. Elle correspond à l'aire de production de la matière première. Elle est incluse dans l'aire géographique. Données produites par l'Institut National des Origines et la Qualité (INAO)","server":"https://data.geopf.fr/wmts","bbox":[-5.15047,41.3252,9.57054,51.0991],"format":"image/png","minZoom":0,"maxZoom":18,"originators":{"Geoservices":{"attribution":"Géoservices","href":"https://geoservices.ign.fr/"}},"queryable":false,"style":"normal","tilematrix":"PM","title":"Délimitation parcellaire AOC viticole","legend":["https://data.geopf.fr/annexes/ressources/legendes/LEGEND.jpg"]});
const wmtsLayer = new Geoportail({ 
  layer: 'Aire-Parcellaire',
  className: 'AOC',
  maxZoom: 12
});
map.addLayer(wmtsLayer)
wmtsLayer.addFilter(new CSSFilter({ blend: 'multiply' }));

const layer = new VectorLayer({
  className: 'AOC',
  source: new TileWFS({
    url: 'https://wxs.ign.fr/parcellaire/geoportail/wfs',
    // url: 'https://data.geopf.fr/wfs/ows',
    typeName: 'AOC-VITICOLES:aire_parcellaire',
    tileZoom: 12
  }),
  minZoom: 12,
  style: new Style({
    fill: new Fill({
      color: [192,92,92]
    })
  })
})
setTimeout(() => map.addLayer(layer), 1000)

const hover = new Hover({ cursor: 'pointer', layers: [layer] });

const popup = new Popup({
  positioning: 'bottom-center'
})
map.addOverlay(popup)

map.addInteraction(hover);
hover.on('leave', () => {
  popup.hide()
});

hover.on('hover', e => {
  const f = e.feature
  if (f) {
    /*
    let info = '<div class="img"></div><b>nomcom</b>app (dt - crinao)';
    ['nomcom', 'app', 'crinao','dt'].forEach(c => {
      info = info.replace(c, f.get(c))
    })
    */
    let info = '<div class="img"></div><b>denom</b> crinao';
    ['denom', 'crinao'].forEach(c => {
      info = info.replace(c, f.get(c) || '')
    })
    popup.show(e.coordinate, info)
  } else {
    popup.hide()
  }
})

var progress = new ProgressBar({
  // target: $('.options').get(0)
  label: 'Loading...',
  layers: [ layer ]
});
map.addControl(progress);
