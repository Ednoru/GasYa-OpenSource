import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GasYa';
  isLoggedIn: boolean = false;
  options = [
    { path: '/buscarGrifo', title: 'Buscar Grifo' },
    { path: '/perfil', title: 'Perfil' },
    { path: '/grifos', title: 'Grifos' },
    { path: '/faq', title: 'FAQ' },
    { path: '/reportarProblema', title: 'Reportar Problema' },
    { path: '/iniciosesion', title: 'Iniciar Sesion' },
    { path: '/registro', title: 'Registro' },
  ];

  cerrarSesion() {
    // Agrega la lógica necesaria para cerrar la sesión aquí
    // Por ejemplo, puedes realizar una llamada a un servicio de autenticación
    // y cambiar el valor de 'isLoggedIn' a 'false'.
    this.isLoggedIn = false;
  }
}
