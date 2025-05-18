import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  apiUri = '/api/signup';



  constructor(private http: HttpClient) {
  }
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  nuevoUsuario(data: any): Observable<any> {
    return this.http.post<any>(
      this.apiUri,
      data,
      { headers: this.httpOptions });
  }


}
