import { Injectable, inject, signal } from '@angular/core';
import { AVacsModel } from '../models/avac.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
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
}
