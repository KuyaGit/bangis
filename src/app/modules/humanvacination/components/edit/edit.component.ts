import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  @Output() getAllHumanVaccineMethod = new EventEmitter<Subscription>();
  @Output() modalEvent = new EventEmitter<boolean>();

}
