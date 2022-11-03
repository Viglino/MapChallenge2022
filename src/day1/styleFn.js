import defaultStyle from 'ol-ext/style/defaultStyle'

import Style from 'ol/style/Style'
import FontSymbol from 'ol-ext/style/FontSymbol'
import 'ol-ext/style/FontMakiDef'

import '../fonts/fontmaki2.css'

const style = defaultStyle()

const erpStyle = {
  PA: new Style ({
    image: new FontSymbol({
      glyph: 'maki2-car',
      radius: 10
    })
  })
}

export default function(f) {
  const layer = f.get('layer');
  if (/adresse/.test(layer)) return [];
  switch(layer) {
    case 'erp': {
      return erpStyle[f.get('type_principal')] || style
    }
    default: {
      return style
    }
  }
}