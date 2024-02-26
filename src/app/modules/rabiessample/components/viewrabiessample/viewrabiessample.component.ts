import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { Subscription } from 'rxjs';
import { RabiessubmissionserviceService } from '../../services/rabiessubmissionservice.service';
import { Rabiessubmissioninterface } from '../../models/rabiessubmissioninterface';

export interface behaviorChanges{
  id: number;
  value: string;
  name: string;
  description: string;
}

export interface otherIllness{
  id: number;
  value: string;
  name: string;
  description: string;
}

export interface siteofExposure{
  id: number;
  value: string;
  name: string;
  description: string;
}
export interface natureofExposure{
  id: number;
  value: string;
  name: string;

}


@Component({
  selector: 'app-viewrabiessample',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoadingbuttonComponent,
  ],
  templateUrl: './viewrabiessample.component.html',
  styleUrl: './viewrabiessample.component.scss',
})
export class ViewrabiessampleComponent {
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();
  @Input() information !: Rabiessubmissioninterface
  rabiesSampleForm!: FormGroup;
  subscription: Subscription = new Subscription();

  currentStep: number = 1;
  isLoadingButton = signal<boolean>(false);

  behaviorChanges: behaviorChanges[] = [];
  otherIllnesses: otherIllness[] = [];
  natureofExposure: natureofExposure[] = [];
  siteofExposure: siteofExposure[] = [];

  _fb = inject(FormBuilder);
  changePage(isNextPage: boolean) {
    if (!isNextPage) {
      return this.currentStep--;
    }
    return this.currentStep++;
  }
  incrementCurrentStep() {
    this.currentStep++;
  }
  decrementCurrentStep() {
    this.currentStep--;
  }
  renderForm() {
    this.rabiesSampleForm = this._fb.group({
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
      otherVictim: [''],
      treatmentRecieved: ['', Validators.required],
      treatmentRecievedOther: [''],
      treatmentRecievedType: ['', Validators.required],
      DateofTreatment: ['', Validators.required],
      sampleId: ['', Validators.required],
      explainProvoked: ['', Validators.required],
    });
  }
  closeModalAdd() {
    this.modalEvent.emit(false);
    this.getAllMethod.emit(this.subscription);
  }
  ngOnInit(): void {
    this.renderForm();
    this.behaviorChanges = this.information.behaviorChanges;
    this.otherIllnesses = this.information.otherIllnesses;
    this.rabiesSampleForm.patchValue(this.information);
  }
}
