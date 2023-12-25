import { Route } from "@angular/router";


export const homeRoute: Route[] = [
  {
    path: '',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent),
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () => import('../dashboard/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      }
    ]
  },
]
