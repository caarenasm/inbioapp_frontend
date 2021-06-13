import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const apiUlr = environment.apiUlr;

export class Usuario {
  sexo: number;
  dia: string;
  mes: string;
  anio: string;
  nombre: string;
  apellido: string;
  email: string;
  estatura: number;
  peso_actual: number;
  peso_deseado: number;
}

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  endpoint = apiUlr + '/api/auth/registro';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  createUsuario(usuario: Usuario): Observable<any> {
    return this.httpClient.post<Usuario>(this.endpoint, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        catchError(this.handleError<Usuario>('Error occured'))
      );
  }

  getUsuario(id): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Usuario fetched: ${id}`)),
        catchError(this.handleError<Usuario[]>(`Get usuario id=${id}`))
      );
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.endpoint)
      .pipe(
        tap(usuarios => console.log('Usuario retrieved!')),
        catchError(this.handleError<Usuario[]>('Get usuario', []))
      );
  }

  updateUsuario(id, usuario: Usuario): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Usuario updated: ${id}`)),
        catchError(this.handleError<Usuario[]>('Update usuario'))
      );
  }

  deleteUsuario(id): Observable<Usuario[]> {
    return this.httpClient.delete<Usuario[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Usuario deleted: ${id}`)),
        catchError(this.handleError<Usuario[]>('Delete usuario'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  

}
