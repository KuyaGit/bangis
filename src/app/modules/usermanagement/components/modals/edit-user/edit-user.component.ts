import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '../../../../../core/services/alert.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit{
  modalEdit !: boolean;
  _alert = inject(AlertService);
  _user = inject(UserService);
  _form = inject(FormBuilder);
  account!:FormGroup
  @Input() userDetails: any;
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
  updateAccount() {
    console.log(this.account.value);
  }
  closemodaledit() {
    this.modalEvent.emit(false);
  }
  ngOnInit(): void {
    this.account.patchValue(this.userDetails);
  }
}
