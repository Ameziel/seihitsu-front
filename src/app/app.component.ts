import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Seihitsu Hôtel";
  public href: string = "";


  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
  }

  isSideNavigationVisible() {
    return this.href.includes("interne");
  }
}


