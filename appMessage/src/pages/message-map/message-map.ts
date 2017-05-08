import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
 GoogleMapsMarkerOptions,
 GoogleMapsMarker,
 Geolocation
} from 'ionic-native';


@Component({
  selector: 'page-message-map',
  templateUrl: 'message-map.html'
})

export class MessageMapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  // Load map only after view is initialize
  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
   // create a new map by passing HTMLElement
   let element: HTMLElement = document.getElementById('map');

   let map = new GoogleMap(element);

   // listen to MAP_READY event
   map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

   // create LatLng object
   let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);

   // create CameraPosition
   let position: CameraPosition = {
     target: ionic,
     zoom: 18,
     tilt: 30
   };

   // move the map's camera to position
   map.moveCamera(position);

   // create new marker
   let markerOptions: GoogleMapsMarkerOptions = {
     position: ionic,
     title: 'Ionic'
   };

   map.addMarker(markerOptions)
     .then((marker: GoogleMapsMarker) => {
        marker.showInfoWindow();
      });
   }
}
