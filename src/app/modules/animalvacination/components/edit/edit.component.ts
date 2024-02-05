import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription, every } from 'rxjs';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { CommonModule, DatePipe } from '@angular/common';
import { AvacService } from '../../services/avac.service';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{
  @Input() animalVacInfo: any
  @Output() modalEvent= new EventEmitter<boolean>()
  @Output() getAllMethod = new EventEmitter<any>();

  aVacForm!: FormGroup;

  _alert = inject(AlertService)
  _avac = inject(AvacService)
  fb = inject(FormBuilder)
  thisaVacForm() {
    this.aVacForm = this.fb.group({
      Aid: [''],
      vacName: [''],
      brandName: [''],
      stockQuantity: [''],
      dosage: [''],
      expiryDate: [''],
    });

  }
  updateAvacStocks() {
    this._avac.update(this.animalVacInfo.Aid ,this.aVacForm.value).subscribe((res) => {
      this._alert.handleSuccess('Vaccine Stocks updated successfully');
      this.emitGetAllHumanVaccine();
      this.closeModalEdit();
    }, (error) =>{
      this._alert.handleError('An error occurred while updating the vaccine');
      console.error(error);
    });
  }
  closeModalEdit() {
    this.modalEvent.emit(false);
    this.emitGetAllHumanVaccine();
  }

  emitGetAllHumanVaccine() {
    this.getAllMethod.emit(new Subscription());
  }
  ngOnInit(): void {
    this.thisaVacForm();
    this.aVacForm.patchValue(this.animalVacInfo);
  }
}
