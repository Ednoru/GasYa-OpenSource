import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrifosPromosService {
  private grifos_api = 'http://localhost:8080/api/gasStations';
  private promos_api = 'http://localhost:8080/api/promotions';
  private combustible_api = 'http://localhost:8080/api/fuels';

  constructor(private http: HttpClient) { }

  getGrifos(): Observable<string[]> {
    return this.http.get<any[]>(this.grifos_api).pipe(
      map(grifos => grifos.map(grifo => grifo.name))
    );
  }

  getPromos(): Observable<{ nombre: string, descripcion: string }[]> {
    return this.http.get<any[]>(this.promos_api).pipe(
      map(promos => promos.map(promo => ({ nombre: promo.title, descripcion: promo.description })))
    );
  }

  getCombustible(): Observable<{ tipo: string, descripcion: string }[]> {
    return this.http.get<any[]>(this.combustible_api).pipe(
      map(combustibles => combustibles.map(combustible => ({ tipo: combustible.type, descripcion: combustible.description })))
    );
  }
}
