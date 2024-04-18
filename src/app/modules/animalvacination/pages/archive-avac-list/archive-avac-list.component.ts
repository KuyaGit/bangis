import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { ViewComponent } from '../../components/view/view.component';
import { EditComponent } from '../../components/edit/edit.component';
import { environment } from '../../../../../environments/environment.development';
import { AlertService } from '../../../../core/services/alert.service';
import { AuthService } from '../../../../core/services/auth.service';
import { AVacsModel } from '../../models/avac.interface';
import { AvacService } from '../../services/avac.service';

@Component({
  selector: 'app-archive-avac-list',
  standalone: true,
  imports: [
    FullPageLoaderComponent,
    FormsModule,
    CommonModule,
    LoadingbuttonComponent,
    ExportexcelbtnComponent,
    ViewComponent,
    EditComponent
  ],
  templateUrl: './archive-avac-list.component.html',
  styleUrl: './archive-avac-list.component.scss'
})
export class ArchiveAvacListComponent {
  @Output() archivedTable = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();
  // Signals
  aVacModalEdit = signal(false);
  avacModalAdd = signal(false);
  avacModalView = signal(false);
  isLoadingButton = signal(false);
  isArchivedTable = signal(false)
  // Baryabols
  vacInfo: any;
  fileName: string = 'vaccineinventory.xlsx';
  datatoExport: any = '';
  themeColor = localStorage.getItem(environment.theme)?.toString();

  // Subscriptions
  subAvac: Subscription = new Subscription();
  // Dependencies Injections
  _avac = inject(AvacService);
  _auth = inject(AuthService);
  _alert = inject(AlertService);

  // Methods
  getAllAvac() {
    if (this._auth.userInfo?.accountType == 'agri') {
      this.subAvac.add(
        this._avac
          .getAllAvacByAccount(this._auth.userInfo?.id)
          .subscribe((res: any) => {
            res.sort((a: any, b: any) => {
              return a.AiD - b.AiD;
            })
            this._avac.avacList.set(res);
            this.items = this._avac.avacList();
          })
      );
    } else {
      this.subAvac.add(
        this._avac.getAllAvac().subscribe((res: any) => {
          this._avac.avacList.set(res);
          this.items = this._avac.avacList();
        })
      );
    }
  }

  triggerTable(){
    if(this.isArchivedTable() == true){
      this.getAllAvac();
      this.isArchivedTable.set(false);
    }
    if(this.isArchivedTable() == false){
      this.isArchivedTable.set(true);
    }
  }
  openAvacViewModal(AiD: number) {
    this.subAvac.add(
      this._avac.getVaccineById(AiD).subscribe((response) => {
        console.log(response)
        this.vacInfo = response;
        this.avacModalView.set(true);
      })
    );
  }
  openAvacEditModal(id: number) {
    this.subAvac.add(
      this._avac.getVaccineById(id).subscribe((response) => {
        this.vacInfo = response;
        this.aVacModalEdit.set(true);
      })
    );
  }
  searchText: string = '';
  items: AVacsModel[] = [];
  applyFilter() {
    this.isLoadingButton.set(true)
    if (this.searchText === '') {
      this.getAllAvac();
      this.isLoadingButton.set(false)
      return;
    }
    this.items = this.items.filter((item) =>
      item.vacName.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.isLoadingButton.set(false)
  }
  ngOnInit(): void {
    this.getAllAvac();
  }
  delete(id: number) {
    this._alert.simpleAlert(
      'warning',
      'Warning',
      'Are you sure you want to archived this Data?',
      () => {
        console.log(id);
        this._avac.delete(id, "Dummy").subscribe(
          (result: any) => {
            if (result["Aid"] == id) {
              this._alert.handleSuccess('Data archived successfully');
              this.getAllAvac();
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
}
