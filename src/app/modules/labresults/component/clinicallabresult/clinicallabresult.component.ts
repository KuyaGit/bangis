import { Component, EventEmitter, Input, OnInit, Output, inject, signal } from '@angular/core';
import { Rabiessubmissioninterface } from '../../../rabiessample/models/rabiessubmissioninterface';
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
import { Labresultinterface } from '../../../rabiessample/models/labresultinterface';
import { environment } from '../../../../../environments/environment.development';
import { RabiessubmissionserviceService } from '../../../rabiessample/services/rabiessubmissionservice.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../../../../core/services/alert.service';
import { LabservicesService } from '../../services/labservices.service';
import { AuthService } from '../../../../core/services/auth.service';

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
export class ClinicallabresultComponent{
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
  _authS = inject(AuthService)
  _labS = inject(LabservicesService)
  accountID = this._authS.userInfo?.id;
  constructor() {
    this.labForm = this._fb.group({
      accountFromID: this.accountID,
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
  isRequired: boolean = false;
  addLabResult() {
    this.isLoadingButton.set(true);
    if(!this.labForm.get('specimen')?.value || !this.labForm.get('testMethod')?.value || !this.labForm.get('fat')?.value || !this.labForm.get('recommendation')?.value || !this.labForm.get('diagnosis')?.value || !this.labForm.get('remarks')?.value || !this.labForm.get('labAccession')?.value || !this.labForm.get('owner')?.value || !this.labForm.get('address')?.value || !this.labForm.get('sender')?.value || !this.labForm.get('senderAddress')?.value || !this.labForm.get('email')?.value || !this.labForm.get('contactNumber')?.value){
      console.log('Error', this.labForm.value)
      this._alertS.handleError('Please fill in all required fields');
      this.isRequired = true;
      this.isLoadingButton.set(false);
    } else {
      this._labS.addRabiesResult(this.labForm.value).pipe(
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
          this.getAllMethod.emit(this.subscription);
        }
      });
    }
  }
}
