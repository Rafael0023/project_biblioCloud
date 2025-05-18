import { Routes } from '@angular/router';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { SeccionNosotrosComponent } from './components/seccion-nosotros/seccion-nosotros.component';
import { LibrosDestacadosComponent } from './components/libros-destacados/libros-destacados.component';
import { PanelUsuarioComponent } from './panel-usuario/panel-usuario.component';

export const routes: Routes = [
  { path: 'registro', component: FormularioRegistroComponent },
  { path: 'login', component: FormularioLoginComponent },
  { path: '', component: BienvenidaComponent },
  { path: 'nosotros', component: SeccionNosotrosComponent },
  { path: 'catalogo', component: LibrosDestacadosComponent },
  { path: 'panelusuario', component: PanelUsuarioComponent }, 
  { path: '**', redirectTo: '' } 
];

