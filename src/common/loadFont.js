/** @module font/loadFonts
 * @description Function to check font load
 * @internal
 */
import WebFont from 'webfontloader';

/* Import fonts */
import '../fonts/fontmaki.css'
import '../fonts/fontmaki2.css'
  
/** Load fonts before
 * @param {function|undefined} onLoadFn function called when a font is loaded
 */
function loadFonts(onLoadFn) {
  WebFont.load({
    custom: {
      families: ['fontmaki', 'fontmaki2'],
      // urls: ['./fonts/font-awesome.min.css','./fonts/font-tools.css'],
      testStrings: { 'fontmaki': '\ue800', 'fontmaki2': '\ue800' },
    },
    classes: false,
    // Fonts are loaded
    fontactive: (f) => {
      setTimeout(function() {
        if (onLoadFn) onLoadFn({ type: 'loadfont', font: f });
      });
    },
    // oops
    fontinactive: (f) => {	
      console.warn ("Can't load font: "+f);
    }
  });
}
 
export default loadFonts
 