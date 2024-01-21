import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '../../../../../core/services/alert.service';
import { UserService } from '../../../services/user.service';
import { MunicipalityService } from '../../../../../core/services/municipality.service';
import { municipalityNames } from '../../../../../core/models/municipality-data.interface';
import { UserModel } from '../../../models/user.interface';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit{
  modalEdit !: boolean;
  _alert = inject(AlertService);
  _user = inject(UserService);
  _form = inject(FormBuilder);
  _auth = inject(AuthService);
  _municipality = inject(MunicipalityService)
  account!:FormGroup
  userDetails : any
  private userSubscription: Subscription = new Subscription();
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllUsersMethod = new EventEmitter<Subscription>();
  municipalities : municipalityNames[] = [];
  constructor() {
    this.account = this._form.group({
      name: [''],
      email: [''],
      password: [''],
      address: [''],
      accountType: [''],
    });
  }
  executeGetAllUsers() {
    this.userSubscription.add(
      this.getAllUsersMethod.emit(this.userSubscription)
    );
  }
  updateAccount() {
    this._user.updateByUserId(this.userDetails.id, this.account.value).subscribe(
      (result) => {
        this._alert.handleSuccess('Account updated successfully');
        this.modalEvent.emit(false);
        this.executeGetAllUsers();
      },
      (error) => {
        this._alert.handleError('An error occurred while updating the account');
        console.error(error);
      }
    );
  }
  closemodaledit() {
    this.modalEvent.emit(false);
  }
  

  ngOnInit(): void {
    this.userDetails = this._user.userInfo();
    this.account.patchValue(this.userDetails)
    this.municipalities = this._municipality.getmunicipalityNames();
  }
}
