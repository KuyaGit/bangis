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
import { AddUserComponent } from '../../components/modals/add-user/add-user.component';
import { EditUserComponent } from '../../components/modals/edit-user/edit-user.component';
import { ViewUserComponent } from '../../components/modals/view-user/view-user.component';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../../../core/services/alert.service';
import { Subscription } from 'rxjs';
import { UserModel } from '../../models/user.interface';

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
  modalAdd = signal<boolean>(false);
  modalView = signal<boolean>(false);
  modalEdit = signal<boolean>(false);
  userDetails: undefined | UserModel;

  openViewModal(id: number) {
    this.UserSubscription.add(
      this._user.getUserById(id).subscribe((response) => {
        console.log(' Test 2');
        this.userDetails = response;
        this.modalView.set(true)
      })
    );
  }
  openEditModal(id: number) {
    this.UserSubscription.add(
      this._user.getUserById(id).subscribe((response) => {
        console.log(' Test 3');
        this.userDetails = response;
        this.modalEdit.set(true)
      })
    )
  }
  openAddModal() {
    this.modalAdd.set(true);
  }

  closemodalAdd($event: any) {
    this.modalAdd = $event;
  }
  closemodalEdit($event: any) {
    this.modalEdit = $event;
  }
  closemodalView($event: any) {
    this.modalView = $event;
  }
  UserSubscription: Subscription = new Subscription();
  Users: any[] = [];
  _user = inject(UserService);
  _alert = inject(AlertService);

  deleteUser(id: number) {
    this._alert.simpleAlert(
      'warning',
      'Warning',
      'Are you sure you want to archived this Account User?',
      () => {
        this._user.deleteUser(id).subscribe(
          (result) => {
            if (result["id"] == id) {
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
      }
    );
  }
  getAllUsers() {
    this.UserSubscription.add(
      this._user.getAllUsers().subscribe((result) => {
        this._user.Users.set(result);
      })
    )
  }
  ngOnDestroy(): void {
    this.UserSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.getAllUsers();
  }
}
