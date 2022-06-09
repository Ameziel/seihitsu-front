import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  title = "Accueil";
  pageTitle = "Bienvenu au Seihitsu Hôtel";
  accueilDescription = "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris mauris,\n" +
    "  faucibus quis efficitur sit amet, tristique fermentum neque. Vestibulum ante\n" +
    "  ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;\n" +
    "  Nam lectus turpis, mollis in lacus eget, tristique luctus mauris. Mauris\n" +
    "  sed vestibulum enim. Suspendisse elementum mollis leo in ornare. Aenean\n" +
    "  lacus felis, viverra at porttitor a, tincidunt ut tellus. Mauris accumsan\n" +
    "  consequat egestas. Vestibulum sed massa non tortor ornare sagittis ut vel felis.\n" +
    "  Pellentesque varius mi est, in faucibus sapien commodo non. Nunc eget malesuada\n" +
    "  turpis. Fusce tempor dictum massa, at semper dui facilisis porttitor. In nec\n" +
    "  nibh est. Nulla imperdiet erat in magna sollicitudin, posuere vestibulum purus\n" +
    "  commodo.";

  constructor() { }

  ngOnInit(): void {
  }

}
