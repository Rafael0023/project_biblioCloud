import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogEditarUsuarioComponent } from '../dialog-editar-usuario/dialog-editar-usuario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    
  ],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export class GestionUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  displayedColumns: string[] = ['posicion', 'nombre', 'correo', 'rol', 'acciones'];

  constructor(
    private usuarioService: UsuarioService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.usuarioService.usuario().subscribe(
      (res) => {
        this.usuarios = res.map((usuario: any, index: number) => ({
          ...usuario,
          posicion: index + 1
        }));
      },
      (error) => console.error('Error al listar usuarios', error)
    );
  }

  actualizarListaUsuarios(): void {
    this.listarUsuarios();
  }

 modificarUsuario(usuario: any): void {
  const dialogRef = this.dialog.open(DialogEditarUsuarioComponent, {
    width: '400px',
    data: usuario
  });

  dialogRef.afterClosed().subscribe((usuarioActualizado) => {
    if (usuarioActualizado && usuarioActualizado._id) {
      this.usuarioService.actualizar(usuarioActualizado._id, usuarioActualizado).subscribe(() => {
        this.actualizarListaUsuarios();
      });
    }
  });
}


  eliminarUsuario(usuario: any): void {
    if (confirm(`¿Estás seguro de eliminar al usuario ${usuario.nombre}?`)) {
      this.usuarioService.eliminar(usuario._id).subscribe(() => {
        this.actualizarListaUsuarios();
      });
    }
  }
}
