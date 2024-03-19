import { Component, OnInit, inject, signal } from '@angular/core';
import { AddComponent } from '../../components/add/add.component';
import { EditComponent } from '../../components/edit/edit.component';
import { ViewComponent } from '../../components/view/view.component';
import { CommonModule } from '@angular/common';
import { AvacService } from '../../services/avac.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-a-vaclist',
  standalone: true,
  imports: [
    AddComponent,
    EditComponent,
    ViewComponent,
    CommonModule,
    ExportexcelbtnComponent,
    FullPageLoaderComponent
  ],
  templateUrl: './a-vaclist.component.html',
  styleUrl: './a-vaclist.component.scss',
})
export class AVaclistComponent implements OnInit {
  // Signals
  aVacModalEdit = signal(false);
  avacModalAdd = signal(false);
  avacModalView = signal(false);

  // Baryabols
  vacInfo: any;
  fileName: string = 'vaccineinventory.xlsx';
  datatoExport: any = '';
  themeColor = localStorage.getItem(environment.theme)?.toString();

  // Subscriptions
  subAvac: Subscription = new Subscription();
  // Dependencies Injections
  _avac = inject(AvacService);
  _auth = inject(AuthService);

  // Methods
  getAllAvac() {
    if (this._auth.userInfo?.accountType == 'agri') {
      this.subAvac.add(
        this._avac
          .getAllAvacByAccount(this._auth.userInfo?.id)
          .subscribe((res: any) => {
            res.sort((a: any, b: any) => {
              return a.AiD - b.AiD;
            })
            this._avac.avacList.set(res);
          })
      );
    } else {
      this.subAvac.add(
        this._avac.getAllAvac().subscribe((res: any) => {
          this._avac.avacList.set(res);
        })
      );
    }
  }
  openAvacViewModal(AiD: number) {
    this.subAvac.add(
      this._avac.getVaccineById(AiD).subscribe((response) => {
        console.log(response)
        this.vacInfo = response;
        this.avacModalView.set(true);
      })
    );
  }
  openAvacEditModal(id: number) {
    this.subAvac.add(
      this._avac.getVaccineById(id).subscribe((response) => {
        this.vacInfo = response;
        this.aVacModalEdit.set(true);
      })
    );
  }

  ngOnInit(): void {
    this.getAllAvac();
  }
}
