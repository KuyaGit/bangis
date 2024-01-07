import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Signal,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { AddUserComponent } from '../../components/modals/add-user/add-user.component';
import { EditUserComponent } from '../../components/modals/edit-user/edit-user.component';
import { ViewUserComponent } from '../../components/modals/view-user/view-user.component';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../../../core/services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usermanagement',
  standalone: true,
  imports: [
    CommonModule,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
  ],
  templateUrl: './usermanagement.component.html',
  styleUrl: './usermanagement.component.scss',
})
export class UsermanagementComponent implements OnInit {
  modalAdd: boolean = false;
  modalView: boolean = false;
  modalEdit: boolean = false;
  openViewModal() {
    this.modalView = true;
  }
  openEditModal() {
    this.modalEdit = true;
  }
  openAddModal() {
    this.modalAdd = true;
  }

  closemodalAdd($event: any) {
    this.modalAdd = $event;
    this.getAllUsers();
  }
  closemodalEdit($event: any) {
    this.modalEdit = $event;
  }
  closemodalView($event: any) {
    this.modalView = $event;

  }
  UserSubscription : Subscription = new Subscription()
  Users: any[] = [];
  constructor(private _user: UserService, private _alert: AlertService) {}

  deleteUser(id: number) {
    this._alert.simpleAlert(
      'warning',
      'Warning',
      'Are you sure you want to archived this Account User?',
      () => {
        this._user.deleteUser(id).subscribe(
          (result) => {
            if (result && result.status === '200') {
              this._alert.handleSuccess('User deleted successfully');
              this.getAllUsers();
            } else {
              this._alert.handleError('Failed to delete user profile');
            }
          },
          (error) => {
            this._alert.handleError(
              'An error occurred while deleting the user profile'
            );
            console.error(error);
          }
        );
      },
    );
  }
  getAllUsers() {
    this.UserSubscription.add(
      this._user.getAllUsers().subscribe(
        (result) => {
          if (Array.isArray(result)) {
            this.Users = result;
            console.log('from function get all users');
            console.log(this.Users);
          }
        },
        (error) => {
          console.error(error);
        }
      )
    )
  }
  ngOnInit(): void {
    this.getAllUsers();
  }
}
