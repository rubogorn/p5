export default class GMap {
  constructor(initialPosition) {

    this.initialize(document.getElementById("map"), {
      center: new google.maps.LatLng(initialPosition.lat, initialPosition.lng),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    });

    // google.maps.event.addDomListener(window, 'load', this.initialize);
  }

  initialize(dom, options) {
    this.map = new google.maps.Map(dom, options);
  }
}
