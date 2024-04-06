import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Rabiessubmissioninterface } from '../models/rabiessubmissioninterface';
import { Labresultinterface } from '../models/labresultinterface';

@Injectable({
  providedIn: 'root'
})
export class RabiessubmissionserviceService {

  http = inject(HttpClient);
  rabiesList = signal<any[]>([]);
  rabiesInfo = signal<Rabiessubmissioninterface[]>([]);
  private url = environment.baseUrl;

  addRabiesSampleSubmission(data: any, behaviorChanges : any, otherIllness: any): Observable<any> {
    return this.http.post(`${this.url}/rabiessample`, { data, behaviorChanges, otherIllness })
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllRabiesSampleSubmissionByAccount(id: number){
    return this.http.get(`${this.url}/rabiessample/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRabiesSampleSubmissionById(id: number): Observable<any> {
    return this.http.get(`${this.url}/rabiessample/view/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllRabiesSampleSubmission(): Observable<any> {
    return this.http.get(`${this.url}/rabiessample`)
      .pipe(
        catchError(this.handleError)
      );
  }
  delete(id: any, data: any){
    return this.http.put(`${this.url}/rabiessample/delete/${id}`, { data })
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => error);
  }
}
