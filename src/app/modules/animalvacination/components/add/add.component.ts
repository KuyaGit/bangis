import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { AuthService } from '../../../../core/services/auth.service';
import { AvacService } from '../../services/avac.service';
import { AlertService } from '../../../../core/services/alert.service';
import { Subscription, catchError } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DatePickerComponent,
    LoadingbuttonComponent
  ],
  providers: [DatePipe],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();
  aVacForm!: FormGroup;
  aVac: Subscription = new Subscription();

  _fb = inject(FormBuilder);
  _auth = inject(AuthService);
  _avac = inject(AvacService);
  _alert = inject(AlertService);


  isLoadingButton = signal<boolean>(false);
  themeColor = localStorage.getItem(environment.theme)?.toString();
  constructor() {
    this.aVacForm = this._fb.group({
      AiD: ['', Validators.required],
      vacName: ['', Validators.required],
      brandName: ['', Validators.required],
      stockQuantity: ['', Validators.required],
      dosage: ['', Validators.required],
      expiryDate: ['', Validators.required],
      aVacID: this._auth.userInfo?.id,
    });
  }
  setExpiryDate(selectedDate: Date) {
    this.aVacForm.controls['expiryDate'].setValue(selectedDate);
  }
  addAvac() {
    this._avac.addAvac(this.aVacForm.value).pipe(
      catchError((err : HttpErrorResponse) => {
        if (err.status === 400) {
          this._alert.handleError(err.error['message']);
        }
        throw err; // rethrow the error to continue handling it in the subscribe block
      })
    ).subscribe((res) => {
      if(res) {
        this._alert.handleSuccess('Vaccine Added Successfully');
        this.aVacForm.reset();
        this.modalEvent.emit(false);
        this.emitGetAllHumanVaccine();
      }
    })
  }
  emitGetAllHumanVaccine() {
    this.aVac.add(this.getAllMethod.emit(this.aVac));
  }
}
