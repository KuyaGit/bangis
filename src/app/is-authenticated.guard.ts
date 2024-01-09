import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { environment } from '../environments/environment.development';


export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const tokenName = environment.tokenName;
  const token = localStorage.getItem(tokenName);
  const router = inject(Router);
  if(token) {
    // router.navigate(['home']);
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
