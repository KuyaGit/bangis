import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { AlertService } from '../../../../../core/services/alert.service';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  modalAdd !: boolean;
  _alert = inject(AlertService);
  _user = inject(UserService);
  _form = inject(FormBuilder);
  account!:FormGroup
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllUsersMethod = new EventEmitter<Subscription>();

  private UserSubscription: Subscription = new Subscription();
  constructor() {
    this.account = this._form.group({
      name: [''],
      email: [''],
      password: [''],
      address: [''],
      accountType: [''],
    });
  }

  getAllUsers() {
    this.UserSubscription.add(this.getAllUsersMethod.emit(this.UserSubscription));
  }
  closemodaladd() {
    this.modalEvent.emit(false);
  }
  addAccount() {
    this._user.createUser(this.account.value).subscribe(
      (result) => {
        if(result){
          this._alert.handleSuccess('Account added successfully');
          this.closemodaladd();
          this.getAllUsers();
        }
      })
  }


}
