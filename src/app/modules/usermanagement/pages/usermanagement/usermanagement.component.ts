import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { AddUserComponent } from '../../components/modals/add-user/add-user.component';
import { EditUserComponent } from '../../components/modals/edit-user/edit-user.component';
import { ViewUserComponent } from '../../components/modals/view-user/view-user.component';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../../../core/services/alert.service';
import { Observable, Subscription, switchMap } from 'rxjs';
import { UserModel } from '../../models/user.interface';
import { AuthService } from '../../../../core/services/auth.service';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { ColumnInterface } from '../../../../core/interface/table-data';
import { TableDataComponent } from '../../../../core/components/table.data/table.data.component';
import { FormControl } from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-usermanagement',
  standalone: true,
  imports: [
    CommonModule,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
    ExportexcelbtnComponent,
    FullPageLoaderComponent,
    TableDataComponent
  ],
  templateUrl: './usermanagement.component.html',
  styleUrl: './usermanagement.component.scss',
})
export class UsermanagementComponent implements OnInit {
  modalAdd = signal<boolean>(false);
  modalView = signal<boolean>(false);
  modalEdit = signal<boolean>(false);
  userDetails: UserModel[] = [];
  _auth = inject(AuthService);
  dataExport : [] = [];
  fileName : string = 'UserList.xlsx';
  themeColor = localStorage.getItem(environment.theme)?.toString();
  columns: ColumnInterface<UserModel>[] = [
    {
      name: 'UserID',
      tableBodyType: 'text',
      tableHeaderType: 'text',
      key: 'id',
    },
    {
      name: 'Name',
      tableBodyType: 'text',
      tableHeaderType: 'text',
      key: 'name',
    },
    {
      name: 'Username',
      tableBodyType: 'text',
      tableHeaderType: 'text',
      key: 'email',
    },
    {
      name: 'Address',
      tableBodyType: 'text',
      tableHeaderType: 'text',
      key: 'address',
    },
    {
      name: 'Account Type',
      tableBodyType: 'text',
      tableHeaderType: 'text',
      key: 'accountType',
    },
    {
      name: 'Action',
      tableBodyType: 'button',
      tableHeaderType: 'text',
      key: 'id',
      item: [
        {
          name: 'View',
          method: (id: number) => {
            this.openViewModal(id);
          },

        },
        {
          name: 'Edit',
          method: (id: number) => {
            this.openEditModal(id);
          },
        },
        {
          name: 'Delete',
          method: (id: number) => {
            this.deleteUser(id);
          },
        }
      ]
    }
  ]



  openViewModal(id: number) {
    this.UserSubscription.add(
      this._user.getUserById(id).subscribe((response) => {
        this.userDetails = response;
        this.modalView.set(true)
      })
    );
  }
  openEditModal(id: number) {
    this.UserSubscription.add(
      this._user.getUserById(id).subscribe((response) => {
        this._user.userInfo.set(response)
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
  User$ !: Observable<UserModel[]>;
  searchKey = new FormControl();
  searchKey$ = this.searchKey.valueChanges;
  UsersData : UserModel[] = [];
  getAllUsers() {
    this.UserSubscription.add(
      this._user.getAllUsers().subscribe((result ) => {
        this._user.Users.set(result);
      })
    )
  }

  ngOnDestroy(): void {
    this.UserSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.User$ = this._user.refreshTrigger$.pipe(
      switchMap(() => this._user.getAllUsers())
    )
    this.getAllUsers();
  }
}
