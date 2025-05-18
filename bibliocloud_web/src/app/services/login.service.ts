import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private apiUrl = '/api/login';

  constructor(private http: HttpClient) {}

  login(credenciales: { correo: string; contrasena: string }): Observable<any> {
    return this.http.post(this.apiUrl, credenciales);
  }
}
