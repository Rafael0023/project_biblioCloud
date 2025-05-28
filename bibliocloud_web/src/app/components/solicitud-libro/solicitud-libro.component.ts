import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-solicitud-libro',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './solicitud-libro.component.html',
  styleUrl: './solicitud-libro.component.css'
})
export class SolicitudLibroComponent {

}
