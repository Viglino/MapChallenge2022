import defaultStyle from 'ol-ext/style/defaultStyle'

import Style from 'ol/style/Style'
import FontSymbol from 'ol-ext/style/FontSymbol'
import loadFonts from '../common/loadFont'
import Stroke from 'ol/style/Stroke'
import Fill from 'ol/style/Fill'

import 'ol-ext/style/FontMaki2Def'
import 'ol-ext/style/FontMakiDef'

const style = defaultStyle()

const erpStyle = {}

loadFonts(() => {
  const htab = { 
    J: 'maki-disability',
    L: 'maki-theatre',
    M: 'maki-shop',
    N: 'maki-restaurant',
    O: 'maki-lodging',
    P: 'maki-playground',
    R: 'maki-school',
    RH: 'maki-school',
    S: 'maki-library',
    T: 'maki-museum',
    U: 'maki-hospital',
    V: 'maki-religious-place_of_worship',
    W: 'maki2-bank',
    X: 'maki2-basketball',
    EF: 'maki-ferry',
    GA: 'maki-rail',
    PA: 'maki-soccer', 
    PS: 'maki-parking',
    SG: 'maki2-station',
    CTS: 'maki2-station',
    OA: 'maki2-mountain',
    REF: 'maki2-mountain',
    default: 'maki-circle' 
  }
  Object.keys(htab).forEach(h => {
    erpStyle[h] = new Style ({
      image: new FontSymbol({
        glyph: htab[h],
        form: 'circle',
        radius: 18,
        displacement: [0, 0],
        fontSize: .8,
        color: [255,255,255],
        fill: new Fill({
          color: '#00AAFF'
        }),
        stroke: new Stroke({
          color: [255,255,255],
          width: 2
        })
      })
    })
  })
  window.erpStyle = erpStyle
})

export default function(f) {
  /**/
  const layer = f.get('layer');
  switch(layer) {
    case 'erp': {
      return erpStyle[f.get('type_principal')] || erpStyle.default
    }
    default: {
      return []
    }
  }
  /*/
  return erpStyle[f.get('type_principal')] || erpStyle.default
  /**/
}