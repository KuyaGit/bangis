import { Component, EventEmitter, Input, Output } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  @Input() animalBiteInfo: any
  @Output() modalEvent= new EventEmitter<boolean>()
  
}
