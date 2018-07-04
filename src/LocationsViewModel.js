import ko from 'knockout';

export default class LocationsViewModel {
  constructor(map, locations) {
    this.map = map;
    this.locations = locations;
    this.showLocations = this.showLocations.bind(map);
  }

  showLocations(location) {
    this.map.panTo({ lat: location.coords.lat, lng: location.coords.lng });
    google.maps.event.trigger(location.marker, 'click');
  }
}
