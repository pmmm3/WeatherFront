import {Component, OnInit} from '@angular/core';
import {Info_city} from "../../models/info_city";
import {WeatherAPIService} from "../../services/weather-api.service";

@Component({
  selector: 'app-info-city',
  templateUrl: './info-city.component.html',
  styleUrls: ['./info-city.component.scss']
})
export class InfoCityComponent implements OnInit {
  displayedColumns = ['name', 'latitude', 'longitude', 'weather', 'temp', 'humidity', 'pressure'];
  show = false;
  loading = true;
  cities: Info_city[] = [];
  city!: Info_city;
  private errorMessage: any;
  error_city = false;

  constructor(private service: WeatherAPIService) {
  }

  ngOnInit(): void {
    this.show = false;
  }

  // @ts-ignore
  getCityInfo(id: string): Info_city {
    this.loading = true;
    this.service.getCity(id)
      .subscribe((response) => {
          this.city = response;
          //console.log(city)
          //console.log(this.city)
          this.cities.push(response);
          this.loading = false;
          this.error_city = false;
        },
        (error) => {
          console.error('error caught in component')
          this.errorMessage = error;
          this.loading = false;
          this.error_city = true;
        });
  }

  private isEmpty(ob: any) {
    for (var i in ob) {
      return false;
    }
    return true;
  }

  private check(): void {
    let cities_aux: Info_city[] = [];
    for (let elemento of this.cities) {
      if (!this.isEmpty(elemento)) {
        cities_aux.push(elemento)
      }
    }
    this.cities = cities_aux;
    console.log(this.cities);
  }

  getCitiesInfo(id: string): void {
    this.loading = true;
    this.service.getCities(id)
      .subscribe((response) => {
          this.cities = response;
          //console.log(city)
          //console.log(this.city)
          this.loading = false;
          this.error_city = false;
          this.check();
        },
        (error) => {
          console.error('error caught in component')
          this.errorMessage = error;
          this.loading = false;
          this.error_city = true;
        });
  }

  submitCity(cityCode: HTMLInputElement) {
    this.cities = [];
    this.show = true;
    this.loading = true;
    if (cityCode.value) {
      let str_cities = cityCode.value;
      if ((cityCode.value.split(',')).length > 1) {
        this.getCitiesInfo(str_cities);
      } else {
        // @ts-ignore
        this.getCityInfo(cityCode.value)
      }
      cityCode.value = '';
    } else {
      alert('Please. Insert some values');
    }
    cityCode.focus();
    return false;
  }


}
