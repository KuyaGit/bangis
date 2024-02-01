import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { AuthService } from '../../../../core/services/auth.service';
import { AvacService } from '../../services/avac.service';
import { AlertService } from '../../../../core/services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, DatePickerComponent],
  providers: [DatePipe],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  @Output() modalEvent= new EventEmitter<boolean>()
  @Output() getAllMethod = new EventEmitter<Subscription>();
  aVacForm !: FormGroup
  aVac  : Subscription = new Subscription();


  _fb = inject(FormBuilder)
  _auth = inject(AuthService)
  _avac = inject(AvacService)
  _alert = inject(AlertService)
  constructor() {
    this.aVacForm = this._fb.group({
      AiD: ['', Validators.required],
      vacName: ['',Validators.required],
      brandName: ['',Validators.required],
      stockQuantity: ['',Validators.required],
      dosage: ['',Validators.required],
      expiryDate: ['',Validators.required],
      aVacID: this._auth.userInfo?.id,
    })
  }
  setExpiryDate(selectedDate: Date) {
    this.aVacForm.controls['expiryDate'].setValue(selectedDate);
  }
  addAvac() {
    this._avac.addAvac(this.aVacForm.value).subscribe((res) => {
      this._alert.handleSuccess('Animal Vaccine Added Successfully')
      this.emitGetAllHumanVaccine()
      this.modalEvent.emit(false)
    })
  }
  emitGetAllHumanVaccine() {
    this.aVac.add(
      this.getAllMethod.emit(this.aVac)
    )
  }
}
