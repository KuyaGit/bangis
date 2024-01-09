import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '../../../../../core/services/alert.service';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user.interface';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent implements OnInit{
  modalView !: boolean;
  _alert = inject(AlertService);
  _user = inject(UserService);
  _form = inject(FormBuilder);
  account!:FormGroup
  @Input() userInfo: any;
  @Output() modalEvent = new EventEmitter<boolean>();
  constructor() {
    this.account = this._form.group({
      name: [''],
      email: [''],
      password: [''],
      address: [''],
      accountType: [''],
    });
  }


  ngOnInit(): void {

    this.account.patchValue(this.userInfo);
  }
  closemodaladd() {
    this.modalEvent.emit(false);
  }
  closemodalview() {
    this.modalEvent.emit(false);
  }
}
