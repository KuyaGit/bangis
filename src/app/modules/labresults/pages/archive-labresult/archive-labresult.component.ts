import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { ViewlabresultComponent } from '../../component/viewlabresult/viewlabresult.component';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { CommonModule } from '@angular/common';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { FormsModule } from '@angular/forms';
import { Subscription, catchError } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { AlertService } from '../../../../core/services/alert.service';
import { AuthService } from '../../../../core/services/auth.service';
import { LabservicesService } from '../../services/labservices.service';
import { Labresult } from '../../models/labresult';

@Component({
  selector: 'app-archive-labresult',
  standalone: true,
  imports: [
    ViewlabresultComponent,
    FullPageLoaderComponent,
    LoadingbuttonComponent,
    CommonModule,
    ExportexcelbtnComponent,
    FormsModule,
  ],
  templateUrl: './archive-labresult.component.html',
  styleUrl: './archive-labresult.component.scss',
})
export class ArchiveLabresultComponent {
  @Output() archivedTable = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();

  fileName: string = 'labresults.xlsx';
  themeColor = localStorage.getItem(environment.theme)?.toString();
  modalAdd = signal<boolean>(false);
  modalEdit = signal<boolean>(false);
  modalView = signal<boolean>(false);
  subcription: Subscription = new Subscription();
  _labservice = inject(LabservicesService);
  _authS = inject(AuthService);
  _alert = inject(AlertService);
  accountID = this._authS.userInfo?.id;
  labresult!: Labresult;
  openViewModal(id: any) {
    this._labservice.getRabiesResultById(id).subscribe((res: Labresult[]) => {
      this.labresult = res[0];
      this.modalView.set(true);
    });
  }
  getAllLabResults() {
    this.subcription.add(
      this._labservice
        .getAllLabResultsByAccountArchived(Number(this.accountID))
        .subscribe((res: Labresult[]) => {
          this._labservice.results.set(res);
          this.items = this._labservice.results();
        })
    );
  }
  closeArchiveTable() {
    this.getAllMethod.emit(this.subcription);
    this.archivedTable.emit(false);
  }
  restoreResult(id: string) {
    this._alert.simpleAlert(
      'warning',
      'Warning',
      'Are you sure you want to restore this Result?',
      () => {
        this._labservice.restoreRabiesResult(id).subscribe(
          (result) => {
            if (result['labId'] == id) {
              this._alert.handleSuccess('Result restored successfully');
              this.getAllLabResults();
            } else {
              this._alert.handleError('Failed to restore result');
            }
          },
          (error) => {
            this._alert.handleError('An error occurred while arhiving Result');
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
    this.isLoadingButton.set(true);
    if (this.searchText === '') {
      this.getAllLabResults();
      this.isLoadingButton.set(false);
      return;
    }
    this.items = this.items.filter((item) =>
      item.owner.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.isLoadingButton.set(false);
  }
  ngOnInit(): void {
    this.getAllLabResults();
  }
}
