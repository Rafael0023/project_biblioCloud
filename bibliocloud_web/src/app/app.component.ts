import { Component } from '@angular/core';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BarraNavegacionComponent,PaginaInicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'BiblioCloud';
}
