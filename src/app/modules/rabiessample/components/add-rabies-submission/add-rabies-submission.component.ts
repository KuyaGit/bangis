import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

import { AdddatabtnComponent } from '../../../../core/components/adddatabtn/adddatabtn.component';
import { Observable, Subscription } from 'rxjs';

<<<<<<< Updated upstream
=======
export interface RabiesSample {
  id: number;
  name: string;
  value: string;
  isChecked: boolean;
}
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
  addRabiesSamle() {
=======
  behaviorChanges: RabiesSample[] = [
    { id: 1, name: 'Restlessness', value: 'Restlessness', isChecked: false },
    {
      id: 2,
      name: 'Apprehensive Watchful look',
      value: 'Apprehensive Watchful look',
      isChecked: false,
    },
    {
      id: 3,
      name: 'Unprovoked Aggressiveness',
      value: 'Unprovoked Aggressiveness',
      isChecked: false,
    },
    {
      id: 4,
      name: 'Aimless Running',
      value: 'Aimless Running',
      isChecked: false,
    },
    {
      id: 5,
      name: 'Eating Inanimate Objects',
      value: 'Eating Inanimate Objects',
      isChecked: false,
    },
    { id: 6, name: 'Drooling', value: 'Drooling', isChecked: false },
    { id: 7, name: 'Paralysis', value: 'Paralysis', isChecked: false },
  ];
  otherIllness: Array<any> = [
    {
      name: 'Diarrhea',
      value: 'otheDiarrhears',
      isChecked: false,
    },
    {
      name: 'Vomiting',
      value: 'Vomiting',
      isChecked: false,
    },
    {
      name: 'Inappetence',
      value: 'Inappetence',
      isChecked: false,
    },
    {
      name: 'Jaundice',
      value: 'Jaundice',
      isChecked: false,
    },
    {
      name: 'Skin Lesions',
      value: 'Skin Lesions',
      isChecked: false,
    },
    {
      name: 'Lethargy/Weakness',
      value: 'Lethargy/Weakness',
      isChecked: false,
    },
    {
      name: 'Nasal/ocular discharge',
      value: 'Nasal/ocular discharge',
      isChecked: false,
    },
    {
      name: 'Convulsions',
      value: 'Convulsions',
      isChecked: false,
    },
  ];
  onCheckboxChange(e: any) {
    const description: FormArray = this.rabiesSampleForm.get(
      'description'
    ) as FormArray;
    return description.push(this._fb.control(e.target.value));
  }
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream

  }
  
=======
  }
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      description: new FormArray([]),
=======
      description: this.arrayofDescription,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

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
=======
  get getOnBehaviorChanges(): FormArray {
    return this.rabiesSampleForm.get('description') as FormArray;
  }
  arrayofDescription: any[] = [];
  onCheckboxChangeEvent($event: any) {
    const isChecked = $event.target.checked;
    const value = $event.target.value; // Assuming 'value' holds the text of the checkbox

    if (isChecked) {
      this.arrayofDescription.push(value);
    } else {
      const index = this.arrayofDescription.indexOf(value);
      if (index > -1) {
        this.arrayofDescription.splice(index, 1);
      }
      if(this.arrayofDescription.length === 0){
        this.arrayofDescription.push('None');
      }
    }

  }

  // Push the value changes
>>>>>>> Stashed changes
}
