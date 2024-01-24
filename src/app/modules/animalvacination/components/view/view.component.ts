import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {
  @Input() animalBiteInfo: any
  @Output() modalEvent = new EventEmitter<boolean>();
}
