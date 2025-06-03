import { Component } from '@angular/core';
import { BarraNavegacionComponent } from '../barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from '../pie-pagina/pie-pagina.component';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'pagina-inicio',
  standalone: true,
  imports: [ BarraNavegacionComponent,PiePaginaComponent,MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,RouterOutlet,RouterModule],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {
  mostrarBarra = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      
        const rutasOcultas = ['/usuario','/usuario/gestion-usuarios','/usuario/panel-usuario', '/usuario/gestion-libros','/usuario/notificaciones'];
        this.mostrarBarra = !rutasOcultas.includes(event.urlAfterRedirects);
      }
    });
  }


}
