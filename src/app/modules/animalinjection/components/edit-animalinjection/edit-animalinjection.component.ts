import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnimalinjectionService } from '../../services/animalinjection.service';
import { AdddatabtnComponent } from '../../../../core/components/adddatabtn/adddatabtn.component';
import { Observable, catchError } from 'rxjs';
import { AvacService } from '../../../animalvacination/services/avac.service';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../../../../core/services/alert.service';
import { environment } from '../../../../../environments/environment.development';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-edit-animalinjection',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, AdddatabtnComponent, LoadingbuttonComponent],
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
  _avacS = inject(AvacService)
  _alert = inject(AlertService)
  _auth = inject(AuthService)
  animalInjection$ !: Observable<any>
  animalInjectionForm !: FormGroup;
  isLoadingButton = signal<boolean>(false)
  themeColor = localStorage.getItem(environment.theme)

  ngOnInit(): void {
    if(this._auth.userInfo?.accountType == 'abtc') {
      this._avacS.getAllAvac().subscribe((res:any) => {
        this._avacS.avacList.set(res)
      })
    }else {
      this._avacS
      .getAllAvacByAccount(this._auth.userInfo?.id)
      .subscribe((res: any) => {
        this._avacS.avacList.set(res);
      });
    }
    this.form();
    this.animalInjectionForm.patchValue(this.aInjectionInfo);
  }


  edit() {
    let id = this.aInjectionInfo.animalVaccinationId
    this.isLoadingButton.set(true)
    this._avac.editAnimalInjection(id ,this.animalInjectionForm.value).pipe(
      catchError((err : HttpErrorResponse) => {
        if (err.status === 400) {
          this._alert.handleError(err.error['message']);
        }
        throw err; // rethrow the error to continue handling it in the subscribe block
      })
    ).subscribe(
      (res: any) => {
        if(res) {
          this._alert.handleSuccess("Update Successfully")
          this.emitgetAll()
          this.modalEvent.emit(false)
        }
      }
    )
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
      registerId: ['',[Validators.required, Validators.pattern("^[0-9]*$")]],
      neutered : ['',Validators.required],
      origin : ['',Validators.required],
      remarks : ['',Validators.required],
      vaccinator : ['',Validators.required],
    })
  }
}
