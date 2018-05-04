export default class GMarker{
    constructor(map, latitude, longitude, title){
      console.log(map);
        this.marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude, title),
            map: map,
            animation: google.maps.Animation.DROP,
            title: title
        });
        console.log(this.marker);
        return this.marker
    }
}
