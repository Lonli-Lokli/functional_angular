import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityResponse } from './weather.model';
import { Observable } from 'rxjs';
import { CityStationWeather } from '../typings/weather.model';
import { map } from 'rxjs/operators';
import { cityStationContractToDomainMapper } from './weather.mapper';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  public getWeather(city: string): Observable<CityStationWeather[]> {
    const key =
      city === 'London' ? 'invalidKey' : 'af3eebbf434d4cbcadf99fb26c1b10ad';
    return this.http
      .get<CityResponse>(
        `https://api.weatherbit.io/v2.0/current?key=${key}&city=${city}`
      )
      .pipe(map(c => c.data.map(cityStationContractToDomainMapper)));
  }
}
