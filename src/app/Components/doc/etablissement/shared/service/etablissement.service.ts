import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Etablissement } from '../model/etablissement';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  private baseURL ="http://localhost:8080/api/v1/etablissements";

  constructor(private httpClient: HttpClient) { }

  getEtablissementsList() : Observable<Etablissement[]>{
    return this.httpClient.get<Etablissement[]>(`${this.baseURL}`).pipe(
       /* tap(etablissements => console.log('Etablissements: ', etablissements)), */
      catchError(this.handleError)
    ) ;
  }

  getEtablissement(id: number) : Observable<Etablissement>{
    return this.httpClient.get<Etablissement>(`${this.baseURL}/${id}`) ;
  }

  createEtablissement(etablissement : Etablissement, idVille: number) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${idVille}`, etablissement).pipe(
      tap(etablissement => {
        alert('Ajout etablissement reussie')
      }),
      catchError(this.handleError)
    ) ;
  }

  updateEtablissement(id: number, etablissement: Etablissement, idVille: number) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}/${idVille}`, etablissement).pipe(
      tap(etablissement => {
        alert('Modification etablissement reussie')
      }),
      catchError(this.handleError)
    );
  }

  deleteEtablissement(id: number) : Observable<Object>{
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
