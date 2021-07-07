import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const apiUlr = environment.apiUlr;

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  endpoint = apiUlr + '/api/auth';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  getQuiz(): Observable<any[]> {
    return this.httpClient.get<any>(this.endpoint + '/quiz', this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('Error occured'))
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
