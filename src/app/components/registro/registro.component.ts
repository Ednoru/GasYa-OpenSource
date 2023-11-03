import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }
  redirigirAInicioDeSesion() {
    this.router.navigate(['/iniciosesion']);
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.addUser(this.registerForm.value).subscribe(response => {
        console.log('Usuario registrado', response);
        this.router.navigate(['/iniciosesion']);
      });
    } else {
      console.log('Datos inválidos');
    }
  }
}

