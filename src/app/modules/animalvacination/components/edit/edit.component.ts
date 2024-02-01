import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription, every } from 'rxjs';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { CommonModule, DatePipe } from '@angular/common';

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

  fb = inject(FormBuilder)
  thisaVacForm() {
    this.aVacForm = this.fb.group({
      AiD: [''],
      vacName: [''],
      brandName: [''],
      stockQuantity: [''],
      dosage: [''],
      expiryDate: [''],
      aVacID: [''],
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
