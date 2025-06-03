import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

 apiUrl= "/api/notificacion"
  
    constructor( private http : HttpClient) { }
  
    httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json' })
    };
  
  crearNotificacion(notificacion:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, notificacion);
  }

  obtenerNotificacionesPorUsuario(usuarioId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${usuarioId}`);
  }

  marcarComoLeida(id: any,): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`,'');
  }

  eliminarNotificacion(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
