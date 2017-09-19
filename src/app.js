import './app.scss';
// import GMap from './map';
import ko from 'knockout';

class LocationsViewModel {
    constructor() {
        //Inital data
        this.locations = ko.observableArray([
            { name: 'Rolandinio', lat: -31.56391, lng: 147.154312 },
            { name: 'Rolandinio', lat: -33.718234, lng: 150.363181 },
            { name: 'Rolandinio', lat: -33.727111, lng: 150.371124 },
            { name: 'Rolandinio', lat: -33.848588, lng: 151.209834 },
            { name: 'Rolandinio', lat: -33.851702, lng: 151.216968 },
            { name: 'Rolandinio', lat: -34.671264, lng: 150.863657 },
            { name: 'Rolandinio', lat: -35.304724, lng: 148.662905 },
            { name: 'Rolandinio', lat: -36.817685, lng: 175.699196 },
            { name: 'Rolandinio', lat: -36.828611, lng: 175.790222 },
            { name: 'Rolandinio', lat: -37.75, lng: 145.116667 },
            { name: 'Rolandinio', lat: -37.759859, lng: 145.128708 },
            { name: 'Rolandinio', lat: -37.765015, lng: 145.133858 },
            { name: 'Rolandinio', lat: -37.770104, lng: 145.143299 },
            { name: 'Rolandinio', lat: -37.7737, lng: 145.145187 },
            { name: 'Rolandinio', lat: -37.774785, lng: 145.137978 },
            { name: 'Rolandinio', lat: -37.819616, lng: 144.968119 },
            { name: 'Rolandinio', lat: -38.330766, lng: 144.695692 },
            { name: 'Rolandinio', lat: -39.927193, lng: 175.053218 },
            { name: 'Rolandinio', lat: -41.330162, lng: 174.865694 },
            { name: 'Rolandinio', lat: -42.734358, lng: 147.439506 },
            { name: 'Rolandinio', lat: -42.734358, lng: 147.501315 },
            { name: 'Rolandinio', lat: -42.735258, lng: 147.438 },
            { name: 'Rolandinio', lat: -43.999792, lng: 170.463352 },
        ]);

        this.showLocations = () => {
            console.log('Object'); // eslint-disable-line
        };
    }
}

ko.applyBindings(new LocationsViewModel());
