import { Component, OnInit, inject, signal } from '@angular/core';
import { AddComponent } from '../../components/add/add.component';
import { EditComponent } from '../../components/edit/edit.component';
import { ViewComponent } from '../../components/view/view.component';
import { CommonModule } from '@angular/common';
import { AvacService } from '../../services/avac.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-a-vaclist',
  standalone: true,
  imports: [AddComponent, EditComponent, ViewComponent, CommonModule],
  templateUrl: './a-vaclist.component.html',
  styleUrl: './a-vaclist.component.scss'
})
export class AVaclistComponent implements OnInit{
  aVacModalEdit = signal(false)
  avacModalAdd = signal(false)
  avacModalView = signal(false)

  vacInfo : any;

  // Subscriptions
  subAvac : Subscription = new Subscription();
  // Dependencies Injections
  _avac = inject(AvacService)


  // Methods
  getAllAvac() {
    this.subAvac.add(
      this._avac.getAllAvac().subscribe((res: any) => {
        this._avac.avacList.set(res)
      })
    )
  }
  openAvacViewModal(AiD: number) {
    this.subAvac.add(
      this._avac.getVaccineById(AiD).subscribe((response) => {
        this.vacInfo = response;
        this.avacModalView.set(true)
      })
    );
  }
  openAvacEditModal(id: number) {
    this.subAvac.add(
      this._avac.getVaccineById(id).subscribe((response) => {
        this.vacInfo = response;
        this.aVacModalEdit.set(true)
      })
    )
  }


  ngOnInit(): void {
      this.getAllAvac()
  }
}
