import {Sejour} from "./sejour";

export interface Client {
  idclient: number;
  nom: string;
  prenom: string;
  email: string;
  sejours: Sejour[];
}
