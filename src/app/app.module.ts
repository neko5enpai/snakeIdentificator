import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { ObservationsComponent } from './observations/observations.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { CommunauteComponent } from './communaute/communaute.component';
import { ParametresComponent } from './parametres/parametres.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BottomnavComponent,
    ObservationsComponent,
    DocumentationComponent,
    CommunauteComponent,
    ParametresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
