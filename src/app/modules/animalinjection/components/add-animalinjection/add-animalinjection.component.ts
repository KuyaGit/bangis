import { Component, EventEmitter, Output } from '@angular/core';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-animalinjection',
  standalone: true,
  imports: [DatePickerComponent],
  providers: [DatePipe],
  templateUrl: './add-animalinjection.component.html',
  styleUrl: './add-animalinjection.component.scss'
})
export class AddAnimalinjectionComponent {
  @Output() modalEvent = new EventEmitter<boolean>()



  addAvacInjection() {
    console.log('addAvacInjection')
  }
}
