import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LibroService } from '../../services/libros.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrl: './panel-usuario.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NotificacionesComponent,
    RouterLink,RouterOutlet,
    MatTableModule
  ]
})
export class PanelUsuarioComponent implements OnInit{
  libros!: any[];
   columnas: string[] = ['titulo', 'autor', 'isbn'];
   constructor(private librosService: LibroService){}
ngOnInit(): void {
  this.mostrarLibros();
}

mostrarLibros(){
this.librosService.getLibros().subscribe((res)=>{
    this.libros=res;
})
}

}
