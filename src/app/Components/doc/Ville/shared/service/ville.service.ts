import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Ville } from '../model/ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private baseURL ="http://localhost:8080/api/v1/villes";
  constructor(private httpClient: HttpClient) { }

  getVillesList() : Observable<Ville[]>{
    return this.httpClient.get<Ville[]>(`${this.baseURL}`).pipe(
       /* tap(villes => console.log('Villes: ', villes)), */
      catchError(this.handleError)
    ) ;
  }

  getVille(id: number) : Observable<Ville>{
    return this.httpClient.get<Ville>(`${this.baseURL}/${id}`) ;
  }

  createVille(ville : Ville) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, ville).pipe(
      tap(ville => {
        if(ville == null)
        {
          alert('Echec')
        }
        else{
          alert('Ajout ville reussie')
        }

      }),
      catchError(this.handleError)
    ) ;
  }

  updateVille(id: number, ville: Ville) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, ville).pipe(
      tap(ville => {
        alert('Modification ville reussie')
      }),
      catchError(this.handleError)
    );
  }

  deleteVille(id: number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`).pipe(
      catchError(this.handleError)
    ) ;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
