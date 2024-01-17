import { Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';
import { AlertService } from '../../../../../core/services/alert.service';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MunicipalityService } from '../../../../../core/services/municipality.service';
import { municipalityNames } from '../../../../../core/models/municipality-data.interface';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit{
  modalAdd !: boolean;
  _alert = inject(AlertService);
  _user = inject(UserService);
  _form = inject(FormBuilder);
  account!:FormGroup
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllUsersMethod = new EventEmitter<Subscription>();
  _municipality = inject(MunicipalityService)
  private UserSubscription: Subscription = new Subscription();
  municipipalities : municipalityNames[] = [];
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
  ngOnInit(): void {
      this.municipipalities =this._municipality.getmunicipalityNames();
  }
}
