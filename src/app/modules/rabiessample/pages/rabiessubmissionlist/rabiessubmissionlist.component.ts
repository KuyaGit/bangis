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
import { ClinicallabresultComponent } from '../../components/clinicallabresult/clinicallabresult.component';
import { Labresultinterface } from '../../models/labresultinterface';

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
    this._rabiesS
      .getAllRabiesSampleSubmissionByAccount(Number(this.accountID))
      .subscribe((res: any) => {
        this._rabiesS.rabiesList.set(res);
      });
  }
  ngOnInit(): void {
    this.getAllRabiesSubmission();
  }
}
