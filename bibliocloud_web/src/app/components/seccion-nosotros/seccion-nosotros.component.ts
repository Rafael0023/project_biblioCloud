import { Component } from '@angular/core';
import { PorQueBibliocloudComponent } from '../por-que-bibliocloud/por-que-bibliocloud.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'seccion-nosotros',
  standalone: true,
  imports: [PorQueBibliocloudComponent,ContactoComponent],
  templateUrl: './seccion-nosotros.component.html',
  styleUrl: './seccion-nosotros.component.css'
})
export class SeccionNosotrosComponent {

}
