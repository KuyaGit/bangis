import type { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

export const httpBaseInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const alert = inject(AlertService);
  const token = localStorage.getItem(environment.tokenName);
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        alert.handleError('Session expired');
        // Redirect to login page
        localStorage.removeItem(environment.tokenName);
        router.navigate(['/login']);
      }
      return throwError(error);
    })
  );
};
