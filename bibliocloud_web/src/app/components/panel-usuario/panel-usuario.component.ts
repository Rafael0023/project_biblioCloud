import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UsuarioService } from '../../services/usuario.service';

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
  ]
})
export class PanelUsuarioComponent {
  private breakpointObserver = inject(BreakpointObserver);
   constructor(){}

 
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Libros destacados',libros:{
            libro:['libro 1','libro 2', 'libro 3']
          }, cols: 1, rows: 1 },
           { title: 'Mensages', mensages:{
            mensage:['mensage 1','mensage 2','mensage 3']
          }, cols: 1, rows: 1 },

          { title: 'Reseña de libros', resenas:{
            resena:['Reseña 1','Reseña 2','Reseña 3']
          }, cols: 1, rows: 1 },
          { title: 'Comentarios',comentarios:{
            comentario:['Comentario 1','Comentario 2','Comentario 3']
          }, cols: 1, rows: 1 }
          
        ];
      }

      return [
           { title: 'Libros destacados',libros:{
            libro:['libro 1','libro 2', 'libro 3']
          }, cols: 1, rows: 1 },
           { title: 'Mensages', mensages:{
            mensage:['mensage 1','mensage 2','mensage 3']
          }, cols: 1, rows: 1 },

          { title: 'Reseña de libros', resenas:{
            resena:['Reseña 1','Reseña 2','Reseña 3']
          }, cols: 1, rows: 1 },
          { title: 'Comentarios',comentarios:{
            comentario:['Comentario 1','Comentario 2','Comentario 3']
          }, cols: 1, rows: 1 }
      ];
    })
  );

  



}
