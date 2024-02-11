import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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


  // Methods
  getHumanVacCount(id: number) {
    return this.http.get(`${this.url}/humanvac/count/${id}`)
  }
}
