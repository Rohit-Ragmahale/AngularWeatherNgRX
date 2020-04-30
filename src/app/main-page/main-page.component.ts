import { Component, OnInit } from '@angular/core';
import { ZipServiceService } from '../zip-service.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit { 

  zipcodes: Array<string>;
  currentWeatherList = new Map();

  ngOnInit(): void {
    this.zipcodes = this.zipService.get();
    this.currentWeatherList = this.weather.getCurrentWeatherList();
  }

  newZipAvailable(zipcode) {
    this.weather.loadCurrentWeather(zipcode).subscribe(data => {
      this.addWeather(zipcode, data);
    });
    this.zipService.add(zipcode);
  }

  addWeather(zipcode: string, data: any) {
    this.weather.addWeather(zipcode, data);
    this.currentWeatherList = this.weather.getCurrentWeatherList();
  }

  constructor(private zipService: ZipServiceService, private weather: WeatherService) { 
    this.zipcodes = zipService.get();
  }

 zipRemoved(zip) {
  console.log("main - zipRemoved");
  this.zipService.remove(zip);
  this.zipcodes = this.zipService.get();
  this.weather.removeCurrentWeatherList(zip);
  this.currentWeatherList = this.weather.getCurrentWeatherList();
 }
}
