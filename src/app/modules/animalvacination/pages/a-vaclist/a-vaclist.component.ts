import { Component, inject, signal } from '@angular/core';
import { AddComponent } from '../../components/add/add.component';
import { EditComponent } from '../../components/edit/edit.component';
import { ViewComponent } from '../../components/view/view.component';
import { CommonModule } from '@angular/common';
import { AvacService } from '../../services/avac.service';

@Component({
  selector: 'app-a-vaclist',
  standalone: true,
  imports: [AddComponent, EditComponent, ViewComponent, CommonModule],
  templateUrl: './a-vaclist.component.html',
  styleUrl: './a-vaclist.component.scss'
})
export class AVaclistComponent {
  aVacModalEdit = signal(false)
  avacModalAdd = signal(false)
  avacModalView = signal(false)

  vacInfo : any;

  // Dependencies Injections
  _avac = inject(AvacService)

  getAllAvac() {
    console.log('Getting all Avac')
  }
}
