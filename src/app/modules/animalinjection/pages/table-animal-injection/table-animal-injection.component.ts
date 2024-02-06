import { Component, inject, signal } from '@angular/core';
import { AnimalinjectionService } from '../../services/animalinjection.service';
import { CommonModule, DatePipe } from '@angular/common';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { AddAnimalinjectionComponent } from '../../components/add-animalinjection/add-animalinjection.component';
import { EditAnimalinjectionComponent } from '../../components/edit-animalinjection/edit-animalinjection.component';
import { ViewAnimalinjectionComponent } from '../../components/view-animalinjection/view-animalinjection.component';

@Component({
  selector: 'app-table-animal-injection',
  standalone: true,
  imports: [CommonModule, AddAnimalinjectionComponent, EditAnimalinjectionComponent, ViewAnimalinjectionComponent],

  templateUrl: './table-animal-injection.component.html',
  styleUrl: './table-animal-injection.component.scss'
})
export class TableAnimalInjectionComponent {
  // Signal
  avacModalViewInject = signal(false)
  avacModalEditInject = signal(false)
  avacModalAddInject = signal(false)


  // Injections
  _avacInjectList = inject(AnimalinjectionService)


  // Method
  openAvacInjectViewModal() {
    this.avacModalViewInject.set(true)
    console.log('openAvacInjectViewModal')
  }
  openAvacEditInjectModal() {
    console.log('openAvacEditInjectModal')
  }
}
