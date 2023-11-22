/*
import {Component} from '@angular/core';


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
*/

import { Component, OnInit } from '@angular/core';
import {GrifosPromosService} from "../../services/GrifosPromosService/grifos-promos.service";

@Component({
  selector: 'app-grifos',
  templateUrl: './grifos.component.html',
  styleUrls: ['./grifos.component.css']
})
export class GrifosComponent implements OnInit {
  botonActivo: string | null = null;
  grifos: string[] = [];
  promociones: { nombre: string, descripcion: string }[] = [];

  constructor(private grifosService: GrifosPromosService) { }

  ngOnInit(): void {
    this.loadGrifos();
    this.loadPromociones();
  }

  async loadGrifos(): Promise<void> {
    try {
      this.grifosService.getGrifos().subscribe(
        (data: string[]) => {
          this.grifos = data;
        },
        (error: any) => {
          console.error("Error al cargar grifos:", error);
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  async loadPromociones(): Promise<void> {
    try {
      this.grifosService.getPromos().subscribe(
        (data: { nombre: string, descripcion: string }[]) => {
          this.promociones = data;
        },
        (error: any) => {
          console.error("Error al cargar promociones:", error);
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  mostrar(nombreGrifo: string): void {
    this.botonActivo = nombreGrifo;
    const todosLosDivs = [
      'Repsol',
      'PetroPeru',
      'Primax',
      'Pecsa'
    ];
    todosLosDivs.forEach(nombre => {
      const div = document.getElementById(nombre);
      if (div) {
        div.style.display = nombre === nombreGrifo ? "block" : "none";
      }
    });
  }
}

