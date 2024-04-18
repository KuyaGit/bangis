import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject,
  signal,
} from '@angular/core';
import { AddanimalbiteComponent } from '../../components/addanimalbite/addanimalbite.component';
import { EditanimalbiteComponent } from '../../components/editanimalbite/editanimalbite.component';
import { ViewanimalbiteComponent } from '../../components/viewanimalbite/viewanimalbite.component';
import { CommonModule } from '@angular/common';
import { Subscription, map } from 'rxjs';
import { AnimalbiteService } from '../../services/animalbite.service';
import { HasRoleDirective } from '../../../../hasRole.directive';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { environment } from '../../../../../environments/environment.development';
import { AuthService } from '../../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { AnimalbiteInterface } from '../../models/animalbite';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { AlertService } from '../../../../core/services/alert.service';
import { ArchiveLabresultComponent } from '../../../labresults/pages/archive-labresult/archive-labresult.component';
import { ArchivedAnimalBiteComponent } from '../archived-animal-bite/archived-animal-bite.component';

@Component({
  selector: 'app-animalbitelist',
  standalone: true,
  imports: [
    AddanimalbiteComponent,
    EditanimalbiteComponent,
    ViewanimalbiteComponent,
    CommonModule,
    HasRoleDirective,
    ExportexcelbtnComponent,
    FullPageLoaderComponent,
    FormsModule,
    LoadingbuttonComponent,
    ArchivedAnimalBiteComponent
  ],
  templateUrl: './animalbitelist.component.html',
  styleUrl: './animalbitelist.component.scss',
})
export class AnimalbitelistComponent implements OnInit {
  modalAdd = signal<boolean>(false);
  modalView = signal<boolean>(false);
  modalEdit = signal<boolean>(false);

  animalBiteInfo: any;
  isLoadingButton = signal<boolean>(false);
  @Output() getAllAnimalBiteMethod = new EventEmitter<Subscription>();
  @Output() modalEvent = new EventEmitter<boolean>();
  // Dependency Injection
  _animalbite = inject(AnimalbiteService);
  _auth = inject(AuthService);
  _alert = inject(AlertService);
  // Baryabols
  isVisiblePageLoader: boolean = false;
  fileName: string = 'animalbite.xlsx';
  subsciption: Subscription = new Subscription();
  accountID = this._auth.userInfo?.id;
  themeColor = localStorage.getItem(environment.theme)?.toString();
  loadingColor = this._auth.loadingColor();
  // Methods
  items: AnimalbiteInterface[] = [];
  getAllAnimalBite() {
    if (this._auth.userInfo?.accountType === 'agri') {
      this.subsciption.add(
        this._animalbite.getAllPatient().subscribe((res) => {
          res.sort((a, b) => {
            return a.AnimalBiteId - b.AnimalBiteId;
          });
          this._animalbite.aniList.set(res);
          this.items = this._animalbite.aniList();
        })
      );
    } else {
      this.subsciption.add(
        this._animalbite
          .getAllPatientsByAbtc(Number(this.accountID))
          .subscribe((res) => {
            res.sort((a, b) => {
              return a.AnimalBiteId - b.AnimalBiteId;
            });
            this._animalbite.aniList.set(res);
            this.items = this._animalbite.aniList();
          })
      );
    }
  }

  openViewModal(id: number) {
    this._animalbite.getAnimalBiteById(id).subscribe((res) => {
      this.animalBiteInfo = res;
      this.modalView.set(true);
    });
  }
  openEditModal(id: number) {
    this._animalbite.getAnimalBiteById(id).subscribe((res) => {
      this.animalBiteInfo = res;
      this.modalEdit.set(true);
    });
  }
  delete(id: number) {
    this._alert.simpleAlert(
      'warning',
      'Warning',
      'Are you sure you want to archived this Data?',
      () => {
        this._animalbite.delete(id, "Dummy").subscribe(
          (result: any) => {
            if (result["AnimalBiteId"] == id) {
              this._alert.handleSuccess('Data archived successfully');
              this.getAllAnimalBite();
            } else {
              this._alert.handleError('Failed to archived Data');
            }
          },
          (error) => {
            this._alert.handleError(
              'An error occurred while arhiving Data'
            );
            console.error(error);
          }
        );
      }
    );
  }
  searchText: string = '';
  applyFilter() {
    this.isLoadingButton.set(true);
    if (this.searchText === '') {
      this.getAllAnimalBite();
      this.isLoadingButton.set(false);
      return;
    }
    this.items = this.items.filter(item =>
      item.patientName.toLowerCase().includes(this.searchText.toLowerCase())
    )
    this.isLoadingButton.set(false);
  }
  ngOnInit(): void {
    this.getAllAnimalBite();
    this.loadingColor = this._auth.checkUser();
  }
  isArchivedTable = signal<boolean>(false);
  triggerTable(){
    if(this.isArchivedTable() == true){
      this.getAllAnimalBite();
      this.isArchivedTable.set(false);
    }
    if(this.isArchivedTable() == false){
      this.isArchivedTable.set(true);
    }
  }
}
