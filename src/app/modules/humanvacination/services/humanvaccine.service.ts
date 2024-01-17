import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HVacModel } from '../models/hvac.interface';

@Injectable({
  providedIn: 'root'
})
export class HumanvaccineService {
  HVacs = signal<HVacModel[]| undefined>(undefined);
  HVacInfo= signal<HVacModel | undefined>(undefined);
  http  = inject(HttpClient);
  private url = environment.baseUrl
  getAllHumanVaccine() {
    return this.http.get(this.url + '/humanvac')
  }
  addHVac(body : HVacModel) {
    return this.http.post(this.url + '/humanvac', body)
  }
}
