import { Component, EventEmitter, Input, OnInit, Output, inject, signal } from '@angular/core';
import { Rabiessubmissioninterface } from '../../models/rabiessubmissioninterface';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription, delay } from 'rxjs';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { CommonModule } from '@angular/common';
import { Labresultinterface } from '../../models/labresultinterface';
import { environment } from '../../../../../environments/environment.development';
import { RabiessubmissionserviceService } from '../../services/rabiessubmissionservice.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-clinicallabresult',
  standalone: true,
  imports: [
    LoadingbuttonComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './clinicallabresult.component.html',
  styleUrl: './clinicallabresult.component.scss',
})
export class ClinicallabresultComponent implements OnInit{
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();
  @Input() information!: Rabiessubmissioninterface | Labresultinterface | any
  labForm!: FormGroup;
  subscription: Subscription = new Subscription();
  _fb = inject(FormBuilder);
  _rabiesS = inject(RabiessubmissionserviceService)
  _alertS = inject(AlertService)
  themeColor = localStorage.getItem(environment.theme);
  isLoadingButton = signal<boolean>(false);

  constructor() {
    this.labForm = this._fb.group({
      sampleIdFrom: [''],
      specimen: ['', Validators.required],
      testMethod: ['', Validators.required],
      fat: ['', Validators.required],
      recommendation: ['', Validators.required],
      diagnosis: ['', Validators.required],
      remarks: ['', Validators.required],
      labAccession: ['', Validators.required],
      dateRecieved: [],
      owner: ['', Validators.required],
      address: ['', Validators.required],
      sender: ['', Validators.required],
      senderAddress: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      gender : [''],
      species: [''],
      breed: [''],
      age: [''],
    });
  }
  addLabResult() {
    console.log('add lab result')
    this.isLoadingButton.set(true);
    this._rabiesS.addRabiesResult(this.labForm.value).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
          this.isLoadingButton.set(false);
          this._alertS.handleError('An error occurred while deleting the user profile');
        }
        throw err;
      })
    ).subscribe((res: any) => {
      if (res.labId) {
        this.isLoadingButton.set(false);
        this.modalEvent.emit(false);
        this._alertS.handleSuccess('Lab result added successfully');

      }
    });
  }
  ngOnInit(): void {
    console.log(this.information);
    this.labForm.patchValue(this.information)
    this.labForm.get('dateReceived')?.setValue(this.information.dateReceived)
    this.labForm.get('gender')?.setValue(this.information.gender)
    this.labForm.get('sampleIdFrom')?.setValue(this.information.sampleId)
    console.log(this.labForm.value);
    console.log(this.themeColor)
  }
}
