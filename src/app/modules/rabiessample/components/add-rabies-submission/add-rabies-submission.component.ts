import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

import { AdddatabtnComponent } from '../../../../core/components/adddatabtn/adddatabtn.component';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-add-rabies-submission',
  standalone: true,
  imports: [
    AddRabiesSubmissionComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AdddatabtnComponent
  ],
  templateUrl: './add-rabies-submission.component.html',
  styleUrl: './add-rabies-submission.component.scss',
})
export class AddRabiesSubmissionComponent implements OnInit{
  _fb = inject(FormBuilder);
  _authS = inject(AuthService);
  accountID = this._authS.userInfo?.id;
  rabiesSampleForm!: FormGroup;
  currentStep = 1;

  addRabies$ !: Observable<any>
  subsciption : Subscription = new Subscription();


  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();

  addRabiesSamle() {

  }
  emitGetAll() {
    this.getAllMethod.emit(this.subsciption);
  }
  closeModalAdd() {
    this.modalEvent.emit(false);
  }
  ngOnInit(): void {
    this.renderForm();
  }
  changePage(isNextPage: boolean) {
    if (!isNextPage) {
      return this.currentStep--;
    }
    return this.currentStep++;

  }
  
  renderForm() {
    this.rabiesSampleForm = this._fb.group({
      sampleIDFrom: this.accountID,
      residence: ['', Validators.required],
      species: ['', Validators.required],
      breed: ['', Validators.required],
      gender: ['', Validators.required],
      Age: ['', Validators.required],
      typeOfOwnership: ['', Validators.required],
      petManagement: ['', Validators.required],
      causeOfDeath: ['', Validators.required],
      dateOfDeath: ['', Validators.required],
      timeOfDeath: ['', Validators.required],
      puppiesBitchVaccinated: ['', Validators.required],
      dateOfVaccinationpuppies: ['', Validators.required],
      dateofLastvaccination: ['', Validators.required],
      otherVaccinationHistory: ['', Validators.required],
      otherDateofVaccination: ['', Validators.required],
      contactWithAnimal: ['', Validators.required],
      whereContact: ['', Validators.required],
      description: new FormArray([]),
      victimName: ['', Validators.required],
      victimBarangay: ['', Validators.required],
      victimMunicipality: ['', Validators.required],
      victimProvince: ['', Validators.required],
      victimDateBitten: ['', Validators.required],
      victimTimeBitten: ['', Validators.required],
      siteOfBite: ['', Validators.required],
      natureofExposured: ['', Validators.required],
      // delete this
      billingPeriod: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  changeBillingPeriod() {
    let isYearly = this.rabiesSampleForm.controls['billingPeriod'].value;
    if (isYearly) {
      this.billingPeriod = 'yearly';
      this.arcadePlan = 90;
      this.advancedPlan = 120;
      this.proPlan = 150;
      this.onlineService = 10;
      this.storage = 20;
      this.customProfile = 20;
    } else {
      this.billingPeriod = 'monthly';
      this.arcadePlan = 9;
      this.advancedPlan = 12;
      this.proPlan = 15;
      this.onlineService = 1;
      this.storage = 2;
      this.customProfile = 2;
    }
  }
  billingPeriod: 'monthly' | 'yearly' = 'monthly';
  arcadePlan = 9;
  advancedPlan = 12;
  proPlan = 15;
  onlineService = 1;
  storage = 2;
  customProfile = 2;
  total = 9;
}
