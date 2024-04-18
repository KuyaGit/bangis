import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { FormsModule } from '@angular/forms';
import { LoadingbuttonComponent } from '../../../../core/components/loadingbutton/loadingbutton.component';
import { ViewComponent } from '../../components/view/view.component';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { AlertService } from '../../../../core/services/alert.service';
import { AuthService } from '../../../../core/services/auth.service';
import { HVacModel } from '../../models/hvac.interface';
import { HumanvaccineService } from '../../services/humanvaccine.service';
import { EditComponent } from '../../components/edit/edit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archived-hlistvac',
  standalone: true,
  imports: [
    FullPageLoaderComponent,
    FormsModule,
    LoadingbuttonComponent,
    ViewComponent,
    EditComponent,
    CommonModule
  ],
  templateUrl: './archived-hlistvac.component.html',
  styleUrl: './archived-hlistvac.component.scss'
})
export class ArchivedHlistvacComponent {
  @Output() getAllMethod = new EventEmitter<Subscription>();
  @Output() archivedTable = new EventEmitter<boolean>();
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
  subscription: Subscription = new Subscription();
  closeArchiveTable() {
    this.getAllMethod.emit(this.subscription);
    this.archivedTable.emit(false);
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
  searchText : string = ''
  items: HVacModel[] = []
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
  ngOnInit(): void {
    this.getAllHumanVacine();
  }
  ngOnDestroy(): void {
    this.humanVac.unsubscribe();
  }
}
