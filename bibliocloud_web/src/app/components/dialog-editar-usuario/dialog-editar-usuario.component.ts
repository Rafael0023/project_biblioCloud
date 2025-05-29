import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dialog-editar-usuario',
  standalone: true,
  template: `
    <h1 mat-dialog-title>Editar Usuario</h1>
    <div mat-dialog-content>
      <form [formGroup]="form">
        <mat-form-field appearance="fill" class="w-full">
          <mat-label>Nombre</mat-label>
          <input matInput formControlName="nombre" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="w-full">
          <mat-label>Correo</mat-label>
          <input matInput formControlName="correo" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="w-full">
          <mat-label>Contraseña</mat-label>
          <input matInput type="password" formControlName="contrasena" />
        </mat-form-field>

        <mat-form-field appearance="fill" class="w-full">
          <mat-label>Rol</mat-label>
          <mat-select formControlName="rol">
            <mat-option value="administrador">Administrador</mat-option>
            <mat-option value="profesor">Profesor</mat-option>
            <mat-option value="usuario">Usuario</mat-option>
          </mat-select>
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
export class DialogEditarUsuarioComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogEditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      _id: [data._id],
      nombre: [data.nombre],
      correo: [data.correo],
      contrasena: [''], 
      rol: [data.rol]
    });
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.dialogRef.close(this.form.value);
  }
}

  