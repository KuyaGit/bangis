import {
  Component,
  EventEmitter,
  Input,
  OnInit,
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
import { Subscription, catchError } from 'rxjs';
import { AlertService } from '../../../../core/services/alert.service';
import { HumanvaccineService } from '../../../humanvacination/services/humanvaccine.service';
import { AuthService } from '../../../../core/services/auth.service';
import { AnimalbiteService } from '../../services/animalbite.service';
import { environment } from '../../../../../environments/environment.development';
import { CommonModule, DatePipe } from '@angular/common';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editanimalbite',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LoadingbuttonComponent,
  ],
  providers: [DatePipe],
  templateUrl: './editanimalbite.component.html',
  styleUrl: './editanimalbite.component.scss',
})
export class EditanimalbiteComponent implements OnInit {
  @Output() getAllMethod = new EventEmitter<Subscription>();
  @Output() modalEvent = new EventEmitter<boolean>();
  @Input() animalBiteInfo?: any;
  // Dependency Injection
  animalBiteForm!: FormGroup;
  _alert = inject(AlertService);
  _hvac = inject(HumanvaccineService);
  _fb = inject(FormBuilder);
  _auth = inject(AuthService);
  _aBitevac = inject(AnimalbiteService);
  accountID = this._auth.userInfo?.id;
  themeColor = localStorage.getItem(environment.theme);
  subscription: Subscription = new Subscription();
  isLoadingButton = signal<boolean>(false);
  animalBiteId: number = 0;
  constructor() {
    this.animalBiteForm = this._fb.group({
      // animalBiteFrom: this.accountID,
      AnimalBiteId: [],
      patientName: [{ value: '', disabled: true }],
      Address: [{ value: '', disabled: true }],
      age: [{ value: '', disabled: true }],
      sex: [{ value: '', disabled: true }],
      dateBitten: [{ value: '', disabled: true }],
      bittenAt: [{ value: '', disabled: true }],
      typeOfAnimal: [{ value: '', disabled: true }],
      type: [{ value: '', disabled: true }],
      siteOfBite: [{ value: '', disabled: true }],
      category: [{ value: '', disabled: true }],
      washAfterbite: [{ value: '', disabled: true }],
      dateRigGiven: [{ value: '', disabled: true }],
      route: [{ value: '', disabled: true }],
      dateOfFirstVaccine: [{ value: '', disabled: true }],
      brandNameFirstVaccine: [{ value: '', disabled: true }],
      dateOfSecondVaccine: [''],
      brandNameSecondVaccine: [''],
      dateOfThirdVaccine: [''],
      brandNameThirdVaccine: [''],
      dateOfFourthVaccine: [''],
      brandNameFourthVaccine: [''],
      dateOfFifthVaccine: [''],
      brandNameFifthVaccine: [''],
      outCome: [{ value: '', disabled: true }],
      bittingAnimalStatusafter4Years: [{ value: '', disabled: true }],
      remarks: [{ value: '', disabled: true }],
    });
  }

  updateAnimalBite() {
    const formValue = this.animalBiteForm.value;
    Object.keys(formValue).forEach(key => {
      if (key.startsWith('date')) {
        formValue[key] = formValue[key] ? new Date(formValue[key]).toISOString() : null;
      }
    })
    this._aBitevac
      .update(this.animalBiteId, formValue)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 400) {
            this._alert.handleError(err.error['message']);
          }
          throw err; // rethrow the error to continue handling it in the subscribe block
        })
      )
      .subscribe((res: any) => {
        if (res) {
          this._alert.handleSuccess('Vaccine Updated Successfully');
          this.animalBiteForm.reset();
          this.modalEvent.emit(false);

        }
      });
  }
  emitGetAll() {
    this.getAllMethod.emit(this.subscription);
  }
  hasFirstVaccine : boolean = false
  hasSecondVaccine : boolean = false
  hasThirdVaccine : boolean = false
  hasFourthVaccine : boolean = false
  hasFifthVaccine : boolean = false
  date1st: string = ''
  getFirstVaccine(){
    let firstVac: string = this.animalBiteInfo.dateOfFirstVaccine
    if(firstVac && firstVac !== null) {
      this.hasFirstVaccine = true
      this.date1st = firstVac
    }
    else{
      this.hasFirstVaccine = false
    }
  }
  getSecondVaccine() {
    let secondVac: string = this.animalBiteInfo.dateOfSecondVaccine
    if(secondVac && secondVac !== null) {
      this.hasSecondVaccine = true
    }
    else{
      this.hasSecondVaccine = false
    }
  }
  getThirdVaccine() {
    let thirdVac: string = this.animalBiteInfo.dateOfThirdVaccine
    if(thirdVac && thirdVac !== null) {
      this.hasThirdVaccine = true
    }
    else{
      this.hasThirdVaccine = false
    }
  }
  getFourthVaccine(){
    let fourthVac: string = this.animalBiteInfo.dateOfFourthVaccine
    if(fourthVac && fourthVac !== null) {
      this.hasFourthVaccine = true
    }
    else{
      this.hasFourthVaccine = false
    }
  }
  getFifthVac() {
    let fiftVac = this.animalBiteInfo.dateOfFifthVaccine
    if(fiftVac && fiftVac !== null) {
      this.hasFifthVaccine = true
    }
    else{
      this.hasFifthVaccine = false
    }
  }
  ngOnInit(): void {
    this.getFirstVaccine()
    this.getSecondVaccine()
    this.getThirdVaccine()
    this.getFourthVaccine()
    this.getFifthVac()
    this.animalBiteForm.patchValue(this.animalBiteInfo);
    this.animalBiteId = this.animalBiteInfo.AnimalBiteId;
    this._hvac
      .getAllHumanVaccineByAccount(this._auth.userInfo?.id)
      .subscribe((res: any) => {
        this._hvac.HVacs.set(res);
      });
  }
}
