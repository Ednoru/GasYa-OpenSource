import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GasYa';
  options = [
    { path: '/buscarGrifo', title: 'Buscar Grifo' },
    { path: '/perfil', title: 'Perfil' },
    { path: '/grifos', title: 'Grifos' },
    { path: '/faq', title: 'FAQ' },
    { path: '/reportarProblema', title: 'Reportar Problema' },
  ];
}
