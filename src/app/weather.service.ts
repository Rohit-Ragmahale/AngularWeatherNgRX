import { Injectable } from '@angular/core';
//import { catchError, map} from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  static baseURL = 'http://api.openweathermap.org/data/2.5';
  static kAppId = '5a4b2d457ecbef9eb2a71e480b947604';
  static iconURL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';

  private currentWeatherList: Map<string, any> = new Map();
  constructor(private http: HttpClient) { }

  loadCurrentWeatherFor(zipcode: string) {
    console.log("loadCurrentWeatherFor" + zipcode);
    let urlString: string = `${WeatherService.baseURL}/weather?zip=${zipcode}&units=imperial&APPID=${WeatherService.kAppId}`;
    console.log("url:" + urlString);
    this.http.get<any>(urlString).subscribe(data => {
      this.addWeather(zipcode, data);
    });
  }


  loadCurrentWeather(zipcode: string): Observable<any> {
    console.log("loadCurrentWeatherFor" + zipcode);
    let urlString: string = `${WeatherService.baseURL}/weather?zip=${zipcode}&units=imperial&APPID=${WeatherService.kAppId}`;
    console.log("url:" + urlString);
    return this.http.get<any>(urlString)
  }
//{"coord":{"lon":-73.99,"lat":40.72},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":49.62,"feels_like":40.86,"temp_min":48,"temp_max":52,"pressure":1023,"humidity":87},"visibility":16093,"wind":{"speed":13.87,"deg":40},"clouds":{"all":90},"dt":1588171485,"sys":{"type":1,"id":4610,"country":"US","sunrise":1588154182,"sunset":1588204192},"timezone":-14400,"id":0,"name":"New York","cod":200}

getForecast(zipcode: string): Observable<any> {

  let urlString: string = `${WeatherService.baseURL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.kAppId}`;

    console.log("forecast url:" + urlString);
  // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
  return this.http.get(urlString); 
}

  handleErr(err) {
    console.log("erroe" + err);
  }

  addWeather(zipcode: string, data: any) {
    this.currentWeatherList.set(zipcode, data);
  } 

  getCurrentWeatherList() {
    return this.currentWeatherList;
  }

  removeCurrentWeatherList(zipcode) {
    this.currentWeatherList.delete(zipcode);
  }

  getCurrentWeatherForZip(zipcode: string) {
    for (let i in this.currentWeatherList){
      if (this.currentWeatherList[i].zip == zipcode)
        return this.currentWeatherList[i];
    }
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
