import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './public/accueil/accueil.component';
import { RestaurantComponent } from './public/restaurant/restaurant.component';
import { ChambreComponent } from './public/chambre/chambre.component';
import { ReservationComponent } from './public/reservation/reservation.component';
import { ContactComponent } from './public/contact/contact.component';
import { HeaderComponent } from './public/shared/header/header.component';
import { FooterComponent } from './public/shared/footer/footer.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { DashboardChambreComponent } from './private/chambre/dashboard-chambre/dashboard-chambre.component';
import { PlanningComponent } from './private/chambre/planning/planning.component';
import { SejourComponent } from './private/sejour/sejour.component';
import { RapportComponent } from './private/rapport/rapport.component';
import { ClientManagementComponent } from './private/client/client-management/client-management.component';
import { ClientAjoutComponent } from './private/client/client-ajout/client-ajout.component';
import { ClientDetailsComponent } from './private/client/client-details/client-details.component';
import { PersonnelManagementComponent } from './private/administration/personnel-management/personnel-management.component';
import { PersonnelAjoutComponent } from './private/administration/personnel-ajout/personnel-ajout.component';
import { PersonnelDetailsComponent } from './private/administration/personnel-details/personnel-details.component';
import { LoginComponent } from './public/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RestaurantComponent,
    ChambreComponent,
    ReservationComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    DashboardChambreComponent,
    PlanningComponent,
    SejourComponent,
    RapportComponent,
    ClientManagementComponent,
    ClientAjoutComponent,
    ClientDetailsComponent,
    PersonnelManagementComponent,
    PersonnelAjoutComponent,
    PersonnelDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
