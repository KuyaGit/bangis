import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HVacModel } from '../models/hvac.interface';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumanvaccineService {
  HVacs = signal<HVacModel[]>([]);
  HVacInfo= signal<HVacModel | undefined>(undefined);
  http  = inject(HttpClient);
  private url = environment.baseUrl
  getAllHumanVaccine() {
    return this.http.get(this.url + '/humanvac')
  }
  getAllHumanVaccineByAccount(id: any) {
    return this.http.get(`${this.url}/humanvac/${id}`)
  }
  getVaccineById(id: number) {
    return this.http.get(`${this.url}/humanvac/view/${id}`)
  }
  addHVac(body : HVacModel) {
    return this.http.post(this.url + '/humanvac', body)
  }
  getAllHumanVaccineArchived(id: number) {
    return this.http.get(`${this.url}/humanvac/archived/${id}`)
    .pipe(
      catchError(this.handleError)
    );

  }

  update(id : number, data: HVacModel): Observable<any> {
    return this.http.put(`${this.url}/humanvac/${id}`, data)
  }
  delete(id:number, data: any): Observable<HVacModel> {
    return this.http.put<HVacModel>(`${environment.baseUrl}/humanvac/archive/${id}`, data)
  }
  handleError(error : HttpErrorResponse) {
    console.log(error)
    return throwError(() => error);
  }
}
