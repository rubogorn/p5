import ko from "knockout";
import GoogleMap from "./Googlemap";
import LocationsViewModel from "./LocationsViewModel";
import "./app.scss";

import venues from "./data";

let defaultPosition = {
  coords: { latitude: 34.009696, longitude: -118.496647 }
};

const initMap = () => {
  const map = new GoogleMap({
    lat: defaultPosition.coords.latitude,
    lng: defaultPosition.coords.longitude
  });

  const locations = ko.observableArray(venues);
  ko.applyBindings(new LocationsViewModel(map, locations));
};

window.initMap = initMap;
