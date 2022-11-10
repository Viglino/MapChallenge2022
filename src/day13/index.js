import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver'

import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import map from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'
import CanvasScaleLine from 'ol-ext/control/CanvasScaleLine'
import CanvasAttribution from 'ol-ext/control/CanvasAttribution'
import LayerSwitcher from 'ol-ext/control/LayerSwitcher'
import PrintDialog from 'ol-ext/control/PrintDialog'

import './index.css'
setInfo(info)
map.getView().setZoom(9)
map.getView().setCenter([-323699, 6074344])

const mapLayer = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
map.addLayer(mapLayer)

const photoLayer = new ol_layer_Geoportail({ layer: 'ORTHOIMAGERY.ORTHOPHOTOS' })
map.addLayer(photoLayer)

const roadLayer = new ol_layer_Geoportail({ layer: 'TRANSPORTNETWORKS.ROADS' })
map.addLayer(roadLayer)

map.addControl(new CanvasScaleLine)
map.addControl(new CanvasAttribution({ canvas: true }))
map.addControl(new LayerSwitcher)

const printControl = new PrintDialog
printControl.setSize('A4');
map.addControl(printControl)

/* On print > save image file */
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
      pdf.save(e.print.legend ? 'legend.pdf' : 'map.pdf');
    } else  {
      // Save image as file
      e.canvas.toBlob(function(blob) {
        var name = (e.print.legend ? 'legend.' : 'map.')+e.imageType.replace('image/','');
        saveAs(blob, name);
      }, e.imageType, e.quality);
    }
  } else {
    console.warn('No canvas to export');
  }
});
