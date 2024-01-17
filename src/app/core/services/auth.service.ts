import { Injectable, OnInit, computed, effect, inject, signal } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, tap } from "rxjs";
import { UserModel } from "../../modules/usermanagement/models/user.interface";
import { LoginService } from "./login.service";
import { routes } from "../../app.routes";
import { Router } from "@angular/router";
import { AlertService } from "./alert.service";

@Injectable({
  providedIn: 'root',
})


export class AuthService {
  _alert = inject(AlertService)
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = environment.tokenName;
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user =signal<UserModel | null>(null);
  userInfo : UserModel | null = null;
  accountType = signal<String | undefined>('');
  updateInfo = signal<UserModel | undefined>(undefined);
  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private _login: LoginService, private router : Router) {
    this._isLoggedIn$.next(!!this.token);
    this.userInfo = this.getUser(this.token)
  }

  hasRole(role: string): boolean {
    return this.userInfo?.accountType === role;
  }

  login(email: string, password: string) {
    return this._login.login(email, password).pipe(
      tap((response: any) => {
        if (!response.access_token) {
          return;
        }
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.access_token);
        this.userInfo = this.getUser(response.access_token);
        this.user.set(this.getUser(response.access_token));
        this.accountType.set(this.userInfo?.accountType)
      })
    );
  }
  public getUser(token: string): UserModel | null {
    if (!token) {
      this.router.navigate([''])
      return null
    }
    return JSON.parse(atob(token.split('.')[1])) as UserModel;
  }

  isLogin() {
    return this.isLoggedIn$
  }
  logout() {
    this._alert.simpleAlert(
      'warning',
      'Warning',
      'Are you sure you want to logout?',
      () => {
        this._isLoggedIn$.next(false);
        localStorage.removeItem(this.TOKEN_NAME);
        this.router.navigate([''])
      }
    )
  }
}
