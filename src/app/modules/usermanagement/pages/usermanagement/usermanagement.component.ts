import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserComponent } from '../../components/modals/add-user/add-user.component';
import { EditUserComponent } from '../../components/modals/edit-user/edit-user.component';
import { ViewUserComponent } from '../../components/modals/view-user/view-user.component';

@Component({
  selector: 'app-usermanagement',
  standalone: true,
  imports: [
    CommonModule,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent
  ],
  templateUrl: './usermanagement.component.html',
  styleUrl: './usermanagement.component.scss'
})
export class UsermanagementComponent {
  modalAdd : boolean = false;
  modalView : boolean = false;
  modalEdit : boolean = false;

  openViewModal() {
    this.modalView = true;
  }
  openEditModal() {
    this.modalEdit = true;
  }
  openAddModal() {
    this.modalAdd = true;
  }

  closemodalAdd($event : any) {
    this.modalAdd = $event;
  }
  closemodalEdit($event : any) {
    this.modalEdit = $event;
  }
  closemodalView($event : any) {
    this.modalView = $event;
  }
  eventsData = [
    {
      name: 'Angular Pipes',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem Ipsum Dolor Sit Amet',
      date: '2022-12-12',
      active: true,
      address: 'Batangas'
    },
    {
      name: 'Azure Functions',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem Ipsum Dolor Sit Amet',
      date: '2022-12-22',
      active: false,
      address: 'Batangas'
    },
    {
      name: 'Azure Functions',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem Ipsum Dolor Sit Amet',
      date: '2022-12-22',
      active: false,
      address: 'Batangas'
    },
    {
      name: 'Azure Functions',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem Ipsum Dolor Sit Amet',
      date: '2022-12-22',
      active: false,
      address: 'Batangas'
    },
    {
      name: 'Azure Functions',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Lorem Ipsum Dolor Sit Amet',
      date: '2022-12-22',
      active: false,
      address: 'Batangas'
    }
  ]

}
