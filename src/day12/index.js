import ol_layer_Geoportail from 'ol-ext/layer/Geoportail.js'
import GeoImage from 'ol-ext/layer/GeoImage'
import GeoImageSource from 'ol-ext/source/GeoImage'
import { fromExtent } from 'ol/geom/Polygon.js'
import { boundingExtent } from 'ol/extent.js'
import VectorLayer from 'ol/layer/Vector.js'
import VectorSource from 'ol/source/Vector.js'
import Feature from 'ol/Feature'
import Transform from 'ol-ext/interaction/Transform'
import { ol_coordinate_dist2d } from 'ol-ext/geom/GeomUtils'
import Style from 'ol/style/Style'
import Fill from 'ol/style/Fill'

import map, { permalink } from '../common/map.js'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'

import './index.css'


setInfo(info)
permalink.setUrlReplace(false)

const backLayer = new ol_layer_Geoportail({ layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2' })
map.addLayer(backLayer)
map.getView().setZoom(14)
map.getView().setCenter([274764, 6243935])


const geoimg = new GeoImage({
  name: "Georef",
  opacity: 1,
  source: new GeoImageSource({
    url: 'https://viglino.github.io/ol-ext/examples/data/IGNF_PVA_1-0__1976-03-24_pt.jpg',
    imageCenter: [274764.75, 6243935.64],
    imageScale: [0.589, 0.597],
    imageRotate: 7.44 * Math.PI / 180,
    projection: 'EPSG:3857',
    attributions: [ "<a href='http://www.geoportail.gouv.fr/actualite/181/telechargez-les-cartes-et-photographies-aeriennes-historiques'>Photo historique &copy; IGN</a>" ]
  })
});
map.addLayer(geoimg);

const road = new ol_layer_Geoportail({ 
  layer: 'TRANSPORTNETWORKS.ROADS',
  opacity: .3
})
map.addLayer(road)


geoimg.getSource().getPolygon = function() {
  var center = this.getCenter();
  var scale = this.getScale();
  var width = this.getGeoImage().width * scale[0];
  var height = this.getGeoImage().height * scale[1];
  var p1 = [center[0] - width / 2, center[1] - height / 2];
  var p2 = [center[0] + width / 2, center[1] + height / 2];
  var extent = boundingExtent([p1, p2]);
  var polygon = fromExtent(extent);
  // The resulting polygon
  polygon.rotate(-this.getRotation(), center);
  return polygon;
}

const vector = new VectorLayer({
  source: new VectorSource,
  style: new Style({
    fill: new Fill({ 
      color: 'rgba(0,0,0,0)' 
    })
  })
})
map.addLayer(vector)

const poly = new Feature(geoimg.getSource().getPolygon())
vector.getSource().addFeature(poly)
geoimg.getSource().getGeoImage().addEventListener('load', () => {
  const p = new Feature(geoimg.getSource().getPolygon())
  poly.setGeometry(p.getGeometry())
})

const transform = new Transform({
  selection: false,
  stretch: false,
  keepRectangle: true
})
map.addInteraction(transform)
transform.select(poly, true)

let angle;
transform.on('rotatestart', e => {
  angle = geoimg.getSource().getRotation()
})
transform.on('rotating', e => {
  geoimg.getSource().setRotation(angle - e.angle)
})

let pos
transform.on('translatestart', e => {
  pos = geoimg.getSource().getCenter()
})
transform.on('translating', e => {
  pos[0] += e.delta[0]
  pos[1] += e.delta[1]
  geoimg.getSource().setCenter(pos)
})


let scaleX, scaleY
transform.on('scalestart', e => {
  scaleX = geoimg.getSource().getScale()[0]
  scaleY = geoimg.getSource().getScale()[1]
})
transform.on('scaling', e => {
  const coords = poly.getGeometry().getCoordinates().pop()
  const h = ol_coordinate_dist2d(coords[0], coords[1])
  const w = ol_coordinate_dist2d(coords[1], coords[2])
  const c = [
    (coords[0][0] + coords[2][0]) /2,
    (coords[0][1] + coords[2][1]) /2
  ]
  const img = geoimg.getSource().getGeoImage()
  geoimg.getSource().setScale([w / img.width, h / img.height])
  geoimg.getSource().setCenter(c)
})


window.geoimg = geoimg
window.transform = transform
