import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./public/accueil/accueil.component";
import {ContactComponent} from "./public/contact/contact.component";
import {ReservationComponent} from "./public/reservation/reservation.component";
import {RestaurantComponent} from "./public/restaurant/restaurant.component";

const routes: Routes = [
  {path: '', component: AccueilComponent}, //TODO better way with the second line ? an OR ?
  {path: 'Accueil', component: AccueilComponent},
  {path: 'Chambre', component: AccueilComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Reservation', component: ReservationComponent},
  {path: 'Restaurant', component: RestaurantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
