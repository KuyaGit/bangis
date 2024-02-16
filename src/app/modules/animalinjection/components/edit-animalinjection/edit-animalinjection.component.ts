import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnimalinjectionService } from '../../services/animalinjection.service';
import { AdddatabtnComponent } from '../../../../core/components/adddatabtn/adddatabtn.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-animalinjection',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, AdddatabtnComponent],
  templateUrl: './edit-animalinjection.component.html',
  styleUrl: './edit-animalinjection.component.scss'
})
export class EditAnimalinjectionComponent implements OnInit{
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<any>();
  @Input() aInjectionInfo: any;


  // Injected Services
  _avac = inject(AnimalinjectionService)
  _fb = inject(FormBuilder)


  animalInjection$ !: Observable<any>
  animalInjectionForm !: FormGroup;
  ngOnInit(): void {
    this.form();
    this.animalInjectionForm.patchValue(this.aInjectionInfo);
  }


  edit() {
    this.animalInjection$ = this._avac.editAnimalInjection(this.aInjectionInfo?.animalVaccinationId,this.animalInjectionForm.value);
  }

  emitgetAll() {
    this.getAllMethod.emit()
  }
  closeModalEdit() {
    this.modalEvent.emit(false);
  }
  form() {
    this.animalInjectionForm = this._fb.group({
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
}
