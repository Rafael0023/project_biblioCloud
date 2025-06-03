import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable, map, shareReplay } from 'rxjs';
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
  correo!:any;
  usuario!: any
  rol!: string;
  links: any[] = [];

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private loginService: LoginService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
       this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      
        const rutasOcultas = ['/gestion-usuarios'];
        this.mostrarPanelUsuario = !rutasOcultas.includes(event.urlAfterRedirects);
         this.usuario = this.loginService.getUsuario()
         

      }
    });
   }

 ngOnInit(): void {
  this.usuario = this.loginService.getUsuario();
  this.usuarioService.usuario().subscribe((res)=>{
   this.usuarios = res
  })
  if (this.usuario) {
    this.correo = this.usuario.usuario.correo;
    this.rol = this.usuario.usuario.rol;
    this.links = this.generarLinksPorRol(this.rol);

    console.log('Correo:', this.correo);
    console.log('Rol:', this.rol);
  } else {
    console.warn('No se encontró el usuario en localStorage');
  }
}
  generarLinksPorRol(rol: string): any[] {
    if (rol === 'administrador') {
      return [
        { title: 'Panel de control',link: 'panel-usuario' },
        { title: 'Gestión de usuarios', link:'gestion-usuarios' },
        { title: 'Gestión de libros', link:'gestion-libros' },
        { title: 'Notificaciones', link:'notificaciones' }
      ];
    } else if (rol === 'profesor') {
      return [
        { title: 'Panel de control',link: 'panel-usuario' },
       { title: 'Notificaciones', link:'notificaciones' }
      ];
    } else if (rol === 'usuario') {
      return [
      { title: 'Panel de control',link: 'panel-usuario' },
       { title: 'Notificaciones', link:'notificaciones' }
       
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
