import VectorSource from 'ol/source/Vector.js'
import GeoJSON from 'ol/format/GeoJSON.js'
import CSSFilter from 'ol-ext/filter/CSS'
import TileLayer from 'ol/layer/Tile.js'
import OSM from 'ol/source/OSM'
import Style from 'ol/style/Style.js'
import Fill from 'ol/style/Fill.js'
import VectorLayer from 'ol/layer/Vector.js'
import Timeline from 'ol-ext/control/Timeline'

import setInfo from '../common/setInfo.js'
import info from './page-info.html'
import map from '../common/map.js'

import './index.css'

setInfo(info)

const backLayer = new TileLayer({
  source: new OSM()
})
map.addLayer(backLayer)
map.getView().setZoom(6)
map.getView().setCenter([3503920, 6228683])

let date = 1922;
const fillYellow = new Style({
  fill: new Fill({ color: '#FFDD00' })
})
const fillBlue = new Style({
  fill: new Fill({ color: '#0057B7' })
})
// Style
function styleFn(feature) {
  if (feature.get('before') && date >= feature.get('before')) return [];
  if (feature.get('after') && date < feature.get('after')) return [];
  if (feature.get('before') || feature.get('after')) return fillBlue
  return fillYellow
}

const ukr = new VectorLayer ({
  title: 'Ukraine',
  className: 'ukr',
  source: new VectorSource({
    url: './UKR-ADM.geojson',
    format: new GeoJSON(),
    attributions: [ ],
  }),
  style: styleFn
});
map.addLayer(ukr);
ukr.addFilter(new CSSFilter({ blend: 'multiply' }));

// Set date and refresh
function setDate(d) {
  date = d;
  document.body.querySelector('h2').innerText = d;
  document.body.querySelector('.info').innerHTML = dateInfo[d] || '';
  ukr.getSource().changed();
}

const dates = [{
    date: 1922,
    info: `En <b>1922</b>, la République socialiste soviétique d'Ukraine, est créée par la Russie soviétique en réunissant l'Ukraine de l'Ouest et l'Ukraine du Sud-Est.`
  }, {
    date: 1924,
    info: ``
  }, {
    date: 1939,
    info: `En <b>1939</b>, l'URSS accorde à l'Ukraine un territoire pris sur la Pologne : la Volynie et la Galicie`
  }, {
    date: 1940,
    info: `En <b>1940</b>, on y ajouta la Bucovine (Tchernivtsi) et le Boudjak (sud-ouest d'Odessa), deux territoires «cédés» par la Roumanie`
  }, {
    date: 1945,
    info: `L'URSS transfére en <b>1945</b> un territoire pris sur la Tchécoslovaquie à l'Ukraine: la Ruthénie (Transcarpathie). En 1948, l'URSS annexe l'île roumaine des Serpents ("Ostrov Zmeïnyi")`
  }, {
    date: 1954,
    info: `En <b>1954</b>, le président Nikita Khrouchtchev donna la Crimée (qui sera annexée à la Russie en 2014) à l'Ukraine, officiellement pour commémorer la réunification de la Russie et de l’Ukraine.`
  }
]

const dateInfo = {};
dates.forEach((d,i) => {
  dateInfo[d.date] = d.info;
  dates[i] = {
    text: d.date,
    info: d.info,
    date: new Date(d.date + '/01/01'),
    endDate: new Date(d.date + '/12/31')
  }
})
let curInfo = ''
for (let i=1919; i<1964; i++) {
  if (!dateInfo[i]) dateInfo[i] = curInfo
  else curInfo = dateInfo[i];
}

// Create Timeline control 
let tline = new Timeline({
  className: 'ol-pointer',
  features: dates,
  graduation: 'year',
  minDate: new Date('1920/01/01'),
  maxDate: new Date('1964/12/31'),
  maxWidth: 1500,
  getHTML: function(f) { return f.text; },
  getFeatureDate: function(f){ return f.date; },
  endFeatureDate: function(f) { return f.endDate }
});
map.addControl (tline);

// Set the date when ready
setTimeout(function(){ tline.setDate(date); });
tline.addButton ({
  className: "go",
  title: "GO!",
  handleClick: function() {
    go();
  }
});

// Show features on scroll
tline.on('scroll', function(e){
  var d = tline.roundDate(e.date).getFullYear();
  // Filter features visibility
  setDate(d)
});

// Run on the timeline
var running = false; 
var start = new Date('1920');
var end = new Date('1960');
function go(next) {
  var date = tline.getDate();
  if (running) clearTimeout(running);
  if (!next) {
    // stop
    if (date>start && date<end && running) {
      running = false;
      tline.element.classList.remove('running');
      return;
    }
    if (date > end) {
      date = start;
    }
  }
  if (date > end) {
    tline.element.classList.remove('running');
    return;
  }
  if (date < start) {
    date = start;
  }
  // 1 day
  date = new Date(date.getTime() + 146*24*60*60*1000);
  tline.setDate(date, { anim:false });
  // next
  tline.element.classList.add('running');
  running = setTimeout(function() { go(true); }, 100);
}


/* DEBUG */
window.setDate = setDate
/**/