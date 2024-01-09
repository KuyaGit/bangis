import type { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const httpBaseInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(environment.tokenName);
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  })
  return next(authReq);
};
