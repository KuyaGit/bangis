import { Component, EventEmitter, Output, inject } from '@angular/core';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addanimalbite',
  standalone: true,
  imports: [DatePickerComponent],
  templateUrl: './addanimalbite.component.html',
  styleUrl: './addanimalbite.component.scss'
})
export class AddanimalbiteComponent {
  // Input and Output
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();

  // Dependency Injection
  animalBiteForm !: FormGroup
  fb = inject(FormBuilder);
  constructor() {
    this.animalBiteForm = this.fb.group({
      
    });
  }

}
