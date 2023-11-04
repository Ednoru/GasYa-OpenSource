import { Component, AfterViewInit } from '@angular/core';

declare namespace google.maps {
  export class Map {
    constructor(mapDiv: Element, opts?: MapOptions);
  }

  export interface MapOptions {
    zoom?: number;
    center?: LatLng | LatLngLiteral;
    mapId?: string;
  }

  export class Marker {
    constructor(opts?: MarkerOptions);
  }

  export interface MarkerOptions {
    map?: Map;
    position?: LatLng | LatLngLiteral;
    title?: string;
  }

  export interface LatLng {
    lat(): number;
    lng(): number;
  }

  export interface LatLngLiteral {
    lat: number;
    lng: number;
  }
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

@Component({
  selector: 'app-buscar-grifo',
  templateUrl: './buscar-grifo.component.html',
  styleUrls: ['./buscar-grifo.component.css']
})
export class BuscarGrifoComponent implements AfterViewInit {
  map: google.maps.Map;

  constructor() {
    this.map = {} as google.maps.Map;
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    const position = { lat: -12.19758965, lng: -77.0082777426229 };

    this.loadGoogleMaps().then((googleMaps: any) => {
      this.map = new googleMaps.Map(document.getElementById('map'), {
        zoom: 4,
        center: position,
        mapId: 'DEMO_MAP_ID',
      });

      new googleMaps.Marker({
        map: this.map,
        position: position,
        title: 'Uluru'
      });
    }).catch((error: any) => {
      console.error(error);
    });
  }

  loadGoogleMaps(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (window.google) {
        resolve(window.google.maps);
      } else {
        window.initMap = () => {
          if (window.google) {
            resolve(window.google.maps);
          } else {
            reject(new Error('Google Maps SDK failed to load.'));
          }
        };

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDmVzKjNKXtezL0qdB8Os4tIFJnS0kOAUA`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (window.google) {
            resolve(window.google.maps);
          } else {
            reject(new Error('Google Maps SDK failed to load.'));
          }
        };
        document.head.appendChild(script);
      }
    });
  }
}
