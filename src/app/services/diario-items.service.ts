import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ToastService } from './toast.service';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage-angular';

const apiUlr = environment.apiUlr;

export class Filtro {
  tipo: number;
  padre: number;
}

@Injectable({
  providedIn: 'root'
})
export class DiarioItemsService {

  endpoint = apiUlr + '/api/auth';
  token = this.authServ.token;

  constructor(
    private httpClient: HttpClient,
    private toastServ: ToastService,
    private authServ: AuthService,
    private storage: Storage
  ) { }

  getStorage() {
    return this.storage.get('token').then((result) => result);
  }

  getLista(filtro: Filtro): Observable<any[]> {

    const httpOptions = new HttpHeaders({
      'Authorization': this.token["token_type"] + " " + this.token["access_token"] 
    });

    return this.httpClient.post<any>(this.endpoint + '/diario/relacion', JSON.stringify(filtro), { headers: httpOptions })
    .pipe(
      catchError(this.handleError<any>('Error occured'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.toastServ.presentToast('Error en Servidor!');
  }
}
