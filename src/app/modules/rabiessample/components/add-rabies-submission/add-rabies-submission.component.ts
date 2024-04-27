import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject,
  signal,
} from '@angular/core';
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
import { Observable, Subscription, catchError } from 'rxjs';
import { RabiessubmissionserviceService } from '../../services/rabiessubmissionservice.service';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { AlertService } from '../../../../core/services/alert.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';

export interface RabiesSample {
  id: number;
  name: string;
  value: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-add-rabies-submission',
  standalone: true,
  imports: [
    AddRabiesSubmissionComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    LoadingbuttonComponent,
  ],
  templateUrl: './add-rabies-submission.component.html',
  styleUrl: './add-rabies-submission.component.scss',
})
export class AddRabiesSubmissionComponent implements OnInit {
  _fb = inject(FormBuilder);
  _authS = inject(AuthService);
  accountID = this._authS.userInfo?.id;
  rabiesSampleForm!: FormGroup;
  currentStep = 1;
  isLoadingButton = signal<boolean>(false);

  addRabies$!: Observable<any>;
  subsciption: Subscription = new Subscription();
  isRequired: boolean = false;
  _rabiesSampleS = inject(RabiessubmissionserviceService);
  _alertS = inject(AlertService);
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();
  themeColor = localStorage.getItem(environment.theme);
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
  isFirstRequired: boolean = false;
  incrementCurrentStep() {
    if (
      !this.rabiesSampleForm.get('residence')?.value ||
      !this.rabiesSampleForm.get('species')?.value ||
      !this.rabiesSampleForm.get('breed')?.value ||
      !this.rabiesSampleForm.get('gender')?.value ||
      !this.rabiesSampleForm.get('age')?.value ||
      !this.rabiesSampleForm.get('typeOfOwnership')?.value ||
      !this.rabiesSampleForm.get('petManagement')?.value ||
      !this.rabiesSampleForm.get('causeOfDeath')?.value ||
      !this.rabiesSampleForm.get('dateOfDeath')?.value ||
      !this.rabiesSampleForm.get('timeOfDeath')?.value ||
      !this.rabiesSampleForm.get('dateofLastvaccination')?.value ||
      !this.rabiesSampleForm.get('otherVaccinationHistory')?.value ||
      !this.rabiesSampleForm.get('contactWithAnimal')?.value
    ) {
      this.isFirstRequired = true;
      this._alertS.handleError('Please fill in all required fields');
    } else {
      this.currentStep++;
    }
  }
  decrementCurrentStep() {
    this.currentStep--;
  }
  siteofExposure: any[] = [
    { value: 'Head' },
    { value: 'Neck' },
    { value: 'Trunk' },
    { value: 'Upper Extremities' },
    { value: 'Lower Extremities' },
    { value: 'Upper Extremities' },
    { value: 'Lower Extremities' },
    { value: 'Others' },
  ];
  natureofExposure: any[] = [
    { value: 'Bite' },
    { value: 'Scratch' },
    { value: 'Non-Bite' },
    { value: 'Single' },
    { value: 'Multiple' },
    { value: 'Mild' },
    { value: 'Moderate' },
    { value: 'Severe' },
  ];

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
    if (this.behaviorChanges.length == 0) {
      this.behaviorChanges.push(this.behaviorChanges[0]);
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
      age: ['', Validators.required],
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
      victimName: ['', Validators.required],
      victimAge: ['', Validators.required],
      victimGender: ['', Validators.required],
      victimBarangay: ['', Validators.required],
      victimMunicipality: ['', Validators.required],
      victimProvince: ['', Validators.required],
      victimDateBitten: ['', Validators.required],
      victimTimeBitten: ['', Validators.required],
      siteOfBite: ['', Validators.required],
      natureofExposured: ['', Validators.required],
      biteProvoked: ['', Validators.required],
      locationofBite: ['', Validators.required],
      siteOfExposureOther: [''],
      locationofBiteOther: [''],
      otherVictims: [''],
      treatmentRecieved: ['', Validators.required],
      treatmentRecievedOther: [''],
      treatmentRecievedType: ['', Validators.required],
      DateofTreatment: ['', Validators.required],
      sampleId: ['', Validators.required],
      explainProvoked: ['', Validators.required],
      otherVaccinationHistoryOther: [''],
      causeOfDeathOther: [''],
      whereContactOthers: [''],
    });
    console.log('On init')
  }

  arrayofDescription: any[] = [];
  onCheckboxChangeofBehaviorChangeEvent($event: any) {
    const isChecked = $event.target.checked;
    const value = $event.target.value; // Assuming 'value' holds the text of the checkbox

    if (isChecked) {
      this.arrayofDescription.push(value);
    } else {
      const index = this.arrayofDescription.indexOf(value);
      if (index > -1) {
        this.arrayofDescription.splice(index, 1);
      }
    }
  }
  arrayofIllness: any[] = [];
  onCheckboxChangeofOtherIllnessEvent($event: any) {
    const isChecked = $event.target.checked;
    const value = $event.target.value; // Assuming 'value' holds the text of the checkbox

    if (isChecked) {
      this.arrayofIllness.push(value);
    } else {
      const index = this.arrayofIllness.indexOf(value);
      if (index > -1) {
        this.arrayofIllness.splice(index, 1);
      }
    }
  }
  addRabiesSample() {
    // causeOfDeathOther || whereContactOthers || treatmentRecievedOther || otherVaccinationHistoryOther || siteOfExposureOther || locationofBiteOther
    if(
      !this.rabiesSampleForm.get('victimName')?.value ||
      !this.rabiesSampleForm.get('victimAge')?.value ||
      !this.rabiesSampleForm.get('victimGender')?.value ||
      !this.rabiesSampleForm.get('victimBarangay')?.value ||
      !this.rabiesSampleForm.get('victimMunicipality')?.value ||
      !this.rabiesSampleForm.get('victimProvince')?.value ||
      !this.rabiesSampleForm.get('victimDateBitten')?.value ||
      !this.rabiesSampleForm.get('victimTimeBitten')?.value ||
      !this.rabiesSampleForm.get('siteOfBite')?.value ||
      !this.rabiesSampleForm.get('natureofExposured')?.value ||
      !this.rabiesSampleForm.get('biteProvoked')?.value ||
      !this.rabiesSampleForm.get('locationofBite')?.value ||
      !this.rabiesSampleForm.get('treatmentRecieved')?.value ||
      !this.rabiesSampleForm.get('treatmentRecievedType')?.value ||
      !this.rabiesSampleForm.get('DateofTreatment')?.value
    ){
      this._alertS.handleError('Please fill in all required fields');
      this.isRequired = true;
      this.isLoadingButton.set(false);
      return;
    } else{
      if(this.rabiesSampleForm.controls['causeOfDeathOther'].value){
        this.rabiesSampleForm.controls['causeOfDeath'].setValue(this.rabiesSampleForm.controls['causeOfDeathOther'].value);
      }
      if(this.rabiesSampleForm.controls['whereContactOthers'].value){
        this.rabiesSampleForm.controls['whereContact'].setValue(this.rabiesSampleForm.controls['whereContactOthers'].value);
      }
      if(this.rabiesSampleForm.controls['treatmentRecievedOther'].value){
        this.rabiesSampleForm.controls['treatmentRecieved'].setValue(this.rabiesSampleForm.controls['treatmentRecievedOther'].value);
      }
      if(this.rabiesSampleForm.controls['otherVaccinationHistoryOther'].value){
        this.rabiesSampleForm.controls['otherVaccinationHistory'].setValue(this.rabiesSampleForm.controls['otherVaccinationHistoryOther'].value);
      }
      if(this.rabiesSampleForm.controls['siteOfExposureOther'].value){
        this.rabiesSampleForm.controls['siteOfBite'].setValue(this.rabiesSampleForm.controls['siteOfExposureOther'].value);
      }
      if(this.rabiesSampleForm.controls['locationofBiteOther'].value){
        this.rabiesSampleForm.controls['locationofBite'].setValue(this.rabiesSampleForm.controls['locationofBiteOther'].value);
      }
      if (this.rabiesSampleForm.invalid) {
        this._alertS.handleError('Please fill in all required fields');
        this.isRequired = true;
        this.isLoadingButton.set(false);
      }
      this.isLoadingButton.set(true);
      if (this.arrayofDescription.length == 0) {
        this.arrayofDescription.push('None');
      }
      if (this.arrayofIllness.length == 0) {
        this.arrayofIllness.push('None');
      }
      this.subsciption.add(
        this._rabiesSampleS
          .addRabiesSampleSubmission(
            this.rabiesSampleForm.value,
            this.arrayofDescription,
            this.arrayofIllness
          )
          .pipe(
            catchError((error: HttpErrorResponse) => {
              if (error.status === 400) {
                this.isLoadingButton.set(false);
                this._alertS.handleError(error.error['message']);
                this.closeModalAdd();
              }
              if (error.status === 500) {
                this._alertS.handleError(error.error['message'])
              }
              throw error; // rethrow the error to continue handling it in the subscribe block
            })
          )
          .subscribe((res: any) => {
            this.isLoadingButton.set(false);
            if (res.id) {
              this.rabiesSampleForm.reset();
              this.isLoadingButton.set(false);
              this.closeModalAdd();
              this._alertS.handleSuccess('Successfully Added');
              this.emitGetAll();
            }
          })
      );

    }
      }
  // Push the value changes
}
