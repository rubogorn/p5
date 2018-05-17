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
  }

  static handleMarker(venue) {
    console.log(this);
    this.panTo(venue.coords);
    this.setMarker(venue);
    google.maps.addListener(map, "click", function(event) {
      console.log(venue);
      placeMarker(venue.coords);
    });
  }
}
