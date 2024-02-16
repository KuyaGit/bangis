import { Component, inject, signal } from '@angular/core';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { RabiessubmissionserviceService } from '../../services/rabiessubmissionservice.service';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { AddRabiesSubmissionComponent } from '../../components/add-rabies-submission/add-rabies-submission.component';

@Component({
  selector: 'app-rabiessubmissionlist',
  standalone: true,
  imports: [FullPageLoaderComponent, ExportexcelbtnComponent, AddRabiesSubmissionComponent],
  templateUrl: './rabiessubmissionlist.component.html',
  styleUrl: './rabiessubmissionlist.component.scss'
})
export class RabiessubmissionlistComponent {
  modalAddRabiesSubmission= signal<boolean>(false);

  fileName = 'rabies_submission_list.xlsx'

  _rabiesS = inject(RabiessubmissionserviceService);
  openAddRabiesSubmissionModal() {
    this.modalAddRabiesSubmission.set(true);
  }
}
