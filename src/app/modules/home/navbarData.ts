export const navbarData = [
  {
    appHasRole: ['admin', 'abtc', 'agri'],
    routerLink : 'dashboard',
    icon : 'fa-solid fa-bars-progress',
    label: 'Dashboard',
  },
  {
    appHasRole: 'admin',
    routerLink : 'usermanagement',
    icon : 'fa-solid fa-user',
    label: 'Manage Users',
  },
  {
    appHasRole: 'admin',
    routerLink : 'animalvaccination',
    icon: 'fa-solid fa-cog',
    label: 'Animal Vaccine Inventory',
  },
  {
    appHasRole: 'abtc',
    routerLink : '#',
    icon: 'fa-solid fa-cog',
    label: 'Rabies Sample Submission',
  },
  {
    appHasRole: 'abtc',
    routerLink : '#',
    icon: 'fa-solid fa-cog',
    label: 'Clinical Lab Result',
  },
  {
    appHasRole: 'abtc',
    routerLink : '#',
    icon: 'fa-solid fa-cog',
    label: 'Animal  Bite Registry',
  },
]
