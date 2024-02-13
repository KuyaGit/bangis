import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FullPageLoaderComponent } from '../../../../core/components/fullPageLoader/fullPageLoader.component';
import { HasRoleDirective } from '../../../../hasRole.directive';
import { DashboardInterface, DashboardService } from '../../services/dashboard.service';
import { AuthService } from '../../../../core/services/auth.service';
import { UserModel } from '../../../usermanagement/models/user.interface';
import { PiegraphComponent } from '../../components/piegraph/piegraph.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FullPageLoaderComponent,
    HasRoleDirective,
    PiegraphComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit{
  _dashboardS = inject(DashboardService)
  _authS = inject(AuthService)

  accountID = this._authS.userInfo?.id
  humanVacCount = signal<number>(0)
  totalVacCount = signal<number>(0)
  totalVaccinated = signal<number>(0)
  getHumanVacCount(id: any) {
    this._dashboardS.getHumanVacCount(id).subscribe((res: any) => {
      this.humanVacCount.set(res.hVacID)
    })
  }
  getTotalVacCount(id: any) {
    this._dashboardS.getTotalVacCount(id).subscribe((res: any) => {
      this.totalVacCount.set(res.animalBiteIDFrom)
    })
  }

  getTotalRabiesSubmission() : number {
    return 10
  }
  async getTotalVaccinated(id: any){
    this._dashboardS.getVacinatedCount(id).subscribe((res: any) => {
      this.totalVaccinated.set(res.animalVaccinationIDFrom)
    })
  }
  getTotalConfirmedrRabies() : number {
    return 30
  }
  ngOnInit(): void {
    if(this._authS.userInfo?.accountType === 'abtc') {
      this.getHumanVacCount(this.accountID)
      this.getTotalVacCount(this.accountID)
    } else if(this._authS.userInfo?.accountType === 'agri') {
      this.getTotalConfirmedrRabies()
      this.getTotalVaccinated(this.accountID)
      this.getTotalRabiesSubmission()
    }
  }
}
