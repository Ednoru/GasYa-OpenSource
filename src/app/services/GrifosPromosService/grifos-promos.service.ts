import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GrifosPromosService {
  private grifos_api = 'https://my-json-server.typicode.com/Ednoru/GasYa-OpenSource/grifos';
  private promos_api = 'https://my-json-server.typicode.com/Ednoru/GasYa-OpenSource/promos';

  constructor(private http: HttpClient) { }

  getGrifos() {
    return this.http.get(this.grifos_api);
  }

  getPromos() {
    return this.http.get(this.promos_api);
  }
}
