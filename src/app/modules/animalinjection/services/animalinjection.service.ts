import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalinjectionService {
  avacInjectList = signal<any>(undefined)
  constructor() { }
}
