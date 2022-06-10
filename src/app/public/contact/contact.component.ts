import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title ="Formulaire de contact";
  pageTitle = "Contactez nous";

  constructor() { }

  ngOnInit(): void {
  }

}
