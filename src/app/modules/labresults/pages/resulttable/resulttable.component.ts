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

@Component({
  selector: 'app-resulttable',
  standalone: true,
  imports: [
    FullPageLoaderComponent,
    CommonModule,
    ExportexcelbtnComponent,
    ClinicallabresultComponent,
    ViewlabresultComponent,
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
      });
    } else {
      this.subcription.add(
        this._labservice
          .getAllLabResultsByAccount(Number(this.accountID))
          .subscribe((res: Labresult[]) => {
            this._labservice.results.set(res);
          })
      );
    }
  }
  ngOnInit(): void {
    this.getAllLabResults();
  }
}
