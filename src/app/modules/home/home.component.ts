import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  effect,
  inject,
} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { navbarData } from './navbarData';

import { AuthService } from '../../core/services/auth.service';
import { HasRoleDirective } from '../../hasRole.directive';
import { AvatarComponent } from '../../core/components/avatar/avatar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    AvatarComponent,
    HasRoleDirective,
  ],
  template: `
    <div class="sidenav-container flex w-full justify-items-center">
      <div class="sidenav" [ngClass]="collapsed ? 'sidenav-collapsed' : ''">
        <div [ngClass]="collapsed ? 'px-4 py-4' : ''">
          <div
            class="logo-container flex  justify-center items-center rounded-lg"
          >
            <div
              class="logo-text flex text-white rounded-lg"
              [ngClass]="collapsed ? 'bg-red-600' : ''"
            >
              <div class="text-2xl font-bold m-2" *appHasRole="['admin']">
                @if(collapsed) {
                  <h1 class="text-2xl font-bold m-4" *appHasRole="['admin']">
                    ADMINISTRATOR
                  </h1>
                } @else {
                <li
                  class="sidenav-item list-none text-red-600 text-2xl font-bold m-2"
                >
                  <i class="sidenav-link-icon fa-solid fa-user-tie"></i>
                </li>
                }
              </div>
              <div class="text-2xl font-bold m-2 " *appHasRole="['lab']">
                @if(collapsed) {
                <h1 class="text-2xl font-bold m-10" >
                  LABORATORY
                </h1>
                } @else {
                <li
                  class="sidenav-item list-none text-red-600 text-2xl font-bold m-2"
                >
                  <i class="sidenav-link-icon fa-solid fa-flask-vial"></i>
                </li>
                }
              </div>
              <div class="text-2xl font-bold m-2 " *appHasRole="['abtc']">
                @if(collapsed) {
                <span class="">Animal Bite</span><br />
                <span class="">Treatment Center</span>
                } @else {
                <li
                  class="sidenav-item list-none text-red-600 text-2xl font-bold m-2"
                >
                  <i class="sidenav-link-icon fa-solid fa-house-medical"></i>
                </li>
                }
              </div>
              @if(collapsed) {
              <h1 class="text-2xl font-bold m-10" *appHasRole="['agri']">
                AGRICULTURE
              </h1>
              } @else {
              <li
                *appHasRole="['agri']"
                class="sidenav-item list-none text-red-600 text-2xl font-bold m-2"
              >
                <i class="sidenav-link-icon fa-solid fa-building-wheat"></i>
              </li>
              }
            </div>
          </div>
        </div>
        <ul class="sidenav-nav">
          <ng-container *ngFor="let data of navData">
            <li class="sidenav-nav-item" *appHasRole="data.appHasRole">
              <a
                class="sidenav-nav-link"
                [routerLink]="[data.routerLink]"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
              >
                <i class="sidenav-link-icon" [class]="data.icon"></i>
                <span class="sidenav-link-text" *ngIf="collapsed">{{
                  data.label
                }}</span>
              </a>
            </li>
          </ng-container>
        </ul>
      </div>
      <div class="right-container w-full">
        <div class="right-content">
          <div class="topbar flex items-center justify-between">
            <div class="sidebar-buttons">
              @if (collapsed) {
              <button class="btn-close" (click)="closeMenu()">
                <i class="fa-solid fa-xmark"></i>
              </button>
              } @else {
              <button class="btn-close" *ngIf="!collapsed" (click)="openMenu()">
                <i class="fal fa-bars"></i>
              </button>
              }
            </div>
            <div>
              <div class="dropdown">
                <div tabindex="0" role="button" class="btn">
                  <div
                    class="avatar-container items-center flex align-middle justify-center border-none"
                  >
                    <div class="avatar-info flex items-center justify-evenly">
                      <div class="avatar ">
                        <div
                          class="w-10 rounded-full border border-solid border-green-600"
                        >
                          <img
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          />
                        </div>
                      </div>
                      <app-avatar (userName)="(this.username)" />
                    </div>
                  </div>
                </div>
                <ul
                  tabindex="0"
                  class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
                >
                  <li><a>Update Profile Setting</a></li>
                  <li><a (click)="_auth.logout()">Logout</a></li>
                </ul>
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
export class HomeComponent implements OnInit {
  collapsed = true;
  navData = navbarData;
  screenWidth = 0;
  role?: string;
  _auth = inject(AuthService);
  username?: string;
  constructor() {
    effect(() => {
      this._auth.accountType();
    });
  }
  token: any;
  closeMenu() {
    this.collapsed = !this.collapsed;
  }

  openMenu() {
    this.collapsed = true;
  }
  ngOnInit(): void {}
}
