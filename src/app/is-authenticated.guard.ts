import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { environment } from '../environments/environment.development';
import { AuthService } from './core/services/auth.service';


export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const _auth = inject(AuthService)

  const router = inject(Router);
  if(_auth.isLogin()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
