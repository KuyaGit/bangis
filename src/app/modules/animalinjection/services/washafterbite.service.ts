import { Injectable } from '@angular/core';
import { Washafterbite } from '../models/washafterbite';

@Injectable({
  providedIn: 'root'
})
export class WashafterbiteService {

  constructor() { }
  private _washafterbite: Washafterbite[] = [
    {
      id: 1,
      name: "Yes",
      value: "Yes"
    },
    {
      id: 2,
      name: "No",
      value: "No"
    }
  ]
  get washafterbite(): Washafterbite[] {
    return this._washafterbite;
  }
}
