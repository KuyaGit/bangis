import { Component, OnInit, inject, signal } from '@angular/core';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { RabiessubmissionserviceService } from '../../services/rabiessubmissionservice.service';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { AddRabiesSubmissionComponent } from '../../components/add-rabies-submission/add-rabies-submission.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { Subscription, catchError } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AlertService } from '../../../../core/services/alert.service';
import { ViewAnimalinjectionComponent } from '../../../animalinjection/components/view-animalinjection/view-animalinjection.component';
import { ViewrabiessampleComponent } from '../../components/viewrabiessample/viewrabiessample.component';
import { Rabiessubmissioninterface } from '../../models/rabiessubmissioninterface';
import { ClinicallabresultComponent } from '../../../labresults/component/clinicallabresult/clinicallabresult.component';
import { Labresultinterface } from '../../models/labresultinterface';
import { FormsModule } from '@angular/forms';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';

@Component({
  selector: 'app-rabiessubmissionlist',
  standalone: true,
  imports: [
    FullPageLoaderComponent,
    ExportexcelbtnComponent,
    AddRabiesSubmissionComponent,
    CommonModule,
    ViewrabiessampleComponent,
    ClinicallabresultComponent,
    FormsModule,
    LoadingbuttonComponent,
  ],
  templateUrl: './rabiessubmissionlist.component.html',
  styleUrl: './rabiessubmissionlist.component.scss',
})
export class RabiessubmissionlistComponent implements OnInit {
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
  openAddRabiesSubmissionModal() {
    this.modalAddRabiesSubmission.set(true);
  }
  getAllRabiesSubmission() {
    if (this._authS.userInfo?.accountType === 'agri') {
      this._rabiesS.getAllRabiesSampleSubmission().subscribe((res: any) => {
        this._rabiesS.rabiesList.set(res);
        this.items = this._rabiesS.rabiesList();
      });
    } else {
      this._rabiesS
        .getAllRabiesSampleSubmissionByAccount(Number(this.accountID))
        .subscribe((res: any) => {
          this._rabiesS.rabiesList.set(res);
          this.items = this._rabiesS.rabiesList();
        });
    }
  }
  searchText: string = '';
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
  delete(id: string) {
    this._alertS.simpleAlert(
      'warning',
      'Warning',
      'Are you sure you want to archived this Data?',
      () => {
        console.log(id);
        this._rabiesS.delete(id, "Dummy").subscribe(
          (result: any) => {
            if (result["id"] == id) {
              this._alertS.handleSuccess('Data archived successfully');
              this.getAllRabiesSubmission();
            } else {
              this._alertS.handleError('Failed to archived Data');
            }
          },
          (error) => {
            this._alertS.handleError(
              'An error occurred while arhiving Data'
            );
            console.error(error);
          }
        );
      }
    );
  }
}
