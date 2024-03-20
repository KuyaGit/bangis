import { Component, EventEmitter, OnInit, Output, inject, signal } from '@angular/core';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AvacService } from '../../../animalvacination/services/avac.service';
import { Subscription, catchError } from 'rxjs';
import { AnimalinjectionService } from '../../services/animalinjection.service';
import { AlertService } from '../../../../core/services/alert.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-animalinjection',
  standalone: true,
  imports: [DatePickerComponent, FormsModule, ReactiveFormsModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './add-animalinjection.component.html',
  styleUrl: './add-animalinjection.component.scss'
})
export class AddAnimalinjectionComponent implements OnInit{
  @Output() modalEvent = new EventEmitter<boolean>()
  @Output() getAllAnimalVaccinated = new EventEmitter<Subscription>()


  // Injected Services
  _auth = inject(AuthService)
  _fb = inject(FormBuilder)
  _avac = inject(AvacService)
  _avacVac = inject(AnimalinjectionService)
  _alert = inject(AlertService)

  // Variables
  accountId = this._auth.userInfo?.id
  animalInjectionForm !: FormGroup
  isLoading =  signal(false)

  // Subscriptions
  subscription : Subscription = new Subscription();


  constructor() {
    // Form
  this.animalInjectionForm = this._fb.group({
    animalVaccinationIDFrom: this.accountId,
    animalVaccineUsedID: ['',Validators.required],
    ownerName: ['',Validators.required],
    birthdate: ['',Validators.required],
    contactNumber: ['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    ownerSex: ['', Validators.required],
    barangay: ['',Validators.required],
    petName: ['',Validators.required],
    species: ['',Validators.required],
    breed: ['',Validators.required],
    petSex: ['',Validators.required],
    age: ['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    color: ['',Validators.required],
    registeredId: ['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    neutured : ['',Validators.required],
    origin : ['',Validators.required],
    remarks : ['',Validators.required],
    vaccinator : ['',Validators.required],
  })
  }

  emitGetAllAnimalVaccinated() {
      this.subscription.add(
        this.getAllAnimalVaccinated.emit(this.subscription)
      )
  }
  isRequired : boolean = false;
  addAvacInjection() {

    this.isLoading.set(true)
    if(!this.animalInjectionForm.controls['ownerName'].value || !this.animalInjectionForm.controls['birthdate'].value || !this.animalInjectionForm.controls['contactNumber'].value || !this.animalInjectionForm.controls['ownerSex'].value || !this.animalInjectionForm.controls['barangay'].value || !this.animalInjectionForm.controls['petName'].value || !this.animalInjectionForm.controls['species'].value || !this.animalInjectionForm.controls['breed'].value || !this.animalInjectionForm.controls['petSex'].value || !this.animalInjectionForm.controls['age'].value || !this.animalInjectionForm.controls['color'].value || !this.animalInjectionForm.controls['registeredId'].value || !this.animalInjectionForm.controls['neutured'].value || !this.animalInjectionForm.controls['origin'].value || !this.animalInjectionForm.controls['remarks'].value || !this.animalInjectionForm.controls['vaccinator'].value) {
      this._alert.handleError('All fields are required');
      this.isRequired = true;
      this.isLoading.set(false);
      return;
    }
    // Assuming this.animalInjectionForm.value contains the data for the animal vaccination
    this._avacVac.addAnimalVac(this.animalInjectionForm.value).pipe(
      catchError((err : HttpErrorResponse) => {
        if (err.status === 400) {
          this._alert.handleError(err.error['message']);
        }
        throw err; // rethrow the error to continue handling it in the subscribe block
      })
    )
    .subscribe((res) => {
      this.isLoading.set(false) ;
      if(res) {
        this._alert.handleSuccess('Vaccine Added Successfully');
        this.animalInjectionForm.reset();
        this.modalEvent.emit(false);
        this.emitGetAllAnimalVaccinated();
      };
    });
}
  ngOnInit(): void {
      this.isLoading.set(false)
      this._avac.getAllAvacByAccount(this.accountId).subscribe((res: any) => {
        this._avac.avacList.set(res)
      })
  }
}
