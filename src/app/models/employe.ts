import {Sejour} from "./sejour";

export interface Employe {
  idemploye: number;
  nom: string;
  prenom: string;
  libelleposte: string;
  sejour: Sejour[];

}
