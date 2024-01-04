import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { navbarData } from './navbarData';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterModule
  ],
  template: `
    <div class="sidenav-container flex w-full justify-items-center">
      <div class='sidenav' [ngClass]="collapsed ? 'sidenav-collapsed': ''">
        <div class="logo-container flex content-center justify-center items-center">
          <div class="logo-text flex " *ngIf="collapsed">ADMIN</div>
        </div>
        <ul class="sidenav-nav">
          <li class="sidenav-nav-item" *ngFor="let data of navData">
            <a class="sidenav-nav-link" [routerLink]="[data.routerLink]" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
              <i class="sidenav-link-icon" [class]="data.icon"></i>
              <span class="sidenav-link-text" *ngIf="collapsed">{{data.label}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="right-container w-full">
        <div class="right-content">
          <div class="topbar flex items-center justify-between">
            <div class="sidebar-buttons">
              <button class="btn-close" *ngIf="collapsed" (click)="closeMenu()">
                <i class="fa-solid fa-xmark"></i>
              </button>
              <button class="btn-close" *ngIf="!collapsed" (click)="openMenu()">
                <i class="fal fa-bars"></i>
              </button>
            </div>
            <div class="avatar-container items-center flex align-middle justify-center border-none bg-slate-200">
              <div class="avatar-info flex items-center justify-evenly">
                <div class="avatar">
                  <div class="w-10 rounded-full border border-solid border-green-600">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div class="role-name avatar-name flex flex-col ml-2">
                  <span class="name ">Mark Lowel</span>
                  <span class="role text-xs">Provet</span>
                </div>
              </div>
            </div>
          </div>
          <div class="content w-full">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>

  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class HomeComponent {
  collapsed = true;
  navData = navbarData
  screenWidth = 0;

  closeMenu () {
    this.collapsed = !this.collapsed;
  }

  openMenu () {
    this.collapsed = true
  }
}
