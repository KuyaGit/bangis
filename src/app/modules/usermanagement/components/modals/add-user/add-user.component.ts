import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  modalAdd !: boolean;
  _alert = Inject
  @Output() modalEvent = new EventEmitter<boolean>();

  closemodaladd() {
    this.modalEvent.emit(false);
  }
}
