import { Injectable } from '@angular/core';
import { municipalityNames } from '../models/municipality-data.interface';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {
    private _districtList : municipalityNames [] = [
      {
        id: 1,
        municipalityName: "Agoncillo",
      },
      {
        id: 2,
        municipalityName: "Alitagtag",
      },
      {
        id: 3,
        municipalityName: "Balayan",
      },
      {
        id: 4,
        municipalityName: "Balete",
      },
      {
        id: 5,
        municipalityName: "Batangas City",
      },
      {
        id: 6,
        municipalityName: "Bauan",
      },
      {
        id: 7,
        municipalityName: "Calaca",
      },
      {
        id: 8,
        municipalityName: "Calatagan",
      },
      {
        id: 9,
        municipalityName: "City of Tanauan",
      },
      {
        id: 10,
        municipalityName: "Cuenca",
      },
      {
        id: 11,
        municipalityName: "Ibaan",
      },
      {
        id: 12,
        municipalityName: "Laurel",
      },
      {
        id: 13,
        municipalityName: "Lemery",
      },
      {
        id: 14,
        municipalityName: "Lian",
      },
      {
        id: 15,
        municipalityName: "Lipa City",
      },
      {
        id: 16,
        municipalityName: "Lobo",
      },
      {
        id: 17,
        municipalityName: "Mabini",
      },
      {
        id: 18,
        municipalityName: "Malvar",
      },
      {
        id: 19,
        municipalityName: "Mataas na Kahoy",
      },
      {
        id: 20,
        municipalityName: "Nasugbu",
      },
      {
        id: 21,
        municipalityName: "Padre Garcia",
      },
      {
        id: 22,
        municipalityName: "Rosario",
      },
      {
        id: 23,
        municipalityName: "San Juan",
      },
      {
        id: 25,
        municipalityName: "San Luis",
      },
      {
        id: 25,
        municipalityName: "San Nicolas",
      },
      {
        id: 26,
        municipalityName: "San Pascual",
      },
      {
        id: 27,
        municipalityName: "Santa Teresita",
      },
      {
        id: 29,
        municipalityName: "Santo Tomas",
      },
      {
        id: 30,
        municipalityName: "Taal",
      },
      {
        id: 31,
        municipalityName: "Talisay",
      },
      {
        id: 32,
        municipalityName: "Taysan",
      },
      {
        id: 33,
        municipalityName: "Tingloy",
      },
      {
        id: 32,
        municipalityName: "Tuy",
      },
      {
        id: 33,
        municipalityName: "Provincial Veterinary Office",
      },
    ]
    getmunicipalityNames() {
      return this._districtList;
    }
}
