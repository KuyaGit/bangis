export interface AnimalbiteInterface {
  id: number,
  animalBiteIDFrom : number
  // Patient Information
  patientName : string
  Address : string
  dateBitten : Date
  // Histor of Exposure
  age : number
  sex : string
  bittenAt : string
  typeOfAnimal : string
  type : string
  siteOfBite : string
  // Post Exposure Prophylaxis
  category : string
  washAfterbite : boolean
  rigDateGiven : Date
  // Tissue Culture Vaccine(Data Given)
  route : string
  dateOfFirstVaccine : Date
  brandNameFirstVaccine : string
  dateOfSecondVaccine : Date
  brandNameSecondVaccine : string
  dateOfThirdVaccine : Date
  brandNameThirdVaccine : string
  dateOfFourthVaccine : Date
  brandNameFourthVaccine : string
  dateOfFifthVaccine : Date
  brandNameFifthVaccine : string
  outCome : string
  bittingAnimalStatusafter4Years : string
  remarks : string
  updatedAt : Date
}
