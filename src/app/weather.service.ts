import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  static baseURL = 'http://api.openweathermap.org/data/2.5';
  static kAppId = '5a4b2d457ecbef9eb2a71e480b947604';
  static iconURL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';

  constructor(private http: HttpClient) { }

  loadCurrentWeather(zipcode: string): Observable<any> {
    let urlString: string = `${WeatherService.baseURL}/weather?zip=${zipcode}&units=imperial&APPID=${WeatherService.kAppId}`;
    console.log("weather url:" + urlString);
    return this.http.get<any>(urlString)
  }
  
  getForecast(zipcode: string): Observable<any> { 
    let urlString: string = `${WeatherService.baseURL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.kAppId}`;
    console.log("forecast url:" + urlString);
    return this.http.get(urlString); 
  }

  getWeatherIcon(id){
    if (id >= 200 && id <= 232)
      return WeatherService.iconURL + "art_storm.png";
    else if (id >= 501 && id <= 511)
      return WeatherService.iconURL + "art_rain.png";
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherService.iconURL + "art_light_rain.png";
    else if (id >= 600 && id <= 622)
      return WeatherService.iconURL + "art_snow.png";
    else if (id >= 801 && id <= 804)
      return WeatherService.iconURL + "art_clouds.png";
    else if (id === 741 || id === 761)
      return WeatherService.iconURL + "art_fog.png";
    else
      return WeatherService.iconURL + "art_clear.png";
  }
}
