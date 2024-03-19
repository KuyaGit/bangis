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
import { environment } from '../../../../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';

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
    FullPageLoaderComponent,
    FormsModule,
    LoadingbuttonComponent
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
  fileName: string = 'animalvaccinated.xlsx';
  themeColor = localStorage.getItem(environment.theme)?.toString();
  // Injections
  _avacInjectList = inject(AnimalinjectionService);
  _auth = inject(AuthService);
  // Subscriptions
  subscription: Subscription = new Subscription();
  // Method
  animalInjectionInfo!: any;
  openAvacInjectViewModal(id: number): void {
    this.subscription.add(
      this._avacInjectList
        .getAvacInjectInfoByID(id)
        .subscribe((res: Animalinjection[]) => {
          this.animalInjectionInfo = res;
          this.avacModalViewInject.set(true);
        })
    );
  }
  openAvacEditInjectModal(id: number) {
    this.subscription.add(
      this._avacInjectList.getAvacInjectInfoByID(id).subscribe((res: any) => {
        this.animalInjectionInfo = res;
        this.avacModalEditInject.set(true);
      })
    );
  }
  searchText: string = '';
  items: Animalinjection[] = [];
  isLoadingButton = signal<boolean>(false)
  applyFilter() {
    this.isLoadingButton.set(true)
    if (this.searchText === '') {
      this.getAllAnimalVacinated();
      this.isLoadingButton.set(false)
      return;
    }
    this.items = this.items.filter((item) =>
      item.ownerName.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.isLoadingButton.set(false)
  }
  getAllAnimalVacinated() {
    if (this._auth.userInfo?.accountType == 'agri') {
      this.subscription.add(
        this._avacInjectList
          .getallAvacInjectListByAccount(this._auth.userInfo?.id)
          .subscribe((res: any) => {
            res.sort((a: any, b: any) => {
              return a.AnimalInjectionId - b.AnimalInjectionId;
            });
            this._avacInjectList.avacInjectList.set(res);
            this.items = this._avacInjectList.avacInjectList();
          })
      );
    } else {
      this.subscription.add(
        this._avacInjectList.getAllAvacInjectList().subscribe((res: any) => {
          res.sort((a: any, b: any) => {
            return a.AnimalInjectionId - b.AnimalInjectionId;
          });
          this._avacInjectList.avacInjectList.set(res);
          this.items = this._avacInjectList.avacInjectList();
        })
      );
    }
  }
  ngOnInit(): void {
    this.getAllAnimalVacinated();
  }
}
