import ol_layer_Geoportail from 'ol-ext/layer/Geoportail'

import map from '../common/map.js'

import setInfo from '../common/setInfo.js'

import info from './page-info.html'

import './index.css'
setInfo(info)

map.getView().setZoom(12)
map.getView().setCenter([667601, 5706097])
map.getView().setRotation(-1.065)

const backLayer = new ol_layer_Geoportail({ 
  layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2'
})
map.addLayer(backLayer)

import GeoImageLayer from 'ol-ext/layer/GeoImage'
import GeoImageSource from 'ol-ext/source/GeoImage'
var geoimg = new GeoImageLayer({
  title: 'Carte du Pays compris entre les Bauges, Barraux, Montmellian et Chambery',
  source: new GeoImageSource({
    "url": "https://viglino.github.io/MapChallenge2022/chambery_bnf.jpg",
    "imageCenter": [667882.4381152793,5706259.470774345],
    "imageRotate": 1.0648505348326442,
    "imageScale": [6.40034504205837,6.40034504205837],
    "imageMask": [[650647.9243326829,5714446.888497483],[665514.2663181411,5687110.424122906],[685202.0902688706,5697955.305616069],[670286.8458426706,5725242.867549903],[650647.9243326829,5714446.888497483]],
    attributions: [ "<a href='https://gallica.bnf.fr/ark:/12148/btv1b55013142z/f1.item'>&copy; BnF</a>" ]
  })
})
map.addLayer(geoimg)