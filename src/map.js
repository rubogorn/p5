export default class GMap {
		constructor(initialPosition, domClass) {
				let dom = document.getElementById(domClass);

				this.initialize(dom, {
						center: new google.maps.LatLng(initialPosition.lat, initialPosition.lng),
						zoom: 14,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						scrollwheel: false
				});

				google.maps.event.addDomListener(window, "load", this.initialize);
		}

		initialize(dom, options){
				this.map = new google.maps.Map(dom, options);
		}

		getMap(){
				return this.map
		}
}
