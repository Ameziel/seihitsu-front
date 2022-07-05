import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employe} from "../../models/employe";

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private serviceUrlEmploye = "http://localhost:8080/api/employe/";
  private serviceUrlEmployeAll = this.serviceUrlEmploye + "all";

  constructor(private httpClient: HttpClient) { }

  public getEmployes(): Observable<Employe[]> {
    return this.httpClient.get<Employe[]>(this.serviceUrlEmployeAll);
  }

  public addEmploye(employe: Employe): Observable<Employe> {
    return this.httpClient.post<Employe>(this.serviceUrlEmploye, employe);
  }

  public updateEmploye(employe: Employe): Observable<Employe> {
    return this.httpClient.put<Employe>(this.serviceUrlEmploye, this.addEmploye);
  }

  public deleteEmploye(employeID: number): Observable<void> {
    return this.httpClient.delete<void>(this.serviceUrlEmploye + `/${employeID}`);
  }
}
