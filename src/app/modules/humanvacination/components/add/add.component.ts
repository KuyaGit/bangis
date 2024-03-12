import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, Subscription, catchError } from 'rxjs';
import { HumanvaccineService } from '../../services/humanvaccine.service';
import { AlertService } from '../../../../core/services/alert.service';
import { AuthService } from '../../../../core/services/auth.service';
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
    LoadingbuttonComponent,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent{
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
  isRequired : boolean = false;
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
  get form(): { [key: string]: AbstractControl } {
    // This function will return the form controls
    return this.HVacineForm.controls;
  }
  emitGetAllHumanVaccine() {
    this.HVac.add(this.getAllHumanVaccine.emit(this.HVac));
  }

  closemodaladd() {
    this.modalEvent.emit(false);
  }

  isLoadingButton = signal<boolean>(false);
  loading : boolean = false;
  addAnimalBite() {
    if (!this.HVacineForm.value.vacName || !this.HVacineForm.value.brandName || !this.HVacineForm.value.stockQuantity || !this.HVacineForm.value.dosage || !this.HVacineForm.value.expiryDate) {
      this._alert.handleError('Please fill up all fields');
      this.isRequired = true;
      return;
    }
    this.isLoadingButton.set(true);
    this.loading = true;
    this.subscription.add(
      // Loop through form controls with 'date' in their name and convert them to ISO strings if they have values
      this._hVac.addHVac(this.HVacineForm.value)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.isLoadingButton.set(false);
            this.loading = false;
            this._alert.handleError(error.error['message']);
            this.closemodaladd();
          }
          throw error; // rethrow the error to continue handling it in the subscribe block
        })
      ).subscribe((res: any) => {
          this.loading = false;
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
