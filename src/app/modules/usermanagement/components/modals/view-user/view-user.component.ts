import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent {
  modalView !: boolean;
  @Output() modalEvent = new EventEmitter<boolean>();

  closemodalview() {
    this.modalEvent.emit(false);
  }
}
