import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { HasRoleDirective } from '../../../../hasRole.directive';
import {
  DashboardInterface,
  DashboardService,
} from '../../services/dashboard.service';
import { AuthService } from '../../../../core/services/auth.service';
import { UserModel } from '../../../usermanagement/models/user.interface';
import { PiegraphComponent } from '../../components/piegraph/piegraph.component';
import ApexCharts from 'apexcharts';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FullPageLoaderComponent,
    HasRoleDirective,
    PiegraphComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardComponent implements OnInit {
  @ViewChild('pieGraphComponent') pieGraphComponent!: ElementRef;
  _dashboardS = inject(DashboardService);
  _authS = inject(AuthService);

  accountID = this._authS.userInfo?.id;
  humanVacCount = signal<number>(0);
  totalVacCount = signal<number>(0);
  totalVaccinated = signal<number>(0);
  outofstock$!: Observable<number>;
  available$!: Observable<any>;
  expired$!: Observable<number>;
  pieGraph = signal<boolean>(false);
  // Available Vaccine Count
  getHumanVacCount(id: any) {
    this._dashboardS.getHumanVacCount(id).subscribe((res: any) => {
      this.available$ = res.hVacID;
    });
  }

  getAnimalVacAvailable(id: number) {
    this._dashboardS.getAnimalVacCount(id).subscribe((res: any) => {
      this.available$ = res.hVacID;
    });
  }
  // Out of Stock Vaccine Count
  getHumanVacOutofStockCount(id: any) {
    this._dashboardS.getHvacOutofStockCount(id).subscribe((res: any) => {
      this.outofstock$ = res.hVacID;
      console.log(this.outofstock$);
    });
  }
  getAnimalVacOutofStock(id: any) {
    this._dashboardS.getAnimalVacOutofStockCount(id).subscribe((res: any) => {
      this.outofstock$ = res.hVacID;
    });
  }

  // Expired Vaccine Count
  getHumanVacCountExpired(id: any) {
    this._dashboardS.getHumanVacCountExpired(id).subscribe((res: any) => {
      this.expired$ = res.hVacID;
    });
  }
  getAnimalVacExpired(id: any) {
    this._dashboardS.getAnimalVacCountExpired(id).subscribe((res: any) => {
      this._dashboardS.expired = res.expired;
    });
  }
  getTotalVacCount(id: any) {
    this._dashboardS.getTotalVacCount(id).subscribe((res: any) => {
      return this.totalVacCount.set(res.animalBiteIDFrom);
    });
  }
  countRabiesSubmission = signal<number>(0);
  getTotalRabiesSubmissionbyAccount() {
    const type = this._authS.userInfo?.accountType;
    if (type === 'lab') {
      this._dashboardS
        .getTotalRabiesSubmissionbyAccount(Number(this.accountID))
        .subscribe((res: any) => {
          this.countRabiesSubmission.set(res.sampleIDFrom);
        });
    } else {
      this._dashboardS.getCountRabiesSubmission().subscribe((res: any) => {
        this.countRabiesSubmission.set(res.sampleId);
        console.log(res);
      });
    }
  }
  async getTotalVaccinated(id: any) {
    this._dashboardS.getVacinatedCount(id).subscribe((res: any) => {
      return this.totalVaccinated.set(res.animalVaccinationIDFrom);
    });
  }
  totalConfirmedRabies = signal<number>(0);
  getTotalConfirmedrRabiesByAccount(id: number) {
    this._dashboardS.getAllCountRabiesPositiveByAccount(id).subscribe((res: any) => {
      this.totalConfirmedRabies.set(res.diagnosis);
    });
  }
  getTotalConfirmedRabiesCountAll() {
    this._dashboardS.getAllCountRabiesPositive().subscribe((res: any) => {
      this.totalConfirmedRabies.set(res.diagnosis);
    });
  }
  ifAbtc() {
    forkJoin([
      this._dashboardS.getHumanVacCount(Number(this.accountID)),
      this._dashboardS.getHvacOutofStockCount(Number(this.accountID)),
      this._dashboardS.getHumanVacCountExpired(Number(this.accountID)),
    ]).subscribe(([res1, res2, res3]) => {
      this.available$ = res1.hVacID;
      this.outofstock$ = res2.hVacID;
      this.expired$ = res3.hVacID;
    });
    this.getTotalVacCount(this.accountID);
  }

  ifAgri() {
    forkJoin([
      this._dashboardS.getAnimalVacCount(Number(this.accountID)),
      this._dashboardS.getAnimalVacOutofStockCount(Number(this.accountID)),
      this._dashboardS.getAnimalVacCountExpired(Number(this.accountID)),
    ]).subscribe(([res1, res2, res3]) => {
      this.available$ = res1.aVacId;
      this.outofstock$ = res2.aVacId;
      this.expired$ = res3.expired;
    });
  }
  ngOnInit(): void {
    if (this._authS.userInfo?.accountType === 'abtc') {
      this.ifAbtc();
      setTimeout(() => {
        this.pieGraph.set(true);
      }, 2000);
    } else if (this._authS.userInfo?.accountType === 'agri') {
      this.getTotalVaccinated(this.accountID);
      this.getTotalRabiesSubmissionbyAccount();
      this.getTotalConfirmedRabiesCountAll();
      this.ifAgri();
      setTimeout(() => {
        this.pieGraph.set(true);
      }, 2000);
    } else if (this._authS.userInfo?.accountType === 'lab') {
      this.getTotalRabiesSubmissionbyAccount();
      this.getTotalConfirmedrRabiesByAccount(Number(this.accountID));
    }
  }
}
