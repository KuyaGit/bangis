import { Injectable, OnInit, inject, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../services/auth.service';
export interface FullPageLoaderInterface {
  isLoading: boolean;
  timer: any;
}

@Injectable({
  providedIn: 'root'
})
export class FullPageLoaderService {
  _authS = inject(AuthService)
  isLoading = signal<boolean>(false);
  loadPage() {
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000);
  }
}
