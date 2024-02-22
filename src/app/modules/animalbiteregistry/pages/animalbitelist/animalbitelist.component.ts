import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject,
  signal,
} from '@angular/core';
import { AddanimalbiteComponent } from '../../components/addanimalbite/addanimalbite.component';
import { EditanimalbiteComponent } from '../../components/editanimalbite/editanimalbite.component';
import { ViewanimalbiteComponent } from '../../components/viewanimalbite/viewanimalbite.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AnimalbiteService } from '../../services/animalbite.service';
import { HasRoleDirective } from '../../../../hasRole.directive';
import { ExportexcelbtnComponent } from '../../../../core/components/exportexcelbtn/exportexcelbtn.component';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { environment } from '../../../../../environments/environment.development';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-animalbitelist',
  standalone: true,
  imports: [
    AddanimalbiteComponent,
    EditanimalbiteComponent,
    ViewanimalbiteComponent,
    CommonModule,
    HasRoleDirective,
    ExportexcelbtnComponent,
    FullPageLoaderComponent,
  ],
  templateUrl: './animalbitelist.component.html',
  styleUrl: './animalbitelist.component.scss',
})
export class AnimalbitelistComponent implements OnInit {
  modalAdd = signal<boolean>(false);
  modalView = signal<boolean>(false);
  modalEdit = signal<boolean>(false);

  animalBiteInfo: any;

  @Output() getAllAnimalBiteMethod = new EventEmitter<Subscription>();
  @Output() modalEvent = new EventEmitter<boolean>();
  // Dependency Injection
  _animalbite = inject(AnimalbiteService);
  _auth = inject(AuthService);
  // Baryabols
  isVisiblePageLoader: boolean = false;
  fileName: string = 'animalbite.xlsx';
  subsciption: Subscription = new Subscription();
  accountID = this._auth.userInfo?.id;
  themeColor = localStorage.getItem(environment.theme)?.toString();
  // Methods
  getAllAnimalBite() {
    if (this._auth.userInfo?.accountType === 'agri') {
      this.subsciption.add(
        this._animalbite
          .getAllPatient()
          .subscribe((res) => {
            this._animalbite.aniList.set(res);
          })
      );
    } else {
      this.subsciption.add(
        this._animalbite
          .getAllPatientsByAbtc(Number(this.accountID))
          .subscribe((res) => {
            this._animalbite.aniList.set(res);
          })
      );
    }
  }

  openViewModal(id: number) {
    console.log(id);
    this.modalView.set(true);
  }
  openEditModal(id: number) {
    this.modalEdit.set(true);
    console.log(id);
  }
  delete(id: number) {
    console.log(id);
  }

  ngOnInit(): void {
    this.getAllAnimalBite();
    if (this._auth.userInfo?.accountType === 'admin') {
      this._auth.themeColor.set('bg-green-400 hover:bg-green-600')
    } else if (this._auth.userInfo?.accountType === 'agri') {
      this._auth.themeColor.set('bg-red-800 hover:bg-red-600')
    } else if (this._auth.userInfo?.accountType === 'abtc') {
      this._auth.themeColor.set('active:bg-blue-800 hover:bg-blue-600')
    } else if (this._auth.userInfo?.accountType === 'lab') {
      this._auth.themeColor.set('bg-green-600 hover:bg-green-800')
    }
  }
}
