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
}

export interface Fuels {
  id: number;
  type: string;
  description: string;
  price: number;
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

  getCombustiblesPorGrifo(grifoId: number): Observable<Fuels[]> {
    try {
      return this.http.get<Fuels[]>(`${this.apiUrl}/fuels?gasStationId=${grifoId}`);
    } catch (error) {
      console.error('Error fetching fuels', error);
      throw error;
    }
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return error.message || error;
  }
}
