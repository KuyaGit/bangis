import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { HVacModel } from '../../models/hvac.interface';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit{
  HVacineForm!: FormGroup;
  @Input() hVacInfo : any;
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllHumanVaccineMethod = new EventEmitter<Subscription>();
  _form = inject(FormBuilder)
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
