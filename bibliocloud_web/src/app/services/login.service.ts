import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = '/api/login';

  constructor(private http: HttpClient) {}

  setUsuario(usuario: any): void {
    localStorage.setItem('usuario', JSON.stringify(usuario)); 
  }

  getUsuario(): any {
    const usuarioGuardado = localStorage.getItem('usuario');
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  }

  login(credenciales: { correo: string; contrasena: string }): Observable<any> {
    return this.http.post(this.apiUrl, credenciales);
  }

  logout(): void {
    localStorage.clear();
    window.location.href = '/login';
  }
}