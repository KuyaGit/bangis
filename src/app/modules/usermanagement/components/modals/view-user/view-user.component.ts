import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from '../../../../../core/services/alert.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent {
  modalView !: boolean;
  _alert = inject(AlertService);
  _user = inject(UserService);
  _form = inject(FormBuilder);
  account!:FormGroup
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
  closemodaladd() {
    this.modalEvent.emit(false);
  }
  closemodalview() {
    this.modalEvent.emit(false);
  }
}
