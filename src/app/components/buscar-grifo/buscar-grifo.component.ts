import { Component, AfterViewInit } from '@angular/core';

declare namespace google.maps {
  export class Map {
    private map: any;
    constructor(mapDiv: Element, opts?: MapOptions);

    // @ts-ignore
    getCenter(): google.maps.LatLng {
      return this.map.getCenter() as google.maps.LatLng;
    }
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
    icon?: string;
  }

  export interface LatLng {
    lat(): number;
    lng(): number;
  }

  export interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  export class places {
    static PlacesServiceStatus: any;
    constructor(mapDiv: Element, opts?: MapOptions);
    nearbySearch(request: any, callback: any): void;
  }

  export class PlacesService {
    constructor(mapDiv: Element, opts?: MapOptions);
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
  // @ts-ignore
  placesServices: google.maps.places.PlacesService;
  searchQuery: string = ''

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

      this.placesServices = new googleMaps.places.PlacesService(this.map);
      /*
      new googleMaps.Marker({
        map: this.map,
        position: position,
        title: 'Uluru'
      });

      this.searchNearbyGasStation(position);
      */

    }).catch((error: any) => {
      console.error(error);
    });
  }

  searchNearbyGasStation(): void {
    const request = {
      location: this.map.getCenter(),
      radius: '5000',
      type: ['gas_station']
    };

    this.placesServices.nearbySearch(request, (results: any, status: any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (const place of results) {
          new google.maps.Marker({
            map: this.map,
            position: place.geometry.location,
            title: place.name,
          });
        }
      }
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
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDmVzKjNKXtezL0qdB8Os4tIFJnS0kOAUA&libraries=places`;
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
