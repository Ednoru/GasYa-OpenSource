import { Component } from '@angular/core';

@Component({
  selector: 'app-grifos',
  templateUrl: './grifos.component.html',
  styleUrls: ['./grifos.component.css']
})
export class GrifosComponent {
  botonActivo: string | null = null;

  mostrar(idDiv: string): void {
    this.botonActivo = idDiv;
  }
}
