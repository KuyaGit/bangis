import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DashboardInterface {
  hVacID: number;
  animalVacCount: number;
  humanBiteCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // Dependensi Injeksyon
  http = inject(HttpClient)
  // Baryabols
  private url = environment.baseUrl
  available !: Observable<number>
  outOfStock!: Observable<number>
  expired!: Observable<number>

  // Methods
  getHumanVacCount(id: number): Observable<any> {
    return this.http.get(`${this.url}/humanvac/count/${id}`)
  }
  getHvacOutofStockCount(id: number): Observable<any>  {
    return this.http.get(`${this.url}/humanvac/count/outofstock/${id}`)
  }
  getHumanVacCountExpired(id: number) : Observable<any> {
    return this.http.get(`${this.url}/humanvac/count/expired/${id}`)
  }
  getTotalVacCount(id: number): Observable<any>  {
    return this.http.get(`${this.url}/animalbite/count/${id}`)
  }
  getVacinatedCount(id: number): Observable<any>  {
    return this.http.get(`${this.url}/animalvacinated/count/${id}`)
  }

  getAnimalVacCountExpired(id: number): Observable<any> {
    return this.http.get(`${this.url}/animalvac/count/expired/${id}`)
  }
  getAnimalVacOutofStockCount(id: number): Observable<any> {
    return this.http.get(`${this.url}/animalvac/count/outofstock/${id}`)
  }
  getAnimalVacCount(id: number): Observable<any> {
    return this.http.get(`${this.url}/animalvac/count/${id}`)
  }
  getTotalRabiesSubmissionbyAccount(id: number): Observable<any> {
    return this.http.get(`${this.url}/rabiessample/submission/count/${id}`)
  }
  getCountRabiesSubmission(): Observable<any> {
    return this.http.get(`${this.url}/rabiessample/allrabiessubmission/count`)
  }

  getCountAllVaccinated() : Observable<any> {
    return this.http.get(`${this.url}/animalvacinated/vaccinated/count`)
  }

  getAllCountRabiesPositive() : Observable<any> {
    return this.http.get(`${this.url}/rabiessample/confirmed/rabies/count`)
  }
  getAllCountRabiesPositiveByAccount(id: number) : Observable<any> {
    return this.http.get(`${this.url}/rabiessample/confirmed/rabies/count/${id}`)
  }
}
