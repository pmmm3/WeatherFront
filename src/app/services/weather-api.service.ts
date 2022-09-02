import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {API_URL} from "../env";
import {Info_city} from "../models/info_city";
import {Historical} from "../models/historical";

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private http: HttpClient) {
  }

  /** GET city from the server */
  getCity(id: string | undefined): Observable<Info_city> {

    // @ts-ignore
    return this.http.get<Info_city>(API_URL + '/city/' + id)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
          return throwError(err);
        })
      )
  }

  getCities(str_cities: string): Observable<Info_city[]> {

    // @ts-ignore
    return this.http.get<Info_city[]>(API_URL + '/cities/' + str_cities)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
          return throwError(err);
        })
      )
  }

  getHistorical(str_cities: string): Observable<Historical[]> {
    return this.http.get<Historical[]>(API_URL + '/historical/' + str_cities);
  }
}
