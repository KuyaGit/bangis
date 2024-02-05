import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { AddanimalbiteComponent } from '../../components/addanimalbite/addanimalbite.component';
import { EditanimalbiteComponent } from '../../components/editanimalbite/editanimalbite.component';
import { ViewanimalbiteComponent } from '../../components/viewanimalbite/viewanimalbite.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AnimalbiteService } from '../../services/animalbite.service';
import { HasRoleDirective } from '../../../../hasRole.directive';

@Component({
  selector: 'app-animalbitelist',
  standalone: true,
  imports: [AddanimalbiteComponent, EditanimalbiteComponent, ViewanimalbiteComponent, CommonModule, HasRoleDirective],
  templateUrl: './animalbitelist.component.html',
  styleUrl: './animalbitelist.component.scss'
})
export class AnimalbitelistComponent {
  modalAdd = signal<boolean>(false);
  modalView = signal<boolean>(false);
  modalEdit = signal<boolean>(false);


  animalBiteInfo : any;

  @Output() getAllAnimalBiteMethod = new EventEmitter<Subscription>();
  @Output() modalEvent = new EventEmitter<boolean>();


  // Dependency Injection
  _animalbite = inject(AnimalbiteService)


  // Methods
  getAllAnimalBite() {
    console.log('getAllAnimalBite')
  }
}
