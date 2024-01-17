import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment.development';

export const labGuardGuard: CanActivateFn = (route, state) => {
  const _auth = inject(AuthService)
  const router = inject(Router)
  const tokenName = environment.tokenName
  if(_auth.accountType() == 'admin') {
    return true
  } else {
    router.navigate(['/notauthorized']);
    return false;
  }
};
