import { Ville } from "../../../Ville/shared/model/ville";

export class Etablissement {
  id: number = 0 ;
  code: string = "" ;
  nom: string = "" ;
  adresse: string = "" ;
  eleves: any ;
  ville: Ville = new Ville() ;
  enseignants: any ;

  constructor() {
  }
}


