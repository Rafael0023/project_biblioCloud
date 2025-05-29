import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink, RouterModule } from '@angular/router'; // ✅ Usa Router en lugar de RouterLink
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'formulario-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule
],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent  {


  formulario = {
    correo: '',
    contrasena: ''
  };
 correoUsuario!: any;

  constructor(private loginservice: LoginService, private router: Router) {} 

  ingresar() {
    if (!this.formulario.correo || !this.formulario.contrasena) {
      alert('Por favor, completa todos los campos');
      return;
    }
     this.correoUsuario = this.formulario.correo
    
    sessionStorage.setItem('correo',this.correoUsuario)

    this.loginservice.login(this.formulario).subscribe(
      (respuesta: any) => {
        console.log('Login exitoso:', respuesta);
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/usuario']); 
      },
      error => {
        console.error('Error en login:', error);
        alert('Correo o contraseña incorrectos');
      }
    );
     this.correoUsuario = sessionStorage.getItem('correo')||0
     this.loginservice.setCorreo(this.correoUsuario)
  }
}

