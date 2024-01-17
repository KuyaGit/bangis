import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './core/guards/is-authenticated.guard';
import { hastokenGuard } from './core/guards/hastoken.guard';
import { hasRoleGuard } from './core/guards/has-role.guard';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./modules/auth/pages/login/login.component').then(m => m.LoginComponent),
    title: 'Login',
    canActivate: [hastokenGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'notauthorized',
    title: 'Not Authorized',
    loadComponent: () => import('./modules/not-authorized/not-authorized.component').then(m => m.NotAuthorizedComponent),
    canActivate: [hastokenGuard]
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent),
    canActivate: [isAuthenticatedGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.route').then(m => m.homeRoute),
        // canActivate: [hasRoleGuard]
      }
    ]
  }
];
