import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable, map, shareReplay } from 'rxjs';
import { PanelUsuarioComponent } from '../panel-usuario/panel-usuario.component';

@Component({
  selector: 'navegacion-usuarios',
  standalone: true,
  imports: [   
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    PanelUsuarioComponent //agregar este ala barra navegacion
  ],
  templateUrl: './navegacion-usuarios.component.html',
  styleUrl: './navegacion-usuarios.component.css'
})
export class NavegacionUsuariosComponent {
 private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
