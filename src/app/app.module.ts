import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WidgetComponent } from './components/widget/widget.component';
import { MiniWidgetComponent } from './components/mini-widget/mini-widget.component';

//HTTM CONF.
import {HttpClientModule} from '@angular/common/http'

//SERVICES
import { ClimaGeneralService } from './services/clima-general.service';
import { ClimaDetalleService } from './services/clima-detalle.service';
import { EstacionesService } from './services/estaciones.service';
import { AniosService } from './services/anios.service';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ControlesComponent } from './components/controles/controles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {GoogleMapsModule} from '@angular/google-maps';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ForecastComponent } from './components/forecast/forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    MiniWidgetComponent,
    NotFoundComponent,
    HomeComponent,
    MapaComponent,
    ControlesComponent,
    ForecastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    Ng2GoogleChartsModule
  ],
  providers: [
    ClimaGeneralService,
    ClimaDetalleService, 
    EstacionesService, 
    AniosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
