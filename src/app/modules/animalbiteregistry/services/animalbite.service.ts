import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalbiteService {
  aniList = signal<any>(undefined);
  constructor() { }

}
