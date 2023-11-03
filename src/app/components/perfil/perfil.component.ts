import { Component, OnInit  } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  nombreUsuario: string = '';
  correoElectronico: string = '';
  nombreEditado: string = '';
  correoEditado: string = '';
  idioma: string = 'ES'; // Código de idioma por defecto
  editandoNombre: boolean = false;
  editandoCorreo: boolean = false;
  editandoIdioma: boolean = false;
  showPopup = false;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    console.log('ngOnInit ejecutado'); // Agrega esta línea
    const usuarioLogueado = this.userService.getUsuarioLogueado();
    console.log('Usuario logueado:', usuarioLogueado);
    if (usuarioLogueado) {
      this.nombreUsuario = usuarioLogueado.nombre;
      this.correoElectronico = usuarioLogueado.correo;
    }
  }
  
  
  
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
