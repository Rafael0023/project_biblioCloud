import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'dialog-editar-libro',
    standalone: true,
    template: `
    <h1 mat-dialog-title>{{ title }}</h1>
    <div mat-dialog-content>
      <form [formGroup]="form">
        <mat-form-field appearance="fill" class="w-full">
          <mat-label>Nombre</mat-label>
          <input matInput formControlName="titulo" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="w-full">
          <mat-label>Autor</mat-label>
          <input matInput formControlName="autor" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="w-full">
          <mat-label>Isbn</mat-label>
          <input matInput  formControlName="isbn" />
        </mat-form-field>

          
        <mat-form-field appearance="fill" class="w-full">
        <mat-label>Editorial</mat-label>
          <input matInput formControlName="editorial" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="w-full">
        <mat-label>Imagen</mat-label>
          <input matInput formControlName="imagen" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="w-full">
        <mat-label>Popularidad</mat-label>
          <input matInput formControlName="popularidad" />
        </mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button (click)="cancelar()">Cancelar</button>
      <button mat-button color="primary" (click)="guardar()">Guardar</button>
    </div>
  `,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
    ],
})
export class DialogEditarLibroComponent {
    form: FormGroup;
    title = '';

    constructor(
        public dialogRef: MatDialogRef<DialogEditarLibroComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder
    ) {
      this.title = data.modo === 'crear'?'Crear libro':'Editar libro'
        this.form = this.fb.group({
            _id: [data.libro._id],
            titulo: [data.libro.titulo],
            autor: [data.libro.autor],
            isbn: [data.libro.isbn],
            editorial: [data.libro.editorial],
      imagen: [data.libro.imagen],
      popularidad: [data.libro.popularidad]
        });
    }

    cancelar(): void {
        this.dialogRef.close();
    }

    guardar(): void {
        this.dialogRef.close(this.form.value);
    }
}

