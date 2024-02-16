import { Injectable, inject, signal } from '@angular/core';
import { AVacsModel } from '../models/avac.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvacService {
  avacList = signal<any>(undefined)
  _http = inject(HttpClient)

  private url = environment.baseUrl
  addAvac(data: AVacsModel): Observable<any> {
    return this._http.post(`${this.url}/animalvac`, data)
  }

  getAllAvac(): Observable<any> {
    return this._http.get(`${this.url}/animalvac`)
  }
  getAllAvacByAccount(id: any) {
    return this._http.get(`${this.url}/animalvac/${id}`)
  }

  getVaccineById(id : number): Observable<any> {
    return this._http.get(this.url + '/animalvac/view/' + id)
  }

  update(id : number, data: AVacsModel): Observable<any> {
    return this._http.put(`${this.url}/animalvac/${id}`, data)
  }
}
