import { Injectable, inject } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, tap } from "rxjs";
import { UserModel } from "../../modules/usermanagement/models/user.interface";
import { LoginService } from "./login.service";
import { routes } from "../../app.routes";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})


export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'Token';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user: UserModel | null;

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private _login: LoginService, private router : Router) {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token);

  }

  hasRole(role: string): boolean {
    return this.user?.accountType.includes(role) || false;
  }

  login(email: string, password: string) {
    return this._login.login(email, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.access_token);
        this.user = this.getUser(response.token);
      })
    );
  }

  private getUser(token: string): UserModel | null {
    if (!token) {
      this.router.navigate([''])
      return null
    }
    return JSON.parse(atob(token.split('.')[1])) as UserModel;
  }
}
