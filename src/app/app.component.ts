import { Component } from '@angular/core';
import { UserService } from './services/userService/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  constructor(public userService: UserService, private router: Router) {}

  title = 'GasYa';
  isLoggedIn: boolean = false;
  options = [
    { path: '/iniciosesion', title: 'Iniciar Sesion' },
    { path: '/buscarGrifo', title: 'Buscar Grifo' },
    { path: '/perfil', title: 'Perfil' },
    { path: '/grifos', title: 'Grifos' },
    { path: '/faq', title: 'FAQ' },
    { path: '/reportarProblema', title: 'Reportar Problema' },
    { path: '/registro', title: 'Registro' },
  ];

  cerrarSesion() {
    this.userService.cerrarSesion(); // Llama al método para cerrar sesión
    this.router.navigate(['/iniciosesion']); // Navega al componente de inicio de sesión
  }
}
