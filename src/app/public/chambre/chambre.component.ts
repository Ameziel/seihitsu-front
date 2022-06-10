import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent implements OnInit {
  title = "Nos chambre";

  constructor() { }

  ngOnInit(): void {
  }

}
