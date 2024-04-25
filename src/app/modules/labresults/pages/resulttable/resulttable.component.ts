import { Component, OnInit, inject, signal } from '@angular/core';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { CommonModule } from '@angular/common';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { LabservicesService } from '../../services/labservices.service';
import { environment } from '../../../../../environments/environment.development';
import { ClinicallabresultComponent } from '../../component/clinicallabresult/clinicallabresult.component';
import { AuthService } from '../../../../core/services/auth.service';
import { Labresult } from '../../models/labresult';
import { Subscription } from 'rxjs';
import { ViewlabresultComponent } from '../../component/viewlabresult/viewlabresult.component';
import { FormsModule } from '@angular/forms';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { AlertService } from '../../../../core/services/alert.service';
import { ArchiveLabresultComponent } from '../archive-labresult/archive-labresult.component';
import { HasRoleDirective } from '../../../../hasRole.directive';

@Component({
  selector: 'app-resulttable',
  standalone: true,
  imports: [
    FullPageLoaderComponent,
    CommonModule,
    ExportexcelbtnComponent,
    ClinicallabresultComponent,
    ViewlabresultComponent,
    FormsModule,
    LoadingbuttonComponent,
    ArchiveLabresultComponent,
    HasRoleDirective
  ],
  templateUrl: './resulttable.component.html',
  styleUrl: './resulttable.component.scss',
})
export class ResulttableComponent implements OnInit {
  fileName: string = 'labresults.xlsx';
  themeColor = localStorage.getItem(environment.theme)?.toString();
  modalAdd = signal<boolean>(false);
  modalEdit = signal<boolean>(false);
  modalView = signal<boolean>(false);
  subcription: Subscription = new Subscription();
  _labservice = inject(LabservicesService);
  _authS = inject(AuthService);
  _alert = inject(AlertService)
  accountID = this._authS.userInfo?.id;
  labresult !: Labresult
  openViewModal(id: any) {
    this._labservice.getRabiesResultById(id).subscribe((res: Labresult[]) => {
      this.labresult = res[0];
      this.modalView.set(true);
    });
  }
  openEditModal(id: any) {}
  getAllLabResults() {
    if (this._authS.userInfo?.accountType === 'agri') {
      this._labservice.getAllLabResults().subscribe((res: any) => {
        this._labservice.results.set(res);
        this.items = this._labservice.results();
      });
    } else {
      this.subcription.add(
        this._labservice
          .getAllLabResultsByAccount(Number(this.accountID))
          .subscribe((res: Labresult[]) => {
            this._labservice.results.set(res);
            this.items = this._labservice.results();
          })
      );
    }
  }
  deleteResult(id: string) {
    this._alert.simpleAlert(
      'warning',
      'Warning',
      'Are you sure you want to archived this Result?',
      () => {
        this._labservice.deleteRabiesResult(id).subscribe(
          (result) => {
            if (result["labId"] == id) {
              this._alert.handleSuccess('Result archived successfully');
              this.getAllLabResults();
            } else {
              this._alert.handleError('Failed to archived result');
            }
          },
          (error) => {
            this._alert.handleError(
              'An error occurred while arhiving Result'
            );
            console.error(error);
          }
        );
      }
    );
  }
  searchText: string = '';
  items: Labresult[] = [];
  isLoadingButton = signal<boolean>(false);
  applyFilter() {
    this.isLoadingButton.set(true)
    if (this.searchText === '') {
      this.getAllLabResults();
      this.isLoadingButton.set(false)
      return;
    }
    this.items = this.items.filter((item) =>
      item.owner.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.isLoadingButton.set(false)
  }
  isArchivedTable =signal<boolean>(false);
  triggerTable(){
    if(this.isArchivedTable() == true){
      this.getAllLabResults();
      this.isArchivedTable.set(false);
    }
    if(this.isArchivedTable() == false){
      this.isArchivedTable.set(true);
    }
  }
  ngOnInit(): void {
    this.getAllLabResults();
  }
}
