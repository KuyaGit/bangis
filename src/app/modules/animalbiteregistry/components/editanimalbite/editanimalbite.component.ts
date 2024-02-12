import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editanimalbite',
  standalone: true,
  imports: [],
  templateUrl: './editanimalbite.component.html',
  styleUrl: './editanimalbite.component.scss'
})
export class EditanimalbiteComponent {
  @Output() getAllMethod = new EventEmitter<Subscription>();
  @Output() modalEvent = new EventEmitter<boolean>();

  

}
