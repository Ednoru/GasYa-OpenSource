import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";


export interface GasStation {
  id: number;
  name: string;
}

export interface Promotion {
  id: number;
  title: string;
  description: string;
  img: string;
}

export interface Fuels {
  id: number;
  type: string;
  description: string;
  price: number;
  logo: string;
}

@Injectable({
  providedIn: 'root',
})
export class GrifosPromosService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getGrifos(): Observable<GasStation[]> {
    return this.http.get<GasStation[]>(`${this.apiUrl}/gasStations`).pipe(catchError(this.handleError));
  }

  getPromociones(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.apiUrl}/promotions`).pipe(
      catchError(this.handleError)
    );
  }

  //observacion
  getCombustiblesByGrifoId(grifoId: number): Observable<Fuels[]> {
    // Modificar la URL para pasar los dos IDs como parámetros de consulta
    const startId = (grifoId - 1) * 2 + 1;
    const endId = startId + 1;

    return this.http.get<Fuels[]>(`${this.apiUrl}/fuels?startId=${startId}&endId=${endId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return error.message || error;
  }
}
