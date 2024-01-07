import type { HttpInterceptorFn } from '@angular/common/http';

export const httpBaseInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('Token');
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  })
  return next(authReq);
};
