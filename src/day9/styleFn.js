import Circle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";
import RegularShape from 'ol/style/RegularShape'

// Default style
const lineStyle =  [
  new Style({
    stroke: new Stroke({
      color: [0,255,255],
      width: 1
    }),
    fill: new Fill({ color: [0,255,255,.2] })
  })
];

const circleRedStyle = new Style({
  image: new Circle ({
    radius: 30, 
    stroke: new Stroke ({ color: [0,255,192], width: 1.5 })
  })
});

const styles = {
  hexa: [
    new Style({
      image: new RegularShape({
        radius: 10,
        points: 6,
        stroke: new Stroke({
          color: [0,255,0],
          width: 1.5
        })
      })
    }),
    new Style({
      image: new RegularShape({
        radius: 5,
        points: 6,
        fill: new Fill({
          color: [0,255,0]
        })
      })
    })
  ],
  square: [
    new Style({
      image: new RegularShape({
        radius: 8,
        points: 4,
        angle: Math.PI/4,
        fill: new Fill({
          color: [255,192,0]
        })
      })
    }),
  ],
  losange: [
    new Style({
      image: new RegularShape({
        radius: 10,
        points: 4,
        stroke: new Stroke({
          color: [255,255,0],
          width: 1.5
        })
      })
    }),
    new Style({
      image: new RegularShape({
        radius: 5,
        points: 4,
        fill: new Fill({
          color: [255,255,0]
        })
      })
    })
  ],
  triangle: [
    new Style({
      image: new RegularShape({
        radius: 12,
        points: 3,
        stroke: new Stroke({
          color: [255,0,0],
          width: 1.5
        })
      })
    }),
    new Style({
      image: new Circle({
        radius: 4,
        fill: new Fill({
          color: [255,0,0]
        })
      })
    })
  ]
};

const styleKey = Object.keys(styles)

export { styles, lineStyle, circleRedStyle, styleKey }