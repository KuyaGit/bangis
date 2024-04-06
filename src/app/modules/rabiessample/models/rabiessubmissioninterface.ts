export interface Rabiessubmissioninterface {
  id: any;
  sampleIDFrom: number;
  residence: string;
  species: string;
  breed: string;
  gender: string;
  age: number;
  typeOfOwnership: string;
  petManagement: string;
  causeOfDeath: string;
  dateOfDeath: string;
  timeOfDeath: string;
  puppiesBitchVaccinated: string;
  dateOfVaccinationpuppies: Date;
  dateofLastvaccination: Date;
  otherVaccinationHistory: string;
  otherDateofVaccination: string;
  contactWithAnimal: string;
  whereContact: string;
  victimName: string;
  victimAge: number;
  victimGender: string;
  victimBarangay: string;
  victimMunicipality: string;
  victimProvince: string;
  victimDateBitten: Date;
  victimTimeBitten: string;
  siteOfBite: string;
  natureofExposured: string;
  biteProvoked: string;
  locationofBite: string;
  otherVictim: string;
  treatmentRecieved: string;
  treatmentRecievedType: string;
  DateofTreatment: Date;
  sampleId: string;
  explainProvoked: string;
  createdAt: Date;
  behaviorChanges: [
    {
      id: number;
      name: string;
      description: string;
      value: string;
    }
  ];
  otherIllnesses: [
    {
      id: number;
      name: string;
      description: string;
      value: string;
    }
  ];
  testMethod: string;
}
