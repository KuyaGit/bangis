import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HumanvaccineService } from '../../services/humanvaccine.service';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [DatePickerComponent, FormsModule, ReactiveFormsModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  @Output() getAllHumanVaccineMethod = new EventEmitter<Subscription>();
  @Output() modalEvent = new EventEmitter<boolean>();
  HVacineForm!: FormGroup;
  @Input() hVacInfo : any;
  _form = inject(FormBuilder)
  datePipe = inject(DatePipe)
  hvac = inject(HumanvaccineService)
  _alert = inject(AlertService)
  constructor() {
    this.HVacineForm = this._form.group({
      Hid: [''],
      vacName: [''],
      brandName: [''],
      stockQuantity: [''],
      dosage: [''],
      expiryDate: [''],
    });
  }

  hVac : Subscription = new Subscription();

  updateHvac() {
    this.hvac.update(this.hVacInfo.Hid ,this.HVacineForm.value).subscribe((res) => {
      this._alert.handleSuccess('Vaccine updated successfully');
      this.emitGetAllHumanVaccine();
      this.closemodalview();
    }, (error) =>{
      this._alert.handleError('An error occurred while updating the vaccine');
      console.error(error);
    });
  }
  emitGetAllHumanVaccine() {
    this.hVac.add(
      this.getAllHumanVaccineMethod.emit(this.hVac)
    )
  }
  closemodalview() {
    this.modalEvent.emit(false);
  }

  ngOnInit(): void {
    this.HVacineForm.patchValue(this.hVacInfo);
  }
}
