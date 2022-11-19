import Geoportail from 'ol-ext/layer/Geoportail';
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Game from 'ol-games/game/Game'
import Sprite from 'ol-games/feature/Sprite'
import GeoJSON from 'ol/format/GeoJSON'
import Popup from 'ol-ext/overlay/Popup'
import Hover from 'ol-ext/interaction/Hover'

import Feature from 'ol/Feature'
import Point from 'ol/geom/Point';

import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon'

import map, { permalink } from '../common/map'
import monuments from './monuments'

import setInfo from '../common/setInfo'
import info from './page-info.html'

import './index.css'

setInfo(info)
permalink.setUrlReplace(false)

map.getView().setZoom(14)
map.getView().setCenter([260352, 6250845])
map.getView().setMinZoom(13)
map.getView().setMaxZoom(15)

const game = new Game({
  map: map
})
window.game = game

const backLayer = new Geoportail({ 
  preload: Infinity,
  layer: 'ORTHOIMAGERY.ORTHOPHOTOS'
})
map.addLayer(backLayer)

Geoportail.register("GEOGRAPHICALGRIDSYSTEMS.1900TYPEMAPS", {"key":"cartes","server":"https://wxs.ign.fr/geoportail/wmts","layer":"GEOGRAPHICALGRIDSYSTEMS.1900TYPEMAPS","title":"Carte topographique - environs de Paris (1906)","format":"image/jpeg","style":"normal","queryable":false,"tilematrix":"PM","minZoom":10,"maxZoom":15,"bbox":[1.6294072,48.472553,3,49.15477],"desc":"Carte topographique de Paris et de ses environs éditée en 1906.","originators":{"IGN":{"href":"https://www.ign.fr","attribution":"Institut national de l'information géographique et forestière","logo":"https://wxs.ign.fr/static/logos/IGN/IGN.gif","minZoom":10,"maxZoom":15,"constraint":[{"minZoom":10,"maxZoom":15,"bbox":[1.6294072,48.472553,3,49.15477]}]}}});
const layer = new Geoportail({ 
  layer: 'GEOGRAPHICALGRIDSYSTEMS.1900TYPEMAPS',
  extent: [200000, 6207837, 319247, 6298636]
});
map.addLayer(layer)

// Photo layer
const photo = new VectorLayer ({ 
  source: new VectorSource({
    url: './paris-photo.geojson',
    format: new GeoJSON(),
    attributions: [ "<a href='https://twitter.com/search?q=paris%20autrefois%20%28from%3ASamuelMartin75%29&src=typed_query&f=live'>@SamuelMartin</a>" ],
  })
});
map.addLayer(photo)

const hover = new Hover({ cursor: 'pointer', layers: [photo] });
map.addInteraction(hover);

// Popup overlay
const popup = new Popup ({
  popupClass: "black",
  positioning: "bottom-left",
  offset: [0,-70],
  autoPan: false
});
map.addOverlay(popup)

// Layer for caraters
const caracter = new VectorLayer({ 
  source: new VectorSource(),
  updateWhileAnimating: true,
  updateWhileInteracting: true,
  renderOrder: (f1, f2) => f2.getGeometry().getFirstCoordinate()[1] - f1.getGeometry().getFirstCoordinate()[1]
});
map.addLayer(caracter);

// Add orc sprite
const orc = new Sprite({
  name: 'Orky',
  position: map.getView().getCenter(),
  src: 'https://viglino.github.io/ol-games/examples/data/orc.png',
  scale: 1.5
});
orc.getStyle()[0].getImage().setDisplacement([0,40])
orc.getStyle()[0].getText().setOffsetY(-75)
caracter.getSource().addFeature(orc);

// Monuments
Object.keys(monuments).forEach(k => {
  const mnt = monuments[k];
  const f = new Feature(new Point(mnt.position));
  f.setStyle ( new Style({ 
    image: new Icon({ 
      src: './monument/' + (mnt.icon || k) + '.png', 
      scale: mnt.scale, 
      displacement: mnt.displacement
    })
  }));
  caracter.getSource().addFeature(f);
})

// Show popup then hide
popup.show(orc.getCoordinate(), `
Hello, I'm Orky!<br/>
Let's visit Paris 1900!<br/>
Where do you want to go?
`);
// setTimeout(function(){ popup.hide() }, 10000);

// On click => change destination
let feature
map.on ("click", function(e) {
  feature = map.getFeaturesAtPixel(e.pixel).pop()
  if (feature) {
    image.src = feature.get('img')
  } else {
    image.src = ''
  }
  orc.setDestination(e.coordinate, map.getView().getResolution()/7);
  orc.setState("walk_"+orc.getQuarter());
  popup.hide();
});

// Do something when arrived at destination
const image = document.querySelector('img.photo')
orc.on("destination", function() {
  orc.setState("idle");
});

// Game loop
game.on ("render", function(e) {
  orc.move(e);
});
// start game!
game.start();

/* DEBUG */
window.orc= orc
/**/
