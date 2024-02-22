import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RabiessubmissionserviceService {

  http = inject(HttpClient);
  rabiesList = signal<any[]>([]);

  private url = environment.baseUrl;

  addRabiesSampleSubmission(data: any, behaviorChanges : any, otherIllness: any): Observable<any> {
    return this.http.post(`${this.url}/rabiessample`, { data, behaviorChanges, otherIllness })
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
  private handleError(error: HttpErrorResponse) {
    console.error(error);
    console.log('error', error);
    return throwError(() => error);
  }
}
