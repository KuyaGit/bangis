import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';
import { AlertService } from '../../../../core/services/alert.service';
import { AuthService } from '../../../../core/services/auth.service';
import { AnimalbiteInterface } from '../../models/animalbite';
import { AnimalbiteService } from '../../services/animalbite.service';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { ViewanimalbiteComponent } from '../../components/viewanimalbite/viewanimalbite.component';
import { EditanimalbiteComponent } from '../../components/editanimalbite/editanimalbite.component';

@Component({
  selector: 'app-archived-animal-bite',
  standalone: true,
  imports: [
    CommonModule,
    FullPageLoaderComponent,
    FormsModule,
    LoadingbuttonComponent,
    ExportexcelbtnComponent,
    ViewanimalbiteComponent,
    EditanimalbiteComponent,
  ],
  templateUrl: './archived-animal-bite.component.html',
  styleUrl: './archived-animal-bite.component.scss',
})
export class ArchivedAnimalBiteComponent {
  @Output() archivedTable = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();
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
    this.subsciption.add(
      this._animalbite
      .getAllPatientsByAbtcArchived(Number(this.accountID))
      .subscribe((res) => {
        res.sort((a, b) => {
          return a.AnimalBiteId - b.AnimalBiteId;
        });
        this._animalbite.aniList.set(res);
        this.items = this._animalbite.aniList();
        console.log(this.items)
      })
    )
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
        this._animalbite.delete(id, 'Dummy').subscribe(
          (result: any) => {
            if (result['AnimalBiteId'] == id) {
              this._alert.handleSuccess('Data archived successfully');
              this.getAllAnimalBite();
            } else {
              this._alert.handleError('Failed to archived Data');
            }
          },
          (error) => {
            this._alert.handleError('An error occurred while arhiving Data');
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
    this.items = this.items.filter((item) =>
      item.patientName.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.isLoadingButton.set(false);
  }
  closeArchiveTable() {
    this.getAllMethod.emit(this.subsciption);
    this.archivedTable.emit(false);
  }
  ngOnInit(): void {
    this.getAllAnimalBite();
    this.loadingColor = this._auth.checkUser();
    console.log(this.loadingColor);
  }
}
