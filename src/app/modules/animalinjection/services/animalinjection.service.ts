import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Animalinjection } from '../models/animalinjection';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalinjectionService {
  avacInjectList = signal<any>(undefined)
  avacInfo = signal<string>('')

  _http = inject(HttpClient)
  constructor() { }


  url = environment.baseUrl
  async createAvacInjectList(data : Animalinjection) {
    return this._http.post(`${this.url}/animalvacinated`, data)
  }

  getAllAvacInjectList() {
    return this._http.get(`${this.url}/animalvacinated`)
  }

  getallAvacInjectListByAccount(id: any) {
    return this._http.get(`${this.url}/animalvacinated/${id}`)
  }

  addAnimalVac(data: Animalinjection): Observable<any> {
    return this._http.post(`${this.url}/animalvacinated`, data)
  }
}
