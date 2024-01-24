import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HVacModel } from '../models/hvac.interface';
import { Observable } from 'rxjs';

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
  getVaccineById(id: number) {
    return this.http.get(this.url + '/humanvac/' + id)
  }
  addHVac(body : HVacModel) {
    return this.http.post(this.url + '/humanvac', body)
  }

  update(id : number, data: HVacModel): Observable<any> {
    return this.http.put(`${this.url}/humanvac/${id}`, data)
  }
}
