import { Routes } from '@angular/router';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { SeccionNosotrosComponent } from './components/seccion-nosotros/seccion-nosotros.component';
import { LibrosDestacadosComponent } from './components/libros-destacados/libros-destacados.component';
import { PanelUsuarioComponent } from './components/panel-usuario/panel-usuario.component';
import { NavegacionUsuariosComponent } from './components/navegacion-usuarios/navegacion-usuarios.component';
import { ResenasComponent } from './components/resenas/resenas.component';
import { SolicitudLibroComponent } from './components/solicitud-libro/solicitud-libro.component';
import { GestionUsuariosComponent } from './components/gestion-usuarios/gestion-usuarios.component';

export const routes: Routes = [
 { path: 'registro', component: FormularioRegistroComponent },
  { path: 'login', component: FormularioLoginComponent },
  { path: '', component: BienvenidaComponent },
  { path: 'nosotros', component: SeccionNosotrosComponent },
  { path: 'catalogo', component: LibrosDestacadosComponent },
  { path: 'usuario', component: NavegacionUsuariosComponent }, 
  { path: 'resenas', component: ResenasComponent } ,
  { path: 'solicitud', component: SolicitudLibroComponent } ,
  { path: 'usuario',component: NavegacionUsuariosComponent,
    children:[
      {path:'panel-usuario', component: PanelUsuarioComponent} 

    ]} ,
  { path: 'usuario',
    component: NavegacionUsuariosComponent,
    children: [
      { path: 'gestion-usuarios', component: GestionUsuariosComponent },
      
    ]},
  { path: '**', redirectTo: '' } 
];

