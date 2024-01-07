import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  private url = environment.baseUrl

  public login( email: string, password: string ): Observable<any>{
    return this.http.post(`${this.url}/auth/login`, { email: email, password: password })
  }
}
