import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiURL = 'https://my-json-server.typicode.com/Ednoru/GasYa-OpenSource/usuarios';

  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiURL, user);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any[]>(this.apiURL).pipe(
      map(users => users.find(user => user.correo === email))
    );
  }
}
