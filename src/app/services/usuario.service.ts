import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import { environment } from '../../environments/environment';

const apiUlr = environment.apiUlr;

import { Usuario } from "../interfaces/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  isLoggedIn = false;
  token: any;

  endpoint = apiUlr + '/api/auth';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
    private storage: Storage
  ) { 
    this.init();
  }

  async init() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

  getUsuario(usuario): Observable<any[]> {
      return this.httpClient.post<any>(this.endpoint + '/usuario/datos', JSON.stringify(usuario), this.httpOptions)
      .pipe(
        catchError(this.handleError<Usuario>('Error occured'))
      );
  }

  getLogin(datos): Observable<any[]> {
    return this.httpClient.post<any>(this.endpoint + '/login', JSON.stringify(datos), this.httpOptions)
    .pipe(
      //catchError(this.handleError<Usuario>('Error occured'))
      tap(token => {
        this.storage.set('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  logout() {

    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"] + " " + this.token["access_token"]
    });

    return this.httpClient.get(this.endpoint + '/logout', { headers: headers })
    .pipe(
      tap(data => {
        this.storage.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }

  user() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"] + " " + this.token["access_token"]
    });

    return this.httpClient.get<any>(this.endpoint + '/user', { headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;

        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
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
