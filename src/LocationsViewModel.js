import ko from "knockout";

export default class LocationsViewModel {
  constructor(map, locations) {
    showLocations(location) {
      console.log(location);
      // google.maps.event.trigger(venue.marker, "click");
      // map.panTo({ lat: 47.606209, lng: -122.332071 });
    }
  }

}
