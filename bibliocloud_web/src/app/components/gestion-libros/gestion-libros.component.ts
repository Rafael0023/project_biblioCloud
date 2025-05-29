import { Component } from '@angular/core';
import { LibroService } from '../../services/libros.service';
import { DialogEditarLibroComponent } from '../dialog-editar-usuario/dialog-editar-libro.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-gestion-libros',
  standalone: true,
  imports: [
      CommonModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule
  ],
  templateUrl: './gestion-libros.component.html',
  styleUrl: './gestion-libros.component.css'
})
export class GestionLibrosComponent {
  libros: any[] = [];
  displayedColumns: string[] = ['titulo', 'autor', 'isbn', 'editorial', 'popularidad','acciones'];

  constructor(
    private librosService: LibroService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
  this.listarLibros();
  console.log(this.libros)
}

listarLibros(): void {
  this.librosService.getLibros().subscribe({
    next: (res) => {
      this.libros = res.map((libro: any, index: number) => ({
        ...libro,
        posicion: index + 1
      }));
    },
    error: (error) => {
      console.error('Error al listar libros:', error);
    }
  });
}
crearLibro(libro:any){

}

  actualizarListaLibros(): void {
    this.listarLibros();
  }

 modificarLibro(libro: any): void {
  const dialogRef = this.dialog.open(DialogEditarLibroComponent, {
    width: '400px',
    data: libro
  });

  dialogRef.afterClosed().subscribe((libroActualizado) => {
    if (libroActualizado && libroActualizado._id) {
      this.librosService.actualizar(libroActualizado._id, libroActualizado).subscribe(() => {
        this.actualizarListaLibros();
      });
    }
  });
}


  eliminarLibro(libro: any): void {
    if (confirm(`¿Estás seguro de eliminar al usuario ${libro.nombre}?`)) {
      this.librosService.eliminar(libro._id).subscribe(() => {
        this.actualizarListaLibros();
      });
    }
  }
}
