import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";


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
      },
      {
        path: 'usermanagement',
        title: 'Accounts',
        loadComponent: () => import('../usermanagement/pages/usermanagement/usermanagement.component').then(m => m.UsermanagementComponent),
        data : {
          accoutType: 'abtc'
        }
      },
      {
        path: 'animalvaccination',
        title: 'Animal Vaccination',
        loadComponent: () => import('../animalvacination/pages/lists/lists.component').then(m => m.ListsComponent),
      }
    ]
  },
]
