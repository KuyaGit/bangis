import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../../core/services/alert.service';
import { HumanvaccineService } from '../../../humanvacination/services/humanvaccine.service';
import { AuthService } from '../../../../core/services/auth.service';
import { HVacModel } from '../../../humanvacination/models/hvac.interface';
import { AnimalbiteService } from '../../services/animalbite.service';
import { AdddatabtnComponent } from '../../../../core/components/adddatabtn/adddatabtn.component';

@Component({
  selector: 'app-addanimalbite',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdddatabtnComponent,
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
      dateOfSecondVaccine: [''],
      brandNameSecondVaccine: [{ value: '', disabled: true }],
      dateOfThirdVaccine: [''],
      brandNameThirdVaccine: [{ value: '', disabled: true }],
      dateOfFourthVaccine: [''],
      brandNameFourthVaccine: [{ value: '', disabled: true }],
      dateOfFifthVaccine: [''],
      brandNameFifthVaccine: [{ value: '', disabled: true }],
      outCome: [''],
      bittingAnimalStatusafter4Years: [''],
      remarks: [''],
    });
  }


  addAnimalBiteObservable!: Observable<any>;
  addAnimalBite() {
    const formValue = this.animalBiteForm.value;
    // Loop through form controls with 'date' in their name and convert them to ISO strings if they have values
    Object.keys(formValue).forEach(key => {
      if (key.startsWith('date')) {
        formValue[key] = formValue[key] ? new Date(formValue[key]).toISOString() : null;
      }
    });

    console.log(formValue);
    this.addAnimalBiteObservable = this._aBitevac.postPatientInfo(formValue);
  }

  closemodaladd() {
    this.modalEvent.emit(false);
  }

  subscription: Subscription = new Subscription();
  emitGetAll() {
    this.subscription.add(this.getAllMethod.emit(this.subscription));
  }
  ngOnInit(): void {
    this._hvac
      .getAllHumanVaccineByAccount(this._auth.userInfo?.id)
      .subscribe((res: any) => {
        this._hvac.HVacs.set(res);
      });
  }
}
