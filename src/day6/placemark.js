import Placemark from 'ol-ext/overlay/Placemark'

// Start / end Placemark
const popStart = new Placemark({ popupClass: 'flagv', color: '#080' });
map.addOverlay(popStart);
const popEnd = new Placemark({ popupClass: 'flag finish', color: '#000' });
map.addOverlay(popEnd);

export { popStart, popEnd }