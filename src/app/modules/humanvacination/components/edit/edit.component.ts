import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { CommonModule, DatePipe } from '@angular/common';

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
