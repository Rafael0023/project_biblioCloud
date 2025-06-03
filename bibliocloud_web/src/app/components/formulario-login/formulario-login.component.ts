import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink, RouterModule } from '@angular/router'; 
import { LoginService } from '../../services/login.service';
import { UsuarioService } from '../../services/usuario.service';

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
export class FormularioLoginComponent implements OnInit {


  formulario = {
    correo: '',
    contrasena: ''
  };
  
  constructor(private loginservice: LoginService, private router: Router) {} 

  ngOnInit(): void {
    this.ingresar()
  }
  ingresar() {
    if (!this.formulario.correo || !this.formulario.contrasena) {
      alert('Por favor, completa todos los campos');
      return;
    }
  

    this.loginservice.login(this.formulario).subscribe(
      (respuesta: any) => {
        console.log('Login exitoso:',respuesta);
        this.setUsuario(respuesta);
        
      
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/usuario']); 
      },
      error => {
        console.error('Error en login:', error);
        alert('Correo o contraseña incorrectos');
      }
    );
  }

  setUsuario(user:any){
    this.loginservice.setUsuario(user)

  }
      
}

