import { Component, OnInit, inject, signal } from '@angular/core';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { RabiessubmissionserviceService } from '../../services/rabiessubmissionservice.service';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { AddRabiesSubmissionComponent } from '../../components/add-rabies-submission/add-rabies-submission.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-rabiessubmissionlist',
  standalone: true,
  imports: [FullPageLoaderComponent, ExportexcelbtnComponent, AddRabiesSubmissionComponent, CommonModule],
  templateUrl: './rabiessubmissionlist.component.html',
  styleUrl: './rabiessubmissionlist.component.scss'
})
export class RabiessubmissionlistComponent implements OnInit{
  modalAddRabiesSubmission= signal<boolean>(false);
  themeColor = localStorage.getItem(environment.theme)
  subscription = new Subscription();
  fileName = 'rabies_submission_list.xlsx'
  _authS = inject(AuthService)
  _rabiesS = inject(RabiessubmissionserviceService);
  accountID = this._authS.userInfo?.id

  openAddRabiesSubmissionModal() {
    this.modalAddRabiesSubmission.set(true);
  }

  getAllRabiesSubmission() {
      this._rabiesS.getAllRabiesSampleSubmissionByAccount(Number(this.accountID)).subscribe((res: any) => {
        this._rabiesS.rabiesList.set(res);
      })
  }
  ngOnInit(): void {
    this.getAllRabiesSubmission();
  }
}
