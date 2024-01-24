import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addanimalbite',
  standalone: true,
  imports: [],
  templateUrl: './addanimalbite.component.html',
  styleUrl: './addanimalbite.component.scss'
})
export class AddanimalbiteComponent {
  @Output() modalEvent = new EventEmitter<boolean>();
}
