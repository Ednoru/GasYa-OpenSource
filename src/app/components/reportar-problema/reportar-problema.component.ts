import { Component } from '@angular/core';

@Component({
  selector: 'app-reportar-problema',
  templateUrl: './reportar-problema.component.html',
  styleUrls: ['./reportar-problema.component.css']
})
export class ReportarProblemaComponent {
  seleccionarOpcion(boton: HTMLElement) {
    const botones = document.querySelectorAll('.boton');
    botones.forEach(b => b.classList.remove('seleccionado'));
    boton.classList.add('seleccionado');
  }
}
