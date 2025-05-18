import { Component } from '@angular/core';
import { _MatInternalFormField } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'formulario-registro',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
    
})
export class FormularioRegistroComponent {

}
