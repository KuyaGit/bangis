import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject,
  signal,
} from '@angular/core';
import { AddComponent } from '../../components/add/add.component';
import { EditComponent } from '../../components/edit/edit.component';
import { ViewComponent } from '../../components/view/view.component';
import { Subscription } from 'rxjs';
import { HumanvaccineService } from '../../services/humanvaccine.service';
import { HVacModel } from '../../models/hvac.interface';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { environment } from '../../../../../environments/environment.development';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../../../core/services/alert.service';
import { ArchivedHlistvacComponent } from '../archived-hlistvac/archived-hlistvac.component';

@Component({
  selector: 'app-h-listvac',
  standalone: true,
  imports: [
    AddComponent,
    EditComponent,
    ViewComponent,
    CommonModule,
    ExportexcelbtnComponent,
    FullPageLoaderComponent,
    LoadingbuttonComponent,
    FormsModule,
    ArchivedHlistvacComponent
  ],
  templateUrl: './h-listvac.component.html',
  styleUrl: './h-listvac.component.scss',
})
export class HListvacComponent implements OnInit {
  @Output() getAllUsersMethod = new EventEmitter<Subscription>();
  HVacViewModal = signal<boolean>(false);
  HVacEditModal = signal<boolean>(false);
  HVacAddModal = signal<boolean>(false);
  humanVac: Subscription = new Subscription();
  humanVacs: any;
  isLoadingButton = signal<boolean>(false);
  // Baryabols
  fileName : string = 'humanvaccinationstocks.xlsx'
  themeColor = localStorage.getItem(environment.theme)?.toString();

  // Dependensi Indyeksyon
  _hvac = inject(HumanvaccineService);
  _auth = inject(AuthService);
  _alert = inject(AlertService);
  openHVacEditModal(Hid: number) {
    this.humanVac.add(
      this._hvac.getVaccineById(Hid).subscribe((response) => {
        this.humanVacs = response;
        this.HVacEditModal.set(true);
      })
    );
  }
  openHVacViewModal(Hid: number) {
    this.humanVac.add(
      this._hvac.getVaccineById(Hid).subscribe((response) => {
        this.humanVacs = response;
        this.HVacViewModal.set(true);
      })
    );
  }

  closeHVacViewModal($event: any) {
    this.HVacViewModal = $event;
  }

  closeHVacEditModal($event: any) {
    this.HVacEditModal = $event;
  }

  closeHVacAddModal($event: any) {
    this.HVacAddModal = $event;
  }

  getAllHumanVacine() {
    this.humanVac.add(
      this._hvac
        .getAllHumanVaccineByAccount(this._auth.userInfo?.id)
        .subscribe((result: any) => {
          this._hvac.HVacs.set(result);
          this.items = this._hvac.HVacs();
        })
    );
  }
  searchText : string = '';
  items: HVacModel[] = [];
  applyFilter() {
    this.isLoadingButton.set(true)
    if (this.searchText === '') {
      this.getAllHumanVacine();
      this.isLoadingButton.set(false)
      return;
    }
    this.items = this.items.filter((item) =>
      item.vacName.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.isLoadingButton.set(false)
  }
  delete(id: number) {
    this._alert.simpleAlert(
      'warning',
      'Warning',
      'Are you sure you want to archived this Data?',
      () => {
        console.log(id);
        this._hvac.delete(id, "Dummy").subscribe(
          (result: any) => {
            if (result["Hid"] == id) {
              this._alert.handleSuccess('Data archived successfully');
              this.getAllHumanVacine();
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
  isArchivedTable = signal<boolean>(false);
  triggerTable(){
    if(this.isArchivedTable() == true){
      this.getAllHumanVacine();
      this.isArchivedTable.set(false);
    }
    if(this.isArchivedTable() == false){
      this.isArchivedTable.set(true);
    }
  }
  ngOnInit(): void {
    this.getAllHumanVacine();
  }
  ngOnDestroy(): void {
    this.humanVac.unsubscribe();
  }
}
