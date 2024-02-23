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
  public loadingColor = signal<string>('border-t-green-400');
  private readonly TOKEN_NAME = environment.tokenName;
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user =signal<UserModel | null>(null);
  userInfo : UserModel | null = null;
  accountType = signal<String | undefined>('');
  updateInfo = signal<UserModel | undefined>(undefined);
  themeColor = signal<string>('bg-green-600 hover:bg-green-800');
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
        if (this.userInfo?.accountType === 'admin') {
          this.loadingColor.set('border-t-green-400')
          localStorage.setItem(environment.theme, 'bg-green-400 hover:bg-green-600')
        } else if (this.userInfo?.accountType === 'agri') {
          localStorage.setItem(environment.theme, 'bg-red-600 hover:bg-red-800')
        } else if (this.userInfo?.accountType === 'abtc') {
          localStorage.setItem(environment.theme,'bg-blue-600 hover:bg-blue-800')
        } else if (this.userInfo?.accountType === 'lab') {
          localStorage.setItem(environment.theme, 'bg-green-600 hover:bg-green-800')
        }
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
  checkUser() : string {
    if (this.userInfo?.accountType === 'admin') {
      return 'admin'
    } else if (this.userInfo?.accountType === 'agri') {
      return 'agri'
    } else if (this.userInfo?.accountType === 'abtc') {
      return 'abtc'
    } else if (this.userInfo?.accountType === 'lab') {
      return 'lab'
    }
    return ''
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
