export default class GMap {
    constructor(initialPosition, domClass) {
        let dom = document.getElementById(domClass);
        this.initialize(dom, {
            center: new google.maps.LatLng(
                initialPosition.lat,
                initialPosition.lng,
            ),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
        });

        google.maps.event.addDomListener(window, 'load', this.initialize);
    }

    initialize(dom, options) {
        console.group('%cdom', 'color: blueviolet'); // eslint-disable-line
        console.log(dom); // eslint-disable-line
        console.groupEnd(); // eslint-disable-line
        console.group('%coptions', 'color: blueviolet'); // eslint-disable-line
        console.log(options); // eslint-disable-line
        console.groupEnd(); // eslint-disable-line
        this.map = new google.maps.Map(dom, options);
    }

    getMap() {
        return this.map;
    }
}
