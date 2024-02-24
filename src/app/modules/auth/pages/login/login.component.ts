import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { PrmBtnComponent } from '../../../../core/components/prm-btn/prm-btn.component';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription, catchError, throwError } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { AlertService } from '../../../../core/services/alert.service';
import { LoginService } from '../../../../core/services/login.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

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
              <button
                class="mt-3 btn btn-block btn-xs sm:btn-sm md:btn-md"
                type="submit"
              >
                <div *ngIf="isLoadingButton()">
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="flex text-center items-center w-4 h-4 text-red animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <ng-container *ngIf="!isLoadingButton()">
                  Login
                </ng-container>
              </button>
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
  isLoadingButton = signal<boolean>(false);
  login() {
    this.isLoadingButton.set(true);
    this.loginSubscription.add(
      this._auth
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              this._alertService.alertWithTimer(
                'error',
                'Invalid Credentials',
                'Invalid Credentials'
              );
            }
            return throwError(error);
          })
        )
        .subscribe((response) => {
          if (response['status'] == 200) {
            this.isLoadingButton.set(false);
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
          }
        })
    );
  }
}
