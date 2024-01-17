import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const _auth = inject(AuthService)
  const router = inject(Router)
  if(_auth.hasRole('admin')) {
    return true
  } else {
    router.navigate(['notauthorized']);
    return false;
  }
};
