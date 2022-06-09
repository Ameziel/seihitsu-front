import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  title = "Accueil";
  pageTitle = "Bienvenu au Seihitsu Hôtel";

  constructor() { }

  ngOnInit(): void {
  }

}
