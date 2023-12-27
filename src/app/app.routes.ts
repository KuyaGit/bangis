import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./modules/auth/pages/login/login.component').then(m => m.LoginComponent),
    title: 'Login'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.route').then(m => m.homeRoute),
  }
];
