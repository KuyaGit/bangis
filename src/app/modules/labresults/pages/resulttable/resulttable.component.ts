import { Component, inject, signal } from '@angular/core';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { CommonModule } from '@angular/common';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { LabservicesService } from '../../services/labservices.service';
import { environment } from '../../../../../environments/environment.development';
import { ClinicallabresultComponent } from '../../component/clinicallabresult/clinicallabresult.component';

@Component({
  selector: 'app-resulttable',
  standalone: true,
  imports: [FullPageLoaderComponent, CommonModule, ExportexcelbtnComponent, ClinicallabresultComponent],
  templateUrl: './resulttable.component.html',
  styleUrl: './resulttable.component.scss'
})
export class ResulttableComponent {
  fileName: string = 'labresults.xlsx';
  themeColor = localStorage.getItem(environment.theme)?.toString();
  modalAdd = signal<boolean>(false);
  modalEdit = signal<boolean>(false);
  modalView = signal<boolean>(false);

  _labservice = inject(LabservicesService);


  openViewModal(id: number) {

  }
  openEditModal(id: number) {

  }
  getAllLabResults() {
    
  }
}
