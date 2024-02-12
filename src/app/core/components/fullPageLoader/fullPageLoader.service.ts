import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface FullPageLoaderInterface {
  isLoading: boolean;
  timer: any;
}

@Injectable({
  providedIn: 'root'
})
export class FullPageLoaderService {
  isLoading = signal<boolean>(false);
  loadPage() {
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000);
  }
}
