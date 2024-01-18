import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../../modules/usermanagement/models/user.interface';

export const hasRoleGuard: CanActivateFn = (route, state) => {
  const _auth = inject(AuthService);
  const _router = inject(Router);
  const accountType = _auth.userInfo?.accountType;
  const isAuthorized = route.data['roles'].includes(accountType)
  if (!isAuthorized) {
    _router.navigate(['home/notauthorized']);
  }
  return isAuthorized || false;

};
