import { Component, OnInit } from '@angular/core';
import {Employe} from "../../../models/employe";
import {MatTableDataSource} from "@angular/material/table";
import {HttpClient} from "@angular/common/http";




@Component({
  selector: 'app-personnel-management',
  templateUrl: './personnel-management.component.html',
  styleUrls: ['./personnel-management.component.scss']
})
export class PersonnelManagementComponent implements OnInit {
  employes: Employe[] = [];


  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getEmployes() {
    this.httpClient.get<Employe[]>("http://localhost:8080/api/employe/all").subscribe( //make constant
      reponse => {
        this.employes = reponse;
        console.log(this.employes);
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
