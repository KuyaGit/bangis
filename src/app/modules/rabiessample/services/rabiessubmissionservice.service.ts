import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RabiessubmissionserviceService {

  constructor() { }
  rabiesList = signal<any[]>([]);
  
}
