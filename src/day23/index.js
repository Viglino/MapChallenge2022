import ol_layer_Geoportail from 'ol-ext/layer/Geoportail'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Game from 'ol-games/game/Game'
import Sprite from 'ol-games/feature/Sprite'

import map, { permalink } from '../common/map.js'

import setInfo from '../common/setInfo'
import info from './page-info.html'


import './index.css'
setInfo(info)
permalink.setUrlReplace(false)

map.getView().setZoom(15)
map.getView().setCenter([-129695, 5805721])

const game = new Game({
  map: map
})
window.game = game

const backLayer = new ol_layer_Geoportail({ 
  preload: Infinity,
  layer: 'ORTHOIMAGERY.ORTHOPHOTOS'
})
game.getMap().addLayer(backLayer)

// Overlay to add features on it
const overlay = new VectorLayer({ source: new VectorSource });
map.addLayer(overlay)

// Angle, position and speed of the plane
let a = -Math.PI/2;
let center = map.getView().getCenter();
let speed = 0.2;

// Add a plane to the overlay
const plane = new Sprite({
  position: map.getView().getCenter(),
  src: 'https://viglino.github.io/ol-games/examples/data/plane.png',
  size: 175,
  scale: 0.5,
  frameRate: 10,
  // Define the states for the plane
  states: {
    idle: { line:0, length:3 } 
  }
}); 
overlay.getSource().addFeature(plane);

const shadow = new Sprite({
  position: map.getView().getCenter(),
  src: 'https://viglino.github.io/ol-games/examples/img/Biploar_shadow.png',
  size: 200,
  scale: 0.3,
  frameRate: 10,
  // Define the states for the plane
  states: {
    idle: { line:0, length:0 } 
  }
}); 
overlay.getSource().addFeature(shadow);
shadow.getStyle()[0].setZIndex(-1)
shadow.getStyle()[0].getImage().setOpacity(.5)
window.shadow = shadow

// Game loop
game.on ("render", function(e) {
  a += go
  center[0] += speed * e.dt * Math.cos(a);
  center[1] -= speed * e.dt * Math.sin(a);
  game.getView().setCenter(center);
  if (map.getView().getZoom() < zoom) {
    map.getView().setZoom(Math.min(zoom, map.getView().getZoom() + e.dt/5000))
  } else if (map.getView().getZoom() > zoom) {
    map.getView().setZoom(Math.max(zoom, map.getView().getZoom() - e.dt/5000))
  }
  plane.getGeometry().setCoordinates(center);
  plane.getStyle()[0].getImage().setRotation(a + Math.PI/2);
  plane.update(e);
  shadow.getGeometry().setCoordinates([
    center[0] + map.getView().getResolution() * 30, 
    center[1] - map.getView().getResolution() * 40
  ]);

  shadow.getStyle()[0].getImage().setScale(
    .4 + .03 * (1 - map.getView().getResolution())
  );
  shadow.getStyle()[0].getImage().setRotation(a + Math.PI/2);
});

game.start()

// Movement 
let go = 0;
let zoom = map.getView().getZoom()
document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp': {
      zoom = 17
      break;
    }
    case 'ArrowDown': {
      zoom = 14
      break;
    }
    case 'ArrowLeft': {
      go = -Math.PI/500
      break
    }
    case 'ArrowRight': {
      go = Math.PI/500
      break
    }
  }
})
document.addEventListener('keyup', e => {
  switch (e.key) {
    case 'ArrowUp':
    case 'ArrowDown': {
      zoom = map.getView().getZoom();
      break;
    }
    default: {
      go = 0;
    }
  }
})

// Clouds 
import AnimatedCanvas from 'ol-ext/overlay/AnimatedCanvas'
import CloudParticule from 'ol-ext/particule/Cloud'
import ol_ext_element from 'ol-ext/util/element'
const cloud = new AnimatedCanvas({
  particule: CloudParticule,
  density: .5,
  angle: Math.PI/3,
  speed: 1,
});
map.addOverlay(cloud);
window.cloud = cloud 

const bar = ol_ext_element.create('DIV', {
  className: 'bar',
  parent: document.body
})

ol_ext_element.create('DIV', {
  className: 'left',
  on: {
    pointerdown: () => { go = -Math.PI/500 },
  },
  parent: bar
})
ol_ext_element.create('DIV', {
  className: 'up',
  on: {
    pointerdown: () => { zoom = 17 },
  },
  parent: bar
})
ol_ext_element.create('DIV', {
  className: 'down',
  on: {
    pointerdown: () => { zoom = 14 },
  },
  parent: bar
})
ol_ext_element.create('DIV', {
  className: 'right',
  on: {
    pointerdown: () => { go = Math.PI/500 },
  },
  parent: bar
})

document.addEventListener('pointerup', () => {
  zoom = map.getView().getZoom();
  go = 0;
})

ol_ext_element.create('BUTTON', {
  text: 'Clouds',
  click: () => {
    cloud.setVisible(!cloud.getVisible())
  },
  parent: bar
})