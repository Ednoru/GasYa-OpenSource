import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GrifosPromosService {
  private grifos_api = 'http://localhost:8080/api/gasStations';
  private promos_api = 'http://localhost:8080/api/promotions';
  private combustible_api = 'http://localhost:8080/api/fuels';

  constructor(private http: HttpClient) { }

  getGrifos(): Observable<any[]> {
    return this.http.get<any[]>(this.grifos_api);
  }

  getPromos(): Observable<any[]> {
    return this.http.get<any[]>(this.promos_api);
  }

  getCombustible(): Observable<any[]> {
    return this.http.get<any[]>(this.combustible_api);
  }
}
