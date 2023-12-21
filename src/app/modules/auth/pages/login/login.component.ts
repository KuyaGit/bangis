import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrmBtnComponent } from '../../../../core/components/prm-btn/prm-btn.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    PrmBtnComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  template: `
  <div class="container">
    <div class="flex ...">
      <div class="basis-3/4">
        <img src="assets/bg.png" class="image-bg" alt="">
      </div>
      <div class="basis-1/4 flex align-middle items-center content-center flex-wrap">
          <div div class="flex items-center content-center flex-col">
            <form [formGroup]="loginForm" (ngSubmit)="login()">
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Username</span>
                </div>
                <input type="text" formControlName="username" placeholder="Enter Username" class="input input-bordered w-full max-w-xs" />
              </label>
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Password</span>
                </div>
                <input type="text" formControlName="password" placeholder="Enter Password" class="input input-bordered w-full max-w-xs" />
              </label>
              <prm-btn type="submit" [button]="{ name: 'Login' }" class="w-full max-w-xs" />
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

  loginForm : FormGroup;
  constructor (
    private router : Router,
    private fb : FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    this.router.navigate(['/dashboard']);
    console.log(this.loginForm.value)
  }
}
