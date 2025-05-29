import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
 
   apiUrl= "/api/libro"
 
   constructor( private http : HttpClient) { }
 
   httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'application/json' })
   };
 
 
 
  // Obtener todos los libros (puedes pasar un límite opcional)
  getLibros(): Observable<any> {
    
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }

  // Obtener un libro por ID
  getLibro(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo libro
  crear(libro: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, libro);
  }

  // Actualizar un libro
  actualizar(id: string, libro: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, libro);
  }

  // Eliminar un libro
  eliminar(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}