import { Component, OnInit } from '@angular/core';
import {Employe} from "../../../models/employe";
import {EmployeService} from "../../services/employe.service";


@Component({
  selector: 'app-personnel-management',
  templateUrl: './personnel-management.component.html',
  styleUrls: ['./personnel-management.component.scss']
})
export class PersonnelManagementComponent implements OnInit {
  title = "Admistration Personnel";
  employes: Employe[] = [];
  displayedColumns : string[] = ["idEmploye","Nom","Prenom", "libellePoste"];  // TODO make it generic

  constructor(private employeService: EmployeService) {  }

  ngOnInit(): void {
    this.employeService.getEmployes().subscribe( res => {
          this.employes = res
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
