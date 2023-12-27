import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermanagement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usermanagement.component.html',
  styleUrl: './usermanagement.component.scss'
})
export class UsermanagementComponent {
  eventsData = [
    {
      name: 'Angular Pipes',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem Ipsum Dolor Sit Amet',
      date: '2022-12-12',
      active: true,
    },
    {
      name: 'Azure Functions',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem Ipsum Dolor Sit Amet',
      date: '2022-12-22',
      active: false,
    },
    {
      name: 'Azure Functions',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem Ipsum Dolor Sit Amet',
      date: '2022-12-22',
      active: false,
    },
    {
      name: 'Azure Functions',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem Ipsum Dolor Sit Amet',
      date: '2022-12-22',
      active: false,
    },
    {
      name: 'Azure Functions',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem Ipsum Dolor Sit Amet',
      date: '2022-12-22',
      active: false,
    }
  ]
  
}
