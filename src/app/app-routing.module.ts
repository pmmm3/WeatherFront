import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HistoricalComponent} from "./components/historical/historical.component";
import {InfoCityComponent} from "./components/info-city/info-city.component";

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'historical/:ids', component: HistoricalComponent},
  {path: 'historical', component: HistoricalComponent},
  {path: 'city', component: InfoCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
