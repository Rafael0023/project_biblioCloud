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
import { UsuarioService } from '../../services/usuario.service';
import { LoginService } from '../../services/login.service';
import { Router, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'navegacion-usuarios',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet
  ],
  templateUrl: './navegacion-usuarios.component.html',
  styleUrl: './navegacion-usuarios.component.css'
})
export class NavegacionUsuariosComponent {
  mostrarPanelUsuario = true;
  usuarios: any[] = [];
  correo!: string;
  rol!: string;
  links: any[] = [];

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private usuarioService: UsuarioService,
    private loginService: LoginService,
    private router: Router
  ) {
       this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      
        const rutasOcultas = ['/gestion-usuarios'];
        this.mostrarPanelUsuario = !rutasOcultas.includes(event.urlAfterRedirects);
      }
    });
   }

  ngOnInit(): void {
    this.correo = this.loginService.getCorreo();

    this.usuarioService.usuario().subscribe((res) => {
      this.usuarios = res;
      const usuarioActual = this.usuarios.find(usuario => usuario.correo === this.correo);
      if (usuarioActual) {
        this.rol = usuarioActual.rol;
        this.links = this.generarLinksPorRol(this.rol);
      }
    });
  }

  generarLinksPorRol(rol: string): any[] {
    if (rol === 'administrador') {
      return [
        { title: 'Panel de control',link: 'panel-usuario' },
        { title: 'Gestión de usuarios', link:'gestion-usuarios' },
        { title: 'Gestión de libros', link:'gestion-libros' }
      ];
    } else if (rol === 'profesor') {
      return [
        { title: 'Mis clases' },
        { title: 'Reseña de libros' },
        { title: 'Comentarios' }
      ];
    } else if (rol === 'usuario') {
      return [
        { title: 'Libros recomendados' },
        { title: 'Mensajes' },
        { title: 'Comentarios' }
      ];
    } else {
      return [
        { title: 'Inicio' }
      ];
    }
  }
  logout() {
  this.loginService.logout();
}





}
