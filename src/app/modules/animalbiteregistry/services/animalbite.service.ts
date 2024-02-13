import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AnimalbiteInterface } from '../models/animalbite';

@Injectable({
  providedIn: 'root',
})
export class AnimalbiteService {
  aniList = signal<any>(undefined);
  private url = environment.baseUrl;

  http = inject(HttpClient);

  postPatientInfo(data: AnimalbiteInterface): Observable<AnimalbiteInterface> {
    return this.http.post<AnimalbiteInterface>(`${environment.baseUrl}/animalbite`, data)
  }
  getAllPatientsByAbtc(id : number): Observable<AnimalbiteInterface[]> {
    return this.http.get<AnimalbiteInterface[]>(`${environment.baseUrl}/animalbite/${id}`)
      .pipe(
        map((users)=> users.sort((a, b) => b.animalBiteIDFrom  ? 1 : -1)),
        catchError(this.handleError)
        );
  }
  getAllPatient(): Observable<AnimalbiteInterface[]> {
    return this.http.get<AnimalbiteInterface[]>(`${environment.baseUrl}/animalbite`)
      .pipe(
        map((users)=> users.sort((a, b) => b.animalBiteIDFrom  ? 1 : -1)),
        catchError(this.handleError)
        );
  }
  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => error);
  }
}
