import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit {
  pageTitle = "Rapport d'activité";
  constructor() { }

  ngOnInit(): void {
  }

}
