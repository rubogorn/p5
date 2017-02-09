import './app.scss';
import GMap from './map';

var ko = require('knockout');

console.log(ko);

let defaultPosition = {coords:{latitude: 28.064838, longitude: -16.72632}}
let map = new GMap({lat: defaultPosition.coords.latitude, lng: defaultPosition.coords.longitude }, 'map')
