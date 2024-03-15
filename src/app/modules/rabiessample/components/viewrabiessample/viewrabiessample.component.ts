import { CommonModule, DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  signal,
} from '@angular/core';
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
import { Labresultinterface } from '../../models/labresultinterface';
import { environment } from '../../../../../environments/environment.development';

export interface behaviorChanges {
  id: number;
  value: string;
  name: string;
  description: string;
}

export interface otherIllness {
  id: number;
  value: string;
  name: string;
  description: string;
}

export interface siteofExposure {
  id: number;
  value: string;
  name: string;
  description: string;
}
export interface natureofExposure {
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
  providers: [DatePipe],
  templateUrl: './viewrabiessample.component.html',
  styleUrl: './viewrabiessample.component.scss',
})
export class ViewrabiessampleComponent {
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();
  @Input() information!: Rabiessubmissioninterface | Labresultinterface;
  rabiesSampleForm!: FormGroup;
  subscription: Subscription = new Subscription();
  themeColor = localStorage.getItem(environment.theme)
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
      residence: [{ value: '', disabled: true }],
      species: [{ value: '', disabled: true }],
      breed: [{ value: '', disabled: true }],
      gender: [{ value: '', disabled: true }],
      age: [{ value: '', disabled: true }],
      typeOfOwnership: [{ value: '', disabled: true }],
      petManagement: [{ value: '', disabled: true }],
      causeOfDeath: [{ value: '', disabled: true }],
      dateOfDeath: [{ value: '', disabled: true }],
      timeOfDeath: [{ value: '', disabled: true }],
      puppiesBitchVaccinated: [{ value: '', disabled: true }],
      dateOfVaccinationpuppies: [{ value: '', disabled: true }],
      dateofLastvaccination: [{ value: '', disabled: true }],
      otherVaccinationHistory: [{ value: '', disabled: true }],
      otherDateofVaccination: [{ value: '', disabled: true }],
      contactWithAnimal: [{ value: '', disabled: true }],
      whereContact: [{ value: '', disabled: true }],
      victimName: [{ value: '', disabled: true }],
      victimAge: [{ value: '', disabled: true }],
      victimGender: [{ value: '', disabled: true }],
      victimBarangay: [{ value: '', disabled: true }],
      victimMunicipality: [{ value: '', disabled: true }],
      victimProvince: [{ value: '', disabled: true }],
      victimDateBitten: [{ value: '', disabled: true }],
      victimTimeBitten: [{ value: '', disabled: true }],
      siteOfBite: [{ value: '', disabled: true }],
      natureofExposured: [{ value: '', disabled: true }],
      biteProvoked: [{ value: '', disabled: true }],
      locationofBite: [{ value: '', disabled: true }],
      siteOfExposureOther: [''],
      locationofBiteOther: [''],
      otherVictims: [{ value: '', disabled: true }],
      treatmentRecieved: [{ value: '', disabled: true }],
      treatmentRecievedOther: [''],
      treatmentRecievedType: [{ value: '', disabled: true }],
      DateofTreatment: [{ value: '', disabled: true }],
      sampleId: [{ value: '', disabled: true }],
      explainProvoked: [{ value: '', disabled: true }],
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
