import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit{
  @Input() aVacInfo: any
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();
  aVacForm!: FormGroup;

  fb = inject(FormBuilder)

  ngOnInit(): void {
    console.log(this.aVacInfo)
    this.thisaVacForm();
    this.aVacForm.patchValue(this.aVacInfo);
  }

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
  closemodalview() {
    this.modalEvent.emit(false);
    this.emitGetAllHumanVaccine();
  }

  emitGetAllHumanVaccine() {
    this.getAllMethod.emit(new Subscription());
  }

}
