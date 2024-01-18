import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, DatePickerComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  @Output() modalEvent = new EventEmitter<boolean>();
  HVacineForm !: FormGroup
  private HVac: Subscription = new Subscription();
  _form = inject(FormBuilder)
  constructor(){
    this.HVacineForm = this._form.group({
      vacName: ['',Validators.required],
      brandName: ['',Validators.required],
      stockQuantity: ['',Validators.required],
      dosage: ['',Validators.required],
      expiryDate: ['',Validators.required]
    })
  }
  closemodaladd() {
    this.modalEvent.emit(false)
  }
  addhVac() {
    console.log(this.HVacineForm.value)
  }
}
