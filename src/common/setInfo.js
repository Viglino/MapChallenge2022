import Dialog from 'ol-ext/control/Dialog'
import ol_ext_element from 'ol-ext/util/element.js'
import map from './map'
import './style.css'

const dlog = new Dialog({ fullscreen: true });
map.addControl(dlog)

export default function(info) {
  document.querySelector('h1').appendChild(ol_ext_element.create('I', {
    html: 'i',
    click: () => {
      dlog.show({
        content: info,
        buttons: ['ok']
      })
    }
  }))
}