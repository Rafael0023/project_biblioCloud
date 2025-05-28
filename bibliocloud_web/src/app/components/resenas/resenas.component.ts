import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-resenas',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './resenas.component.html',
  styleUrl: './resenas.component.css'
})
export class ResenasComponent {

}
