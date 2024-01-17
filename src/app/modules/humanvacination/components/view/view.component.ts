import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HVacModel } from '../../models/hvac.interface';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {
  @Input() hVacInfo : HVacModel | undefined = undefined;
  @Output() modalEvent = new EventEmitter<boolean>();
}
