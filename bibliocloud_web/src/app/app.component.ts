import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { PagInicioComponent } from './components/pag-inicio/pag-inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BarraNavegacionComponent, PagInicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BiblioCloud';
}
