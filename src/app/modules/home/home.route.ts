import { Route } from "@angular/router";
import { hasRoleGuard } from "../../core/guards/has-role.guard";
import { abtcGuardGuard } from "../../core/guards/abtc-guard.guard";
import { labGuardGuard } from "../../core/guards/lab-guard.guard";
import { agriGuardGuard } from "../../core/guards/agri-guard.guard";


export const homeRoute: Route[] = [
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () => import('../dashboard/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        // canActivate: [abtcGuardGuard,labGuardGuard,agriGuardGuard]
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

      },
      {
        path: 'animalvaccination',
        title: 'Animal Vaccination',
        loadComponent: () => import('../animalvacination/pages/a-vaclist/a-vaclist.component').then(m => m.AVaclistComponent),
      },
      {
        path: 'humanvaccination',
        title: 'Human Vaccination',
        loadComponent: () => import('../humanvacination/pages/h-listvac/h-listvac.component').then(m => m.HListvacComponent),
      }

]
