import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdddatabtnComponent } from '../../../../core/components/adddatabtn/adddatabtn.component';
import { AnimalinjectionService } from '../../services/animalinjection.service';

@Component({
  selector: 'app-view-animalinjection',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, AdddatabtnComponent],
  templateUrl: './view-animalinjection.component.html',
  styleUrl: './view-animalinjection.component.scss'
})
export class ViewAnimalinjectionComponent {
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllAnimalVaccinated = new EventEmitter<Subscription>();
  @Input() aInjectionInfo: any;

  subscribe : Subscription = new Subscription();
  animalInjectionForm!: FormGroup;


  _avac = inject(AnimalinjectionService)
  
}
