import {Client} from "./client";
import {Employe} from "./employe";
import {Chambre} from "./chambre";

export interface Sejour {
  idsejuor: number;
  client: Client;
  employe: Employe;
  chambre: Chambre;
  datedebut: Date;
  datefin: Date;
}
