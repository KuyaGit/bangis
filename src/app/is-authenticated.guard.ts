import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';


export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('Token');
  const router = inject(Router);
  if(token) {
    // router.navigate(['home']);
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
