import Dialog from 'ol-ext/control/Dialog'
import ol_ext_element from 'ol-ext/util/element.js'
import map from './map'
import './style.css'

// Add current logo
const svg = document.querySelector('h1 svg')
if (svg) svg.innerHTML = '<use xlink:href="./logo.svg#logo" />'

// Add twitter
const head = document.getElementsByTagName("head")[0] || document.documentElement;
const script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://platform.twitter.com/widgets.js"
head.appendChild(script);

// Dialog info
const dlog = new Dialog({ fullscreen: true });
map.addControl(dlog)

export default function(info) {
  info += `
<p class="social">
  <a class="twitter-share-button" 
    href="https://twitter.com/intent/tweet" 
    data-url="` + document.location.origin + document.location.pathname + `"
    data-text="` + document.title.replace(/#30/, '#30DayMapChallenge') + ` #olext #Openlayers @jmviglino\n">
    Tweet
  </a>
  <a href="https://mobile.twitter.com/jmviglino" target="_new">
    <img src="https://img.shields.io/twitter/follow/jmviglino?style=social" />
  </a>
  <a href="https://github.com/Viglino/ol-ext" target="_new">
    <img src="https://img.shields.io/github/stars/viglino/ol-ext" />
  </a>
  <a href="https://www.npmjs.com/package/ol-ext" target="_new">
    <img src="https://img.shields.io/npm/v/ol-ext.svg" />
  </a>
  <br/>
  <a class="fork" href="https://github.com/Viglino/MapChallenge2022" target="_new">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" /> 
    <span>Fork me on Github</span>
  </a>
</p>
`
  document.querySelector('h1').appendChild(ol_ext_element.create('I', {
    click: () => {
      dlog.show({
        content: info,
        buttons: ['ok']
      })
      if (window.twttr) {
        window.twttr.widgets.load();
      }
    }
  }))
}