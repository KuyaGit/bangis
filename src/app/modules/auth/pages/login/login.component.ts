import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PrmBtnComponent } from '../../../../core/components/prm-btn/prm-btn.component';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { AlertService } from '../../../../core/services/alert.service';
import { LoginService } from '../../../../core/services/login.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    PrmBtnComponent,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  template: `
    <div class="container">
      <div class="flex ...">
        <div class="basis-3/4">
          <img src="assets/bg.png" class="image-bg" alt="" />
        </div>
        <div
          class="basis-1/4 flex  content-center flex-wrap w-full pr-20 items-center justify-center"
        >
          <div div class="flex items-center content-center flex-col w-3/4">
            <div>
              <h1 class="w-full font-bold text-2xl">
                BANGIS: BATANGAS ANIMAL BITE MANAGEMENT GATEWAY INFORMATION
                SYSTEM
              </h1>
            </div>
            <hr class="w-full h-2 bg-red-600" />
            <form [formGroup]="loginForm" (ngSubmit)="login()" class="w-full">
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Username</span>
                </div>
                <input
                  type="text"
                  formControlName="email"
                  placeholder="Enter Username"
                  class="input input-bordered w-full max-w-xs"
                />
              </label>
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Password</span>
                </div>
                <input
                  type="password"
                  formControlName="password"
                  placeholder="Enter Password"
                  class="input input-bordered w-full max-w-xs"
                />
              </label>
              <prm-btn
                type="submit"
                [button]="{ name: 'Login' }"
                class="w-full max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginSubscription: Subscription = new Subscription();
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _auth: AuthService,
    private _alertService: AlertService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loginSubscription.add(
      this._auth
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe((response) => {
          if (response['status'] == 200) {
            this._alertService.alertWithTimer(
              'success',
              'Success',
              'Login Successful'
            );
            setTimeout(() => {
              if (this._auth.hasRole('admin')) {
                this.router.navigate(['home/usermanagement']);
              } else {
                this.router.navigate(['home/']);
              }
            }, 2000);
          } else if (
            response['response']['statusCode'] == 400 ||
            response['response']['statusCode'] == 401
          ) {
            this._alertService.simpleAlert(
              'error',
              'Invalid Credentials',
              'Invalid Credentials'
            );
          }
        })
    );
  }
}
