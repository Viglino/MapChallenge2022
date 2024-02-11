import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver'

import Geoportail from 'ol-ext/layer/Geoportail.js'
import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'
import CanvasAttribution from 'ol-ext/control/CanvasAttribution'
import LayerSwitcher from 'ol-ext/control/LayerSwitcher'
import PrintDialog from 'ol-ext/control/PrintDialog'

import './index.css'
setInfo(info)
map.getView().setZoom(17)
map.getView().setCenter([592898, 5354640])

/* A set of layers */
// @see https://viglino.github.io/ol-ext/examples/layer/map.geoportail.wmts.html
const mapLayer = new Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
map.addLayer(mapLayer)

const photoLayer = new Geoportail({ layer: 'ORTHOIMAGERY.ORTHOPHOTOS' })
map.addLayer(photoLayer)

const roadLayer = new Geoportail({ layer: 'TRANSPORTNETWORKS.ROADS' })
map.addLayer(roadLayer)

Geoportail.register("GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40", {"layer":"GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40","theme":"cartes","desc":"Carte française en couleurs du XIXè siècle en couleurs superposable aux cartes et données modernes.","server":"https://data.geopf.fr/wmts","bbox":[-6.08889,41.1844,10.961,51.2745],"format":"image/jpeg","minZoom":6,"maxZoom":15,"originators":{"Geoservices":{"attribution":"Géoservices","href":"https://geoservices.ign.fr/"}},"queryable":false,"style":"normal","tilematrix":"PM","title":"Carte de l'état-major (1820-1866)","legend":["https://data.geopf.fr/annexes/ressources/legendes/LEGEND.jpg"]});
const oldLayer = new Geoportail({ 
  layer: 'GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40',
  visible: false
});
map.addLayer(oldLayer)

map.addControl(new CanvasAttribution({ canvas: true }))
map.addControl(new LayerSwitcher)

const printControl = new PrintDialog
printControl.setSize('A4');
map.addControl(printControl)

/* On print > save image to file */
printControl.on(['print', 'error'], function(e) {
  // Print success
  if (e.image) {
    if (e.pdf) {
      // Export pdf using the print info
      var pdf = new jsPDF({
        orientation: e.print.orientation,
        unit: e.print.unit,
        format: e.print.size
      });
      pdf.addImage(e.image, 'JPEG', e.print.position[0], e.print.position[0], e.print.imageWidth, e.print.imageHeight);
      pdf.save('map.pdf');
    } else  {
      // Save image as file
      e.canvas.toBlob(function(blob) {
        saveAs(blob, 'map.' + e.imageType.replace('image/',''));
      }, e.imageType, e.quality);
    }
  }
});
