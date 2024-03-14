import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdddatabtnComponent } from '../../../../core/components/adddatabtn/adddatabtn.component';
import { AnimalinjectionService } from '../../services/animalinjection.service';
import { AvacService } from '../../../animalvacination/services/avac.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-view-animalinjection',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AdddatabtnComponent,
  ],
  templateUrl: './view-animalinjection.component.html',
  styleUrl: './view-animalinjection.component.scss',
})
export class ViewAnimalinjectionComponent implements OnInit {
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllAnimalVaccinated = new EventEmitter<Subscription>();
  @Input() aInjectionInfo: any;

  subscribe: Subscription = new Subscription();
  animalInjectionForm!: FormGroup;
  _fb = inject(FormBuilder);
  _auth = inject(AuthService);
  constructor() {
    // Form
    this.animalInjectionForm = this._fb.group({
      animalVaccineUsedID: [{ value: '', disabled: true }],
      ownerName: [{ value: '', disabled: true }],
      birthdate: [{ value: '', disabled: true }],
      contactNumber: [{ value: '', disabled: true }],
      ownerSex: [{ value: '', disabled: true }],
      barangay: [{ value: '', disabled: true }],
      petName: [{ value: '', disabled: true }],
      species: [{ value: '', disabled: true }],
      breed: [{ value: '', disabled: true }],
      petSex: [{ value: '', disabled: true }],
      age: [{ value: '', disabled: true }],
      color: [{ value: '', disabled: true }],
      registerId: [{ value: '', disabled: true }],
      neutured: [{ value: '', disabled: true }],
      origin: [{ value: '', disabled: true }],
      remarks: [{ value: '', disabled: true }],
      vaccinator: [{ value: '', disabled: true }],
    });
  }

  _avac = inject(AnimalinjectionService);
  _avacS = inject(AvacService);
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
    this.animalInjectionForm.patchValue(this.aInjectionInfo);
  }
}
