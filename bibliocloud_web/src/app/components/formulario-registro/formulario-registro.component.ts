import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'formulario-registro',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
  formulario = {
    nombre: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    rol: ''
  };

  constructor(private registroService: RegistroService) {}

registrar() {
  console.log('Datos del formulario:', this.formulario); 

  if (this.formulario.contrasena !== this.formulario.confirmarContrasena) {
    alert('Las contraseñas no coinciden');
    return;
  }

const { confirmarContrasena, ...datosUsuario } = this.formulario;
this.registroService.nuevoUsuario(datosUsuario).subscribe(
    respuesta => {
      console.log('Usuario registrado con éxito:', respuesta);
    },
    error => {
      console.error('Error al registrar usuario:', error);
    }
  );
}

}
