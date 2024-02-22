import { Route } from '@angular/router';
import { hasRoleGuard } from '../../core/guards/has-role.guard';

export const homeRoute: Route[] = [
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () =>
      import('../dashboard/pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canActivate: [hasRoleGuard],
    data: {
      roles: ['abtc', 'lab', 'agri'],
    },
  },
  {
    path: 'usermanagement',
    title: 'Accounts',
    loadComponent: () =>
      import(
        '../usermanagement/pages/usermanagement/usermanagement.component'
      ).then((m) => m.UsermanagementComponent),
    canActivate: [hasRoleGuard],
    data: {
      roles: ['admin'],
    },
  },
  {
    path: 'animalvaccinationinventory',
    title: 'Animal Vaccination',
    loadComponent: () =>
      import('../animalvacination/pages/a-vaclist/a-vaclist.component').then(
        (m) => m.AVaclistComponent
      ),
  },
  {
    path: 'animalvaccination',
    title: 'Animal Vaccination',
    loadComponent: () =>
      import(
        '../animalinjection/pages/table-animal-injection/table-animal-injection.component'
      ).then((m) => m.TableAnimalInjectionComponent),
  },
  {
    path: 'humanvaccinationinventory',
    title: 'Human Vaccination',
    loadComponent: () =>
      import('../humanvacination/pages/h-listvac/h-listvac.component').then(
        (m) => m.HListvacComponent
      ),
  },
  {
    path: 'animalbites',
    title: 'Animal Bites',
    loadComponent: () =>
      import(
        '../animalbiteregistry/pages/animalbitelist/animalbitelist.component'
      ).then((m) => m.AnimalbitelistComponent),
  },
  {
    path: 'notauthorized',
    title: 'Not Authorized',
    loadComponent: () =>
      import('../../modules/not-authorized/not-authorized.component').then(
        (m) => m.NotAuthorizedComponent
      ),
  },
  {
    path: 'rabiessubmission',
    title: 'Rabies Submission',
    loadComponent: () =>
      import(
        '../rabiessample/pages/rabiessubmissionlist/rabiessubmissionlist.component'
      ).then((m) => m.RabiessubmissionlistComponent),
    canActivate: [hasRoleGuard],
    data: {
      roles: ['lab', 'agri'],
    },
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
