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
    AdddatabtnComponent,
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

  addRabies$!: Observable<any>;
  subsciption: Subscription = new Subscription();

  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();

  behaviorChanges: Array<any> = [
    { name: 'Restlessness', value: 'Restlessness' },
    { name: 'Apprehensive Watchful look', value: 'Apprehensive Watchful look' },
    { name: 'Unprovoked Aggressiveness', value: 'Unprovoked Aggressiveness' },
    { name: 'Aimless Running', value: 'Aimless Running' },
    { name: 'Eating Inanimate Objects', value: 'Eating Inanimate Objects' },
    { name: 'Drooling', value: 'Drooling' },
    { name: 'Paralysis', value: 'Paralysis' },
  ];
  otherIllness: Array<any>= [
    {
      name: 'Diarrhea',
      value: 'otheDiarrhears',
    },
    {
      name: 'Vomiting',
      value: 'Vomiting',
    },
    {
      name: 'Inappetence',
      value: 'Inappetence',
    },
    {
      name: 'Jaundice',
      value: 'Jaundice',
    },
    {
      name: 'Skin Lesions',
      value: 'Skin Lesions',
    },
    {
      name: 'Lethargy/Weakness',
      value: 'Lethargy/Weakness',
    },
    {
      name: 'Nasal/ocular discharge',
      value: 'Nasal/ocular discharge',
    },
    {
      name: 'Convulsions',
      value: 'Convulsions',
    },
  ];
  onCheckboxChange(e: any) {
    const description: FormArray = this.rabiesSampleForm.get('description') as FormArray;
    return description.push(this._fb.control(e.target.value));
  }

  addRabiesSamle() {}
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
      description: this._fb.array([this._fb.control('')]),
      victimName: ['', Validators.required],
      victimBarangay: ['', Validators.required],
      victimMunicipality: ['', Validators.required],
      victimProvince: ['', Validators.required],
      victimDateBitten: ['', Validators.required],
      victimTimeBitten: ['', Validators.required],
      siteOfBite: ['', Validators.required],
      natureofExposured: ['', Validators.required],
      causeOfDeathOther: [''],
      otherVaccinationHistoryOther: [''],
    });
  }
}
