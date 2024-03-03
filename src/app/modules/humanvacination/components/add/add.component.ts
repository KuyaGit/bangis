import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, Subscription, catchError } from 'rxjs';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { HumanvaccineService } from '../../services/humanvaccine.service';
import { AlertService } from '../../../../core/services/alert.service';
import { AuthService } from '../../../../core/services/auth.service';
import { AdddatabtnComponent } from '../../../../core/components/adddatabtn/adddatabtn.component';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DatePickerComponent,
    AdddatabtnComponent,
    LoadingbuttonComponent
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllHumanVaccine = new EventEmitter<Subscription>();
  HVacineForm!: FormGroup;
  private HVac: Subscription = new Subscription();
  _form = inject(FormBuilder);
  _hVac = inject(HumanvaccineService);
  _alert = inject(AlertService);
  _auth = inject(AuthService);
  themeColor = localStorage.getItem(environment.theme)
  accountid = this._auth.userInfo?.id;
  subscription : Subscription = new Subscription()
  addHVacObservable!: Observable<any>;
  constructor() {
    this.HVacineForm = this._form.group({
      vacName: ['', Validators.required],
      brandName: ['', Validators.required],
      stockQuantity: ['', Validators.required],
      dosage: ['', Validators.required],
      expiryDate: ['', Validators.required],
      hVacID: this.accountid,
    });
  }
  setExpiryDate(selectedDate: Date): void {
    this.HVacineForm.controls['expiryDate'].setValue(selectedDate);
  }
  emitGetAllHumanVaccine() {
    this.HVac.add(this.getAllHumanVaccine.emit(this.HVac));
  }
  closemodaladd() {
    this.modalEvent.emit(false);
  }

  isLoadingButton = signal<boolean>(false);
  addAnimalBite() {
    this.isLoadingButton.set(true);
    this.subscription.add(
      // Loop through form controls with 'date' in their name and convert them to ISO strings if they have values
      this._hVac.addHVac(this.HVacineForm.value)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.isLoadingButton.set(false);
            this._alert.handleError(error.error['message']);
            this.closemodaladd();
          }
          throw error; // rethrow the error to continue handling it in the subscribe block
        })
      ).subscribe((res: any) => {
          this.isLoadingButton.set(false);
          if(res) {
            this.HVacineForm.reset()
            this.isLoadingButton.set(false);
            this.emitGetAllHumanVaccine();
            this.closemodaladd();
            this._alert.handleSuccess('Successfully Added');
          }
      })
    );
  }
  addhVac() {

    this.addHVacObservable = this._hVac.addHVac(this.HVacineForm.value)
  }
}
