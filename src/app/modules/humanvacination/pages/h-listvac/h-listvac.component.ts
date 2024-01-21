import { Component, EventEmitter, OnInit, Output, inject, signal } from '@angular/core';
import { AddComponent } from '../../components/add/add.component';
import { EditComponent } from '../../components/edit/edit.component';
import { ViewComponent } from '../../components/view/view.component';
import { Subscription } from 'rxjs';
import { HumanvaccineService } from '../../services/humanvaccine.service';
import { HVacModel } from '../../models/hvac.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-h-listvac',
  standalone: true,
  imports: [AddComponent, EditComponent,ViewComponent, CommonModule],
  templateUrl: './h-listvac.component.html',
  styleUrl: './h-listvac.component.scss'
})
export class HListvacComponent implements OnInit{
  @Output() getAllUsersMethod = new EventEmitter<Subscription>();
  HVacViewModal = signal<boolean>(false);
  HVacEditModal = signal<boolean>(false);
  HVacAddModal = signal<boolean>(false);
  humanVac : Subscription = new Subscription();
  humanVacs : any;
  _hvac = inject(HumanvaccineService);
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
        this.HVacViewModal.set(true)
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
      this._hvac.getAllHumanVaccine().subscribe((result: any) => {
        this._hvac.HVacs.set(result);
      })
    )
  }

  ngOnInit(): void {
    this.getAllHumanVacine();
  }
  ngOnDestroy(): void {
    this.humanVac.unsubscribe();
  }
}
