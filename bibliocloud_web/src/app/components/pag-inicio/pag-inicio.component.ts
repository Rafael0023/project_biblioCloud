import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'pag-inicio',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './pag-inicio.component.html',
  styleUrl: './pag-inicio.component.css'
})
export class PagInicioComponent {

}
