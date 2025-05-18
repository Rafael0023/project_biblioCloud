import { Component } from '@angular/core';
import { BarraNavegacionComponent } from '../barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from '../pie-pagina/pie-pagina.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pagina-inicio',
  standalone: true,
  imports: [ BarraNavegacionComponent,PiePaginaComponent,],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {

}
