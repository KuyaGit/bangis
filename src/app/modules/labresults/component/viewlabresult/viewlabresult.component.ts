import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Labresult } from '../../models/labresult';
import { Subscription } from 'rxjs';
import { Labresultinterface } from '../../../rabiessample/models/labresultinterface';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';

@Component({
  selector: 'app-viewlabresult',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LoadingbuttonComponent],
  templateUrl: './viewlabresult.component.html',
  styleUrl: './viewlabresult.component.scss'
})
export class ViewlabresultComponent implements OnInit{
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();
  @Input() information!: Labresult;
  labForm !: FormGroup;
  _fb = inject(FormBuilder);
  constructor() {
    this.labForm = this._fb.group({
      sampleIdFrom: [{ value: '', disabled: true }],
      specimen: [{ value: '', disabled: true }],
      testMethod: [{ value: '', disabled: true }],
      fat: [{ value: '', disabled: true }],
      recommendation: [{ value: '', disabled: true }],
      diagnosis: [{ value: '', disabled: true }],
      remarks: [{ value: '', disabled: true }],
      labAccession: [{ value: '', disabled: true }],
      dateReported: [ {value: '', disabled: true }],
      owner: [{ value: '', disabled: true }],
      address: [{ value: '', disabled: true }],
      sender: [{ value: '', disabled: true }],
      senderAddress: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }],
      contactNumber: [{ value: '', disabled: true }],
      gender : [{ value: '', disabled: true }],
      species: [{ value: '', disabled: true }],
      breed: [{ value: '', disabled: true }],
      age: [{ value: '', disabled: true }],
    });
  }
  ngOnInit(): void {
    this.labForm.patchValue(this.information);
  }
}
