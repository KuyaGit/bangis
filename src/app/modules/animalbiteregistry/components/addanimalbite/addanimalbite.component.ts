import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../../core/services/alert.service';
import { HumanvaccineService } from '../../../humanvacination/services/humanvaccine.service';
import { AuthService } from '../../../../core/services/auth.service';
import { HVacModel } from '../../../humanvacination/models/hvac.interface';

@Component({
  selector: 'app-addanimalbite',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './addanimalbite.component.html',
  styleUrl: './addanimalbite.component.scss'
})
export class AddanimalbiteComponent implements OnInit{
  // Input and Output
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();

  // Dependency Injection
  animalBiteForm !: FormGroup
  _alert = inject(AlertService)
  _hvac = inject(HumanvaccineService)
  fb = inject(FormBuilder);
  _auth = inject(AuthService)
  constructor() {
    this.animalBiteForm = this.fb.group({

    });
  }
  addAnimalBite() {
    console.log('Animal Bite')
  }
  ngOnInit(): void {
    this._hvac.getAllHumanVaccineByAccount(this._auth.userInfo?.id).subscribe((res : any) => {
      this._hvac.HVacs.set(res)
    })
  }
}
