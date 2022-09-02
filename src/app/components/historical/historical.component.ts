import {Component, OnInit} from '@angular/core';
import {WeatherAPIService} from "../../services/weather-api.service";
import {Historical} from "../../models/historical";
import {ActivatedRoute} from "@angular/router";
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HistoricalComponent implements OnInit {
  show = false;
  loading = true;
  // cities: Historical[] = [];
  cities: Historical[] = [];
  columnsToDisplay = ['name', 'latitude', 'longitude'];
  expandedElement: Historical['historical_weather'] | undefined;

  constructor(private service: WeatherAPIService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.show = false;
    // console.log(String(this.route.snapshot.paramMap.get('ids')));
    if (String(this.route.snapshot.paramMap.get('ids')) != null) {
      this.getHistorical(String(this.route.snapshot.paramMap.get('ids')))
    }

  }

  private isEmpty(ob: any) {
    for (var i in ob) {
      return false;
    }
    return true;
  }

  private check(): void {
    let cities_aux: Historical[] = [];
    for (let elemento of this.cities) {
      if (!this.isEmpty(elemento)) {
        cities_aux.push(elemento)
      }
    }
    this.cities = cities_aux;

  }

  getHistorical(str_cities: string): void {
    this.loading = true;
    this.service.getHistorical(str_cities)
      .subscribe(cities => {
        this.cities = cities;
        this.loading = false;

        this.check();
        this.show= true;


      });
  }

  // submitCity(cityCode: HTMLInputElement) {
  //   this.show = true;
  //   this.loading = true;
  //   this.getHistorical('833,2960');
  // if (cityCode.value) {
  //   console.log(cityCode.value)
  //   this.loading = false;
  // }
  // else {
  //   alert('Please. Insert some values');
  // }
  // }
}
