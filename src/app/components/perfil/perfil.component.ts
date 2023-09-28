import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  nombreUsuario: string = 'SEBASTIAN CÓRDOVA VALDIVIA';
  correoElectronico: string = 'sebascordoba123@gmail.com';
  nombreEditado: string = '';
  correoEditado: string = '';
  idioma: string = 'ES'; // Código de idioma por defecto
  editandoNombre: boolean = false;
  editandoCorreo: boolean = false;
  editandoIdioma: boolean = false;
  showPopup = false;
  showProfilePopup() {
    this.showPopup = !this.showPopup;
  }
  // Método para mostrar u ocultar la vista de edición del idioma
  toggleEditIdioma() {
    this.editandoIdioma = !this.editandoIdioma;
  }

  // Método para guardar el idioma seleccionado
  guardarIdioma() {
    this.editandoIdioma = false;
  }

  guardarNombre() {
    this.nombreUsuario = this.nombreEditado;
    this.editandoNombre = false;
  }

  // Método para guardar los cambios de correo
  guardarCorreo() {
    this.correoElectronico = this.correoEditado;
    this.editandoCorreo = false;
  }

  editarNombre() {
    this.nombreEditado = this.nombreUsuario;
    this.editandoNombre = true;
  }

  // Método para activar la edición del correo
  editarCorreo() {
    this.correoEditado = this.correoElectronico;
    this.editandoCorreo = true;
  }

  opcionesIdioma: { nombre: string, codigo: string }[] = [
    { nombre: 'ESPAÑOL', codigo: 'ES' },
    { nombre: 'INGLÉS', codigo: 'EN' },
    { nombre: 'PORTUGUÉS', codigo: 'PT' }
  ];
}
