import venues from "./data";

export default class GoogleMap {
  constructor(initialPosition) {
    this.initialize(document.getElementById("map"), {
      center: new google.maps.LatLng(initialPosition.lat, initialPosition.lng),
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: true
    });
  }

  initialize(dom, options) {
    this.map = new google.maps.Map(dom, options);
    venues.map(venue => this.setMarker(venue));
  }

  setMarker(venue) {
    const marker = new google.maps.Marker({
      position: venue.coords,
      animation: google.maps.Animation.DROP,
      map: this.map,
      title: venue.name
    });
    marker.addListener("click", this.handleMarker.bind(this, venue));

    // add marker to venues
    venue["marker"] = marker;
  }

  handleMarker(venue) {
    // close infowindow
    this.infoWindow && this.infoWindow.close();

    // show infowindow
    this.infoWindow = new google.maps.InfoWindow({
      content: venue.name
    });
    this.infoWindow.open(this.map, venue.marker);
  }
}
