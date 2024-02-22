import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  inject,
  signal,
} from '@angular/core';
import { AlertService } from '../../../../../core/services/alert.service';
import { UserService } from '../../../services/user.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription, catchError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MunicipalityService } from '../../../../../core/services/municipality.service';
import { municipalityNames } from '../../../../../core/models/municipality-data.interface';
import { LoadingbuttonComponent } from '../../../../../core/components/loadingbutton/loadingbutton.component';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoadingbuttonComponent,
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent implements OnInit {
  modalAdd!: boolean;
  isLoadingButton = signal<boolean>(false);
  themeColor = 'bg-green-600 hover:bg-green-800';
  _alert = inject(AlertService);
  _user = inject(UserService);
  _form = inject(FormBuilder);
  account!: FormGroup;
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllUsersMethod = new EventEmitter<Subscription>();
  _municipality = inject(MunicipalityService);
  private UserSubscription: Subscription = new Subscription();
  municipipalities: municipalityNames[] = [];
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
    this.UserSubscription.add(
      this.getAllUsersMethod.emit(this.UserSubscription)
    );
  }
  closemodaladd() {
    this.modalEvent.emit(false);
  }
  addAccount() {
    this.isLoadingButton.set(true);
    this._user.createUser(this.account.value)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          this._alert.handleError(error.error['message']);
          this.closemodaladd();
        }
        throw error; // rethrow the error to continue handling it in the subscribe block
      })
    ).subscribe((res)=> {
      if(res) {
        this.isLoadingButton.set(false);
        this.closemodaladd();
        this._alert.handleSuccess('Account added successfully');
        this.getAllUsers();
      }
    });
  }
  ngOnInit(): void {
    this.municipipalities = this._municipality.getmunicipalityNames();
  }
}
