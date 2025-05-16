import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'libros-destacados',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle,MatCardContent],
  templateUrl: './libros-destacados.component.html',
  styleUrl: './libros-destacados.component.css'
})
export class LibrosDestacadosComponent {

}
