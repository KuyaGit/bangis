import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { ViewrabiessampleComponent } from '../../components/viewrabiessample/viewrabiessample.component';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { Subscription, catchError } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { AlertService } from '../../../../core/services/alert.service';
import { AuthService } from '../../../../core/services/auth.service';
import { RabiessubmissionserviceService } from '../../services/rabiessubmissionservice.service';
import { Labresultinterface } from '../../models/labresultinterface';
import { Rabiessubmissioninterface } from '../../models/rabiessubmissioninterface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-archived-rabies-submission',
  standalone: true,
  imports: [
    FullPageLoaderComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ExportexcelbtnComponent,
    ViewrabiessampleComponent,
    LoadingbuttonComponent,
  ],
  templateUrl: './archived-rabies-submission.component.html',
  styleUrl: './archived-rabies-submission.component.scss',
})
export class ArchivedRabiesSubmissionComponent {
  @Output() archivedTable = new EventEmitter<boolean>();
  @Output() getAllMethod = new EventEmitter<Subscription>();

  searchText = '';
  modalAddRabiesSubmission = signal<boolean>(false);
  themeColor = localStorage.getItem(environment.theme);
  subscription = new Subscription();
  fileName = 'rabies_submission_list.xlsx';
  _authS = inject(AuthService);
  _rabiesS = inject(RabiessubmissionserviceService);
  _alertS = inject(AlertService);
  accountID = this._authS.userInfo?.id;

  modalViewRabiesSample = signal<boolean>(false);
  modalClinicalLabResult = signal<boolean>(false);
  information!: Rabiessubmissioninterface | Labresultinterface;

  openViewRabiesSampleModal(id: number) {
    this._rabiesS
      .getRabiesSampleSubmissionById(id)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            this._alertS.handleError('Rabies Sample not found');
          }
          throw error;
        })
      )
      .subscribe((res: any) => {
        this.information = res;
        this.modalViewRabiesSample.set(true);
      });
  }

  closeArchiveTable() {
    this.getAllMethod.emit(this.subscription);
    this.archivedTable.emit(false);
  }
  openClinicalLabUpdate(id: number) {
    this._rabiesS
      .getRabiesSampleSubmissionById(id)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            this._alertS.handleError('Rabies Sample not found');
          }
          throw error;
        })
      )
      .subscribe((res: any) => {
        this.information = res;
        this.modalClinicalLabResult.set(true);
      });
  }
  getAllRabiesSubmission() {
    this._rabiesS
      .getAllRabiesSampleSubmissionByAccountArchived(Number(this.accountID))
      .subscribe((res: any) => {
        this._rabiesS.rabiesList.set(res);
        this.items = this._rabiesS.rabiesList();
      });
  }
  items: Rabiessubmissioninterface[] = [];
  isLoadingButton = signal<boolean>(false);
  applyFilter() {
    this.isLoadingButton.set(true);
    if (this.searchText === '') {
      this.getAllRabiesSubmission();
      this.isLoadingButton.set(false);
      return;
    }
    this.items = this.items.filter((item) =>
      item.victimName.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.isLoadingButton.set(false);
  }
  ngOnInit(): void {
    this.getAllRabiesSubmission();
  }
  restore(id: string) {
    this._alertS.simpleAlert(
      'warning',
      'Warning',
      'Are you sure you want to restore this Data?',
      () => {
        console.log(id);
        this._rabiesS.restore(id, 'Dummy').subscribe(
          (result: any) => {
            if (result['sampleId'] == id) {
              this._alertS.handleSuccess('Data restored successfully');
              this.getAllRabiesSubmission();
            } else {
              this._alertS.handleError('Failed to restore Data');
            }
          },
          (error) => {
            this._alertS.handleError('An error occurred while arhiving Data');
            console.error(error);
          }
        );
      }
    );
  }
}
