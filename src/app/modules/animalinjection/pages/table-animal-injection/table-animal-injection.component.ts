import { Component, OnInit, inject, signal } from '@angular/core';
import { AnimalinjectionService } from '../../services/animalinjection.service';
import { CommonModule, DatePipe } from '@angular/common';
import { DatePickerComponent } from '../../../../core/components/date-picker/date-picker.component';
import { AddAnimalinjectionComponent } from '../../components/add-animalinjection/add-animalinjection.component';
import { EditAnimalinjectionComponent } from '../../components/edit-animalinjection/edit-animalinjection.component';
import { ViewAnimalinjectionComponent } from '../../components/view-animalinjection/view-animalinjection.component';
import { HasRoleDirective } from '../../../../hasRole.directive';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { Animalinjection } from '../../models/animalinjection';

@Component({
  selector: 'app-table-animal-injection',
  standalone: true,
  imports: [
    CommonModule,
    AddAnimalinjectionComponent,
    EditAnimalinjectionComponent,
    ViewAnimalinjectionComponent,
    HasRoleDirective,
    ExportexcelbtnComponent,
    FullPageLoaderComponent
  ],

  templateUrl: './table-animal-injection.component.html',
  styleUrl: './table-animal-injection.component.scss',
})
export class TableAnimalInjectionComponent implements OnInit {
  // Signal
  avacModalViewInject = signal(false);
  avacModalEditInject = signal(false);
  avacModalAddInject = signal(false);

  // Baryabols
  fileName : string = 'animalvaccinated.xlsx'

  // Injections
  _avacInjectList = inject(AnimalinjectionService);
  _auth = inject(AuthService);
  // Subscriptions
  subscription: Subscription = new Subscription();
  // Method
  animalInjectionInfo: Animalinjection[] = [];
  openAvacInjectViewModal(id: number): void {
    this.subscription.add(
      this._avacInjectList.getAvacInjectInfoByID(id).subscribe((res: Animalinjection[])=>{
        this.animalInjectionInfo = res;
      })
    )
    this.avacModalViewInject.set(true);
    console.log('openAvacInjectViewModal');
  }
  openAvacEditInjectModal() {
    console.log('openAvacEditInjectModal');
    this.avacModalEditInject.set(true);
  }

  getAllAnimalVacinated() {
    if (this._auth.userInfo?.accountType == 'agri') {
      this.subscription.add(
        this._avacInjectList
          .getallAvacInjectListByAccount(this._auth.userInfo?.id)
          .subscribe((res: any) => {
            this._avacInjectList.avacInjectList.set(res);
          })
      );
    } else {
      this.subscription.add(
        this._avacInjectList.getAllAvacInjectList().subscribe((res: any) => {
          this._avacInjectList.avacInjectList.set(res);
        })
      );
    }
  }
  ngOnInit(): void {
    this.getAllAnimalVacinated();
  }
}
