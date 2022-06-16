import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employe} from "../../models/employe";

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private serviceUrl = "http://localhost:8080/api/employe/all";


  constructor(private httpClient: HttpClient) { }

  getEmployes(): Observable<Employe[]> {
    return this.httpClient.get<Employe[]>(this.serviceUrl);
  }
}
