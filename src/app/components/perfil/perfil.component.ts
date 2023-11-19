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
  fotoPerfil: string='';
  showPopup = false;
  constructor(private userService: UserService) {}
  ngOnInit(): void {

    const usuarioLogueado = this.userService.getUsuarioLogueado();
    if (usuarioLogueado) {
      this.nombreUsuario = usuarioLogueado.nombre + ' ' + usuarioLogueado.apellido;
      this.correoElectronico = usuarioLogueado.correo;
      this.fotoPerfil=usuarioLogueado.perfil;
    }
  }
  showProfilePopup() {
    this.showPopup = !this.showPopup;
  }
  toggleEditIdioma() {
    this.editandoIdioma = !this.editandoIdioma;
  }

  guardarIdioma() {
    this.editandoIdioma = false;
  }

  guardarNombre() {
    this.nombreUsuario = this.nombreEditado;
    this.editandoNombre = false;
    
    const usuarioLogueado = this.userService.getUsuarioLogueado();
    usuarioLogueado.nombre = this.nombreUsuario;
    this.userService.editarUsuario(usuarioLogueado).subscribe(response => {
      if (response) {
        console.log('Nombre de usuario actualizado en el servidor');
      } else {
        console.error('Error al actualizar el nombre de usuario');
      }
    });
  }

  guardarCorreo() {
    this.correoElectronico = this.correoEditado;
    this.editandoCorreo = false;
    
    const usuarioLogueado = this.userService.getUsuarioLogueado();
    usuarioLogueado.correo = this.correoElectronico;
    this.userService.editarUsuario(usuarioLogueado).subscribe(response => {
      if (response) {
        console.log('Correo electrónico actualizado en el servidor');
      } else {
        console.error('Error al actualizar el correo electrónico');
      }
    });
  }

  editarNombre() {
    this.nombreEditado = this.nombreUsuario;
    this.editandoNombre = true;
  }

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
