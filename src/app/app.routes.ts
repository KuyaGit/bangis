import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/auth/pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./modules/dashboard/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
  }
];
