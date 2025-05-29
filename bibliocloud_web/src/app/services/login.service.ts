import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
     private apiUrl = '/api/login';

  constructor(private http: HttpClient) {
     const correoGuardado = sessionStorage.getItem('correo');
    if (correoGuardado) {
      this.correoUsuario = correoGuardado;
    }
  }
   
   correoUsuario!:any ;

     setCorreo(correo: string): void {
    this.correoUsuario = correo;
    sessionStorage.setItem('correo', correo); 
  }

     getCorreo(): string {
    
     return this.correoUsuario || sessionStorage.getItem('correo') || '';
  }
  

  login(credenciales: { correo: string; contrasena: string }): Observable<any> {
    return this.http.post(this.apiUrl, credenciales);
  }

    logout(): void {
    
    //localStorage.removeItem('correo');
    // localStorage.removeItem('token'); 
   
    localStorage.clear();

    window.location.href = '/login';
  }
}
