import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NotificacionesService } from '../../services/notificaciones.service';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'notificaciones',
  standalone: true,
  imports: [MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormField,
    MatLabel,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.css'
})
export class NotificacionesComponent implements OnInit {
  

  usuario! :any;
  notificaciones:any[] = []
  nuevaNotificacion: any = {
  mensaje: '',
  usuarioReceptor: ''
};
  
  constructor(private notificacionService: NotificacionesService, private loginService : LoginService) { 
    this.usuario=loginService.getUsuario()
  }

    ngOnInit(): void {
      this.cargarNotificaciones()
    }


    crearNotificacion(): void {
  const notificacion = {
    mensaje: this.nuevaNotificacion.mensaje,
    usuarioReceptor: this.nuevaNotificacion.usuarioReceptor,
    usuarioEmisor: this.usuario.usuario._id,
    leido: false
  };

  this.notificacionService.crearNotificacion(notificacion).subscribe({
    next: () => {
      this.nuevaNotificacion = { mensaje: '', usuarioReceptor: '' }; // Reset form
      this.cargarNotificaciones();
    },
    error: err => {
      console.error('Error al crear notificación', err);
    }
  });
}

  cargarNotificaciones()  {
      this.usuario = this.loginService.getUsuario()
      console.log(this.usuario)
    this.notificacionService.obtenerNotificacionesPorUsuario(this.usuario.usuario._id)
      .subscribe(data => {
        this.notificaciones = data;
      });
  }

  marcarLeida(notificacion: any): void {
    this.notificacionService.marcarComoLeida(notificacion._id)
      .subscribe(() => {
        this.cargarNotificaciones();
      });
  }

  eliminar(notificacion: any): void {
    this.notificacionService.eliminarNotificacion(notificacion._id!)
      .subscribe(() => {
        this.cargarNotificaciones();
      });
  }
}

