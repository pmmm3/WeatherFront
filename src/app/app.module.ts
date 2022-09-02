import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InfoCityComponent} from './components/info-city/info-city.component';
import {HistoricalComponent} from './components/historical/historical.component';
import {HttpClientModule} from '@angular/common/http';
import {WeatherAPIService} from "./services/weather-api.service";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {AppRoutingModule} from './app-routing.module';
import {FormCityComponent} from './components/form-city/form-city.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    InfoCityComponent,
    HistoricalComponent,
    FormCityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [WeatherAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
