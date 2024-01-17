import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const abtcGuardGuard: CanActivateFn = (route, state) => {
  const _auth = inject(AuthService)
  const router = inject(Router)
  if(_auth.hasRole('abtc')) {
    return true
  } else {
    router.navigate(['notauthorized']);
    return false;
  }
};
