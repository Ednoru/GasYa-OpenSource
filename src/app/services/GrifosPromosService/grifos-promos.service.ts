import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GrifosPromosService {
  //private grifos_api_fake_img = 'https://my-json-server.typicode.com/Ednoru/GasYa-OpenSource/grifos';
  private grifos_api = 'http://localhost:8080/api/gasStations'
  //private promos_api_fake_img = 'https://my-json-server.typicode.com/Ednoru/GasYa-OpenSource/promos';
  private promos_api = 'http://localhost:8080/api/promotions'
  private combustible_api = 'http://localhost:8080/api/fuels'

  constructor(private http: HttpClient) { }

  getGrifos() {
    return this.http.get(this.grifos_api);
  }

  getPromos() {
    return this.http.get(this.promos_api);
  }
}
