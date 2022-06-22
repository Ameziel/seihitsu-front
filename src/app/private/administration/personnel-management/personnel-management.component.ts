import { Component, OnInit } from '@angular/core';
import {Employe} from "../../../models/employe";
import {MatTableDataSource} from "@angular/material/table";
import {HttpClient} from "@angular/common/http";
import {EmployeService} from "../../services/employe.service";
import {Observable, Subscription} from "rxjs";




@Component({
  selector: 'app-personnel-management',
  templateUrl: './personnel-management.component.html',
  styleUrls: ['./personnel-management.component.scss']
})
export class PersonnelManagementComponent implements OnInit {

  employes: Employe[] = [];

  constructor(private employeService: EmployeService
  ) {  }

  ngOnInit(): void {
    this.employeService.getEmployes().subscribe( res => {
          this.employes = res
          console.log(res);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmployes() {
    console.log(this.employes);
  }
}
