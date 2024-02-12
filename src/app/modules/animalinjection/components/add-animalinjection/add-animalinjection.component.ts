import { Component, EventEmitter, OnInit, Output, inject, signal } from '@angular/core';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AvacService } from '../../../animalvacination/services/avac.service';
import { Subscription } from 'rxjs';
import { AnimalinjectionService } from '../../services/animalinjection.service';
import { AlertService } from '../../../../core/services/alert.service';

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
    animalVaccineUsedID: [null,[Validators.required, Validators.pattern("^[0-9]*$")]],
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

  addAvacInjection() {
    // Assuming this.animalInjectionForm.value contains the data for the animal vaccination
    this._avacVac.addAnimalVac(this.animalInjectionForm.value).subscribe((res) => {
      // Set isLoading to true to show loading spinner or message
      this.isLoading.set(true) ;

      // Handle success after 3000 milliseconds
      setTimeout(() => {
        if(this.isLoading()) { // Check if isLoading is still true after 3000 milliseconds
          this._alert.handleSuccess('Animal Vaccine Added Successfully');
          this.emitGetAllAnimalVaccinated();
          this.modalEvent.emit(false);
          this.isLoading.set(false); // Reset isLoading after success handling
        }
      }, 3000);
    });
}

  // addAvacInjection() {
  //   this._avacVac.addAnimalVac(this.animalInjectionForm.value).subscribe((res) => {
  //     this._alert.handleSuccess('Animal Vaccine Added Successfully')
  //     this.emitGetAllAnimalVaccinated()
  //     this.modalEvent.emit(false)
  //   })
  // }

  ngOnInit(): void {
      this.isLoading.set(false)
      this._avac.getAllAvac().subscribe((res: any) => {
        this._avac.avacList.set(res)
      })
  }
}
