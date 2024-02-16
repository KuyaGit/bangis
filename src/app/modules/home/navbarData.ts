export const navbarData = [
  {
    appHasRole: ['abtc', 'agri', 'lab'],
    routerLink: 'dashboard',
    icon: 'fa-solid fa-bars-progress',
    label: 'Dashboard',
  },
  {
    appHasRole: ['admin'],
    routerLink: 'usermanagement',
    icon: 'fa-solid fa-users',
    label: 'Manage Users',
  },
  {
    appHasRole: ['abtc', 'agri'],
    routerLink: 'animalbites',
    icon: 'fa-solid fa-cog',
    label: 'Animal Bite Registry',
  },
  {
    appHasRole: ['agri','abtc'],
    routerLink: 'animalvaccination',
    icon: 'fa-solid fa-syringe',
    label: 'Animal Vaccination',
  },
  {
    appHasRole: ['agri'],
    routerLink: 'animalvaccinationinventory',
    icon: 'fa-solid fa-syringe',
    label: 'Animal Vaccine Inventory',
  },
  {
    appHasRole: ['abtc'],
    routerLink: 'humanvaccinationinventory',
    icon: 'fa-solid fa-syringe',
    label: 'Human Vaccine Inventory',
  },
  {
    appHasRole: ['abtc', 'agri'],
    routerLink: 'rabiessubmission',
    icon: 'fa-solid fa-syringe',
    label: 'Rabies Samples',
  }
];
