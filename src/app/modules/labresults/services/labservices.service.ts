import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Labresultinterface } from '../../rabiessample/models/labresultinterface';
import { Labresult } from '../models/labresult';

@Injectable({
  providedIn: 'root',
})
export class LabservicesService {
  private url = environment.baseUrl;

  http = inject(HttpClient);
  results = signal<Labresult[]>([]);

  addRabiesResult(data: Labresult): Observable<any> {
    return this.http.post(`${this.url}/clinicallab/add/result`, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  getAllLabResults(): Observable<any> {
    return this.http.get(`${this.url}/clinicallab`)
      .pipe(
        catchError(this.handleError)
      );
  }
  getAllLabResultsByAccount(id: number): Observable<Labresult[] | any> {
    return this.http.get(`${this.url}/clinicallab/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  getRabiesResultById(id: string): Observable<Labresultinterface | any> {
    return this.http.get(`${this.url}/clinicallab/view/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteRabiesResult(id: string): Observable<any> {
    return this.http.put(`${this.url}/clinicallab/archive/${id}` , null)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => error);
  }
}
