import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.interface';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertService } from '../../../core/services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.baseUrl
  constructor( private http: HttpClient, private _alert : AlertService) { }
  public createUser(data: UserModel): Observable<any> {
    return this.http.post(`${this.url}/users`, data)
  }
  public getAllUsers(): Observable<any> {
    return this.http.get(`${this.url}/users`)
  }

  archiveUser(id: number): Observable<any> {
    return this.http.put(`${this.url}/users/${id}`, id)
  }

  deleteUser(id: number): Observable<any>  {
    return this.http.delete(`${this.url}/users/${id}`)
}

}
