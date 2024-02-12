import { Injectable, inject, signal } from '@angular/core';
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
  available = signal<number>(10);
  outOfStock= signal<number>(20);
  expired = signal<number>(30);

  // Methods
  getHumanVacCount(id: number) {
    return this.http.get(`${this.url}/humanvac/count/${id}`)
  }
  getTotalVacCount(id: number) {
    return this.http.get(`${this.url}/animalbite/count/${id}`)
  }
}
