import { Component } from '@angular/core';
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
    RouterModule,
    RouterLink
  ],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  formulario = {
    correo: '',
    contrasena: ''
  };

  constructor(private loginservice: LoginService, private router: Router) {} // ✅ Usa Router

  ingresar() {
    if (!this.formulario.correo || !this.formulario.contrasena) {
      alert('Por favor, completa todos los campos');
      return;
    }

    this.loginservice.login(this.formulario).subscribe(
      (respuesta: any) => {
        console.log('Login exitoso:', respuesta);
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/panelusuario']); // ✅ Redirección correcta
      },
      error => {
        console.error('Error en login:', error);
        alert('Correo o contraseña incorrectos');
      }
    );
  }
}

