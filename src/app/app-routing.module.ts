import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./public/accueil/accueil.component";
import {ContactComponent} from "./public/contact/contact.component";
import {ReservationComponent} from "./public/reservation/reservation.component";
import {RestaurantComponent} from "./public/restaurant/restaurant.component";
import {ChambreComponent} from "./public/chambre/chambre.component";
import {LoginComponent} from "./public/login/login.component";

import {DashboardComponent} from "./private/dashboard/dashboard.component";
import {RapportComponent} from "./private/rapport/rapport.component";
import {SejourComponent} from "./private/sejour/sejour.component";
import {ClientManagementComponent} from "./private/client/client-management/client-management.component";
import {
  PersonnelManagementComponent
} from "./private/administration/personnel-management/personnel-management.component";

const routes: Routes = [
  {path: '', component: AccueilComponent}, //TODO better way with the second line ? an OR ?
  {path: 'Accueil', component: AccueilComponent},
  {path: 'Chambre', component: ChambreComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Reservation', component: ReservationComponent},
  {path: 'Restaurant', component: RestaurantComponent},
  {path: 'Login', component: LoginComponent},
  {path: '/interne/dashboard', component: DashboardComponent},
  {path: '/interne/chambre', component: ChambreComponent},
  {path: '/interne/sejour', component: SejourComponent},
  {path: '/interne/rapport', component: RapportComponent},
  {path: '/interne/client', component: ClientManagementComponent},
  {path: '/interne/administration', component: PersonnelManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
