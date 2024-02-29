import { Component, EventEmitter, OnInit, Output, inject, signal } from '@angular/core';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, Subscription, catchError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../../core/services/alert.service';
import { HumanvaccineService } from '../../../humanvacination/services/humanvaccine.service';
import { AuthService } from '../../../../core/services/auth.service';
import { HVacModel } from '../../../humanvacination/models/hvac.interface';
import { AnimalbiteService } from '../../services/animalbite.service';
import { AdddatabtnComponent } from '../../../../core/components/adddatabtn/adddatabtn.component';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { environment } from '../../../../../environments/environment.development';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addanimalbite',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdddatabtnComponent,
    LoadingbuttonComponent,
  ],
  templateUrl: './addanimalbite.component.html',
  styleUrl: './addanimalbite.component.scss',
})
export class AddanimalbiteComponent implements OnInit {
  // Input and Output
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();

  // Dependency Injection
  animalBiteForm!: FormGroup;
  _alert = inject(AlertService);
  _hvac = inject(HumanvaccineService);
  fb = inject(FormBuilder);
  _auth = inject(AuthService);
  _aBitevac = inject(AnimalbiteService);
  accountID = this._auth.userInfo?.id;
  themeColor = localStorage.getItem(environment.theme)
  subsciption : Subscription = new Subscription();
  constructor() {
    this.animalBiteForm = this.fb.group({
      animalBiteIDFrom: this.accountID,
      patientName: ['', Validators.required],
      Address: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      dateBitten: ['', Validators.required],
      bittenAt: ['', Validators.required],
      typeOfAnimal: ['', Validators.required],
      type: ['', Validators.required],
      siteOfBite: ['', Validators.required],
      category: ['', Validators.required],
      washAfterbite: ['', Validators.required],
      dateRigGiven: ['', Validators.required],
      route: [''],
      dateOfFirstVaccine: [''],
      brandNameFirstVaccine: [''],
      dateOfSecondVaccine: [{ value: '', disabled: true }],
      brandNameSecondVaccine: [{ value: '', disabled: true }],
      dateOfThirdVaccine: [{ value: '', disabled: true }],
      brandNameThirdVaccine: [{ value: '', disabled: true }],
      dateOfFourthVaccine: [{ value: '', disabled: true }],
      brandNameFourthVaccine: [{ value: '', disabled: true }],
      dateOfFifthVaccine: [{ value: '', disabled: true }],
      brandNameFifthVaccine: [{ value: '', disabled: true }],
      outCome: [''],
      bittingAnimalStatusafter4Years: [''],
      remarks: [''],
    });
  }

  isLoadingButton = signal<boolean>(false);
  addAnimalBite() {
    this.isLoadingButton.set(true);
    const formValue = this.animalBiteForm.value;
    Object.keys(formValue).forEach(key => {
      if (key.startsWith('date')) {
        formValue[key] = formValue[key] ? new Date(formValue[key]).toISOString() : null;
      }
    })
    this.subsciption.add(
      // Loop through form controls with 'date' in their name and convert them to ISO strings if they have values
      this._aBitevac.postPatientInfo(formValue)
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
          if(res.AnimalBiteId) {
            this.animalBiteForm.reset()
            this.isLoadingButton.set(false);
            this.emitGetAll();
            this.closemodaladd();
            this._alert.handleSuccess('Successfully Added');
          }
      })
    );
  }



  closemodaladd() {
    this.modalEvent.emit(false);
  }

  subscription: Subscription = new Subscription();
  emitGetAll() {
    this.getAllMethod.emit(this.subscription);
  }
  ngOnInit(): void {
    this._hvac
      .getAllHumanVaccineByAccount(this._auth.userInfo?.id)
      .subscribe((res: any) => {
        this._hvac.HVacs.set(res);
      });
  }
}
