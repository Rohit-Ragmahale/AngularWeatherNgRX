import { Component, OnInit } from '@angular/core';
import { ZipServiceService } from '../zip-service.service';
import { WeatherService } from '../weather.service';
import { Store } from '@ngrx/store';
import { State, selectZipcodeList } from '../reducers';
import { AddZipcode, RemoveZipcode } from '../actions/zipcode.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit { 

  zipcodes: Array<string>;
  currentWeatherList = new Map();

  constructor(private store: Store<State>, private weather: WeatherService) {}

  ngOnInit(): void {
    this.store.select(selectZipcodeList).subscribe(zips => this.zipcodes = zips)
    this.currentWeatherList = this.weather.getCurrentWeatherList();
  }

  newZipAvailable(zipcode) {
    this.store.dispatch(AddZipcode({newZip: zipcode}));

    this.weather.loadCurrentWeather(zipcode).subscribe(data => {
      this.addWeather(zipcode, data);
    });
  }

  addWeather(zipcode: string, data: any) {
    this.weather.addWeather(zipcode, data);
    this.currentWeatherList = this.weather.getCurrentWeatherList();
  }

 zipRemoved(zip) {
  console.log("main - zipRemoved");
  this.store.dispatch(RemoveZipcode({zipToDelete: zip}));
  this.weather.removeCurrentWeatherList(zip);
  this.currentWeatherList = this.weather.getCurrentWeatherList();
 }
}
