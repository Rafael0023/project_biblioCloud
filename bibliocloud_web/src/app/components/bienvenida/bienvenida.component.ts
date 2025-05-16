import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'bienvenida',
  standalone: true,
  imports: [MatCardTitle,MatCardHeader,MatCard,MatCardSubtitle],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {

}
