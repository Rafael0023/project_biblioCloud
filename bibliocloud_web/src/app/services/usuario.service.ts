import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl= "/api/usuario"

  constructor( private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  };


  usuario(): Observable<any> {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }

  
  eliminar(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  
  actualizar(id: any,usuario:any): Observable<any> {
    
  return this.http.put(`${this.apiUrl}/${id}`, usuario);

  }

}
