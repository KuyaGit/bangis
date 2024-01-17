import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const hasRoleGuard: CanActivateFn = (route, state) => {
  const _auth = inject(AuthService);
  const _router = inject(Router)

  // Check if the user is logged in
  const userRoles: any = _auth.userInfo?.accountType;

  // Check if the user has the required role for the route
  const requiredRoles = route.data['roles'];
  const hasRequiredRole = requiredRoles.some((role: any)  => userRoles.includes(role))
  if (hasRequiredRole) {
    // User has the required role, allow access to the route
    return true;
  } else {
    // User does not have the required role, redirect to a different route (e.g., login)
    _router.navigate(['notauthorized']);
    return false;
  }
}







