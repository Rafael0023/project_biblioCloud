import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { LibroService } from '../../services/libros.service';

@Component({
  selector: 'libros-destacados',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle,MatCardContent],
  templateUrl: './libros-destacados.component.html',
  styleUrl: './libros-destacados.component.css'
})
export class LibrosDestacadosComponent {
libros: any[] = [];

constructor(private librosService: LibroService) {}

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
}
