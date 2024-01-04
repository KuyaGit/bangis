import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  modalEdit !: boolean;
  @Output() modalEvent = new EventEmitter<boolean>();

  closemodaledit() {
    this.modalEvent.emit(false);
  }
}
