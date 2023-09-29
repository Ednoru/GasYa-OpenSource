// user.service.ts
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: any) {
    // Aquí es donde guardarías en el archivo .json, pero por simplicidad vamos a usar localStorage
    const users: any[] = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return of(user);  // Este es un observable falso, en un entorno real harías un http.post
  }

  getUserByEmail(email: string) {
    const users: any[] = JSON.parse(localStorage.getItem('users') || '[]');
    return of(users.find(user => user.email === email));
  }
}
