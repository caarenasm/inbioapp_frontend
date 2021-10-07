import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import { environment } from '../../environments/environment';

const apiUlr = environment.apiUlr;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = apiUlr + '/api/auth';
  isLoggedIn = false;
  token: any;

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

  login(datos): Observable<any[]> {
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

    return this.httpClient.get(this.endpoint + '/logout', { headers })
    .pipe(
      tap(data => {
        this.storage.remove('token');
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    );
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

  getUser() {

    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"] + " " + this.token["access_token"]
    });

    return this.httpClient.get<any>(this.endpoint + '/datos', { headers })
    .pipe(
      tap(user => user)
    );
  }

  validateEmail(data){
    return this.httpClient.post<any>(this.endpoint + '/email', {email: data}, this.httpOptions).pipe(
      tap(res => res)
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
