import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { AlertService } from '../../../../core/services/alert.service';
import { AuthService } from '../../../../core/services/auth.service';
import { HumanvaccineService } from '../../../humanvacination/services/humanvaccine.service';
import { AnimalbiteService } from '../../services/animalbite.service';
import { WashafterbiteService } from '../../../animalinjection/services/washafterbite.service';
import { Washafterbite } from '../../../animalinjection/models/washafterbite';

@Component({
  selector: 'app-viewanimalbite',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './viewanimalbite.component.html',
  styleUrl: './viewanimalbite.component.scss'
})
export class ViewanimalbiteComponent implements OnInit{
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();
  @Input()  animalBiteInfo: any

  animalBiteForm!: FormGroup;
  _alert = inject(AlertService);
  _hvac = inject(HumanvaccineService);
  _fb = inject(FormBuilder);
  _auth = inject(AuthService);
  _aBitevac = inject(AnimalbiteService);
  accountID = this._auth.userInfo?.id;
  themeColor = localStorage.getItem(environment.theme);
  subsciption: Subscription = new Subscription();
  isLoadingButton = signal<boolean>(false);
  constructor() {
    this.animalBiteForm = this._fb.group({
      animalBiteIDFrom: this.accountID,
      animalbiteId: [{ value: '', disabled: true }],
      patientName:[{ value: '', disabled: true }],
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
      dateOfSecondVaccine: [{ value: '', disabled: true }],
      brandNameSecondVaccine: [{ value: '', disabled: true }],
      dateOfThirdVaccine: [{ value: '', disabled: true }],
      brandNameThirdVaccine: [{ value: '', disabled: true }],
      dateOfFourthVaccine: [{ value: '', disabled: true }],
      brandNameFourthVaccine: [{ value: '', disabled: true }],
      dateOfFifthVaccine: [{ value: '', disabled: true }],
      brandNameFifthVaccine: [{ value: '', disabled: true }],
      outCome: [{ value: '', disabled: true }],
      bittingAnimalStatusafter4Years: [{ value: '', disabled: true }],
      remarks: [{ value: '', disabled: true }],
    });
  }
  wash = inject(WashafterbiteService)
  washAfter : Washafterbite[] = []
  ngOnInit(): void {
    this.washAfter = this.wash.washafterbite
    this._hvac
      .getAllHumanVaccineByAccount(this._auth.userInfo?.id)
      .subscribe((res: any) => {
        this._hvac.HVacs.set(res);
      });
    this.animalBiteForm.patchValue(this.animalBiteInfo)
  }
}
