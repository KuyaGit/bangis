import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-viewanimalbite',
  standalone: true,
  imports: [],
  templateUrl: './viewanimalbite.component.html',
  styleUrl: './viewanimalbite.component.scss'
})
export class ViewanimalbiteComponent {
  @Output() modalEvent = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();
  @Input()  animalBiteInfo: any
}
