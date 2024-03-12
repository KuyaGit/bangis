import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LabservicesService {
  private url = environment.baseUrl;

  http = inject(HttpClient);
  results = signal<any>([]);

  addRabiesResult(data: any): Observable<any> {
    return this.http
      .post(`${this.url}/clinicallab/add/result`, data)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => error);
  }
}
