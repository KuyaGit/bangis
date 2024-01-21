import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { HumanvaccineService } from '../../services/humanvaccine.service';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, DatePickerComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllHumanVaccine = new EventEmitter<Subscription>();
  HVacineForm !: FormGroup
  private HVac: Subscription = new Subscription();
  _form = inject(FormBuilder)
  _hVac = inject(HumanvaccineService)
  _alert = inject(AlertService)
  constructor(){
    this.HVacineForm = this._form.group({
      vacName: ['',Validators.required],
      brandName: ['',Validators.required],
      stockQuantity: ['',Validators.required],
      dosage: ['',Validators.required],
      expiryDate: ['',Validators.required]
    })
  }
  setExpiryDate(selectedDate: Date): void {
    this.HVacineForm.controls['expiryDate'].setValue(selectedDate);
  }
  emitGetAllHumanVaccine() {
    this.HVac.add(
      this.getAllHumanVaccine.emit(this.HVac)
    )
  }
  closemodaladd() {
    this.modalEvent.emit(false)
  }
  addhVac() {
    this._hVac.addHVac(this.HVacineForm.value).subscribe(
      (result) => {
        if(result) {
          this._alert.handleSuccess('Human Vaccine added successfully')
          this.closemodaladd()
          this.emitGetAllHumanVaccine();
        }
      }
    )
  }
}
