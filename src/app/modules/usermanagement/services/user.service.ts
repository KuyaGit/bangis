import { Injectable, inject, signal } from '@angular/core';
import { UserModel } from '../models/user.interface';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //** Injectables */
  http = inject(HttpClient);
  refreshTrigger$ = new BehaviorSubject<null>(null);

  Users = signal<UserModel[]>([]);
  userInfo = signal<UserModel | undefined>(undefined);

  private url = environment.baseUrl

  public createUser(data: UserModel): Observable<any> {
    return this.http.post(`${this.url}/users`, data)
  }
  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.baseUrl}/users`)
      .pipe(
        map((users)=> users.sort((a, b) => b.id  ? 1 : -1)),
        catchError(this.handleError)
        );
  }

  archiveUser(id: number): Observable<any> {
    return this.http.put(`${this.url}/users/${id}`, id)
  }

  deleteUser(id: number): Observable<any>  {
    return this.http.delete(`${this.url}/users/${id}`)
  }
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.url}/users/${id}`)
  }
  updateByUserId(id: number, data: UserModel) {
    return this.http.put(`${this.url}/users/${id}`, data)
  }
  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(()=> error)
  }
}
