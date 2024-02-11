import Geoportail from 'ol-ext/layer/Geoportail';
import CSSFilter from 'ol-ext/filter/CSS'

import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'


import './index.css'
setInfo(info)
map.getView().setZoom(6)
map.getView().setCenter([242601, 5841416])

/*
Geoportail.register("INSEE.FILOSOFI.POPULATION", {"layer":"INSEE.FILOSOFI.POPULATION","theme":"economie","desc":"Nombre d'individus par km²","server":"https://data.geopf.fr/wmts","bbox":[-63.3725,-21.4756,55.9259,51.3121],"format":"image/png","minZoom":6,"maxZoom":16,"originators":{"Geoservices":{"attribution":"Géoservices","href":"https://geoservices.ign.fr/"}},"queryable":true,"style":"INSEE","tilematrix":"PM","title":"Densité de population","legend":["https://data.geopf.fr/annexes/ressources/legendes/INSEE.FILOSOFI.POPULATION-tot-legend-2017.png"]});
const backLayer = new Geoportail({
  layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
  opacity: .2
})
backLayer.addFilter(new CSSFilter({ filter: 'grayscale(1)' }))
map.addLayer(backLayer)
*/

Geoportail.register("INSEE.FILOSOFI.LOGEMENTS.SURFACE.MOYENNE.SECRET", {"layer":"INSEE.FILOSOFI.LOGEMENTS.SURFACE.MOYENNE.SECRET","theme":"economie","desc":"Surface moyenne des logements (les cases hachurées correspondent aux données secrétisées)","server":"https://data.geopf.fr/wmts","bbox":[-63.3725,-21.4756,55.9259,51.3121],"format":"image/png","minZoom":6,"maxZoom":16,"originators":{"Geoservices":{"attribution":"Géoservices","href":"https://geoservices.ign.fr/"}},"queryable":true,"style":"INSEE","tilematrix":"PM","title":"Surface moyenne des logements (secret signalé)","legend":["https://data.geopf.fr/annexes/ressources/legendes/INSEE.FILOSOFI.LOGEMENTS.SURFACE.MOYENNE-tot-legend-2017.png"]});

const lego = new Geoportail({ 
  className: 'lego',
  layer: 'INSEE.FILOSOFI.LOGEMENTS.SURFACE.MOYENNE.SECRET',
});
lego.getSource().setAttributions(['&copy; INSEE'])
map.addLayer(lego)


import Lego from 'ol-ext/filter/Lego'
var filter = new Lego({ brickSize: 16 });
lego.addFilter(filter);

lego.addFilter(new CSSFilter({ blend: 'multiply' }));


// Show information on click (getFeatureInfo)
import Popup from 'ol-ext/overlay/Popup'
import ol_ext_element from 'ol-ext/util/element.js';
var popup = new Popup({ anim: true });
window.popup = popup
map.addOverlay(popup);
map.on('click', function(e) {
  lego.getSource().getFeatureInfo(
    e.coordinate, 
    map.getView().getResolution(), {
      INFO_FORMAT: 'text/html', // 'application/json',
      callback: function(resp) {
        popup.hide()
        if (resp) {
          const d = ol_ext_element.create('DIV', { html: resp })
          if (d.querySelector('div')) {
            popup.show(e.coordinate, resp);
          }
        }
      }
    }
  );
})
