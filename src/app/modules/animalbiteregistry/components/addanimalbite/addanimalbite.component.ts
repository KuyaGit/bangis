import { Component, EventEmitter, Output } from '@angular/core';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';

@Component({
  selector: 'app-addanimalbite',
  standalone: true,
  imports: [DatePickerComponent],
  templateUrl: './addanimalbite.component.html',
  styleUrl: './addanimalbite.component.scss'
})
export class AddanimalbiteComponent {
  @Output() modalEvent = new EventEmitter<boolean>();


}
