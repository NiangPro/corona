import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DiscoursComponent } from './discours/discours.component';
import { BilanComponent } from './bilan/bilan.component';
import { PreventionComponent } from './prevention/prevention.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { SearchComponent } from './search/search.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DiscoursComponent,
    BilanComponent,
    PreventionComponent,
    NavbarComponent,
    SearchComponent,
    DashboardCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
