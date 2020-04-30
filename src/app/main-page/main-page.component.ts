import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Store } from '@ngrx/store';
import { State, selectZipcodeList, selectCurrentConditionsMap } from '../reducers';
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
    this.store.select(selectCurrentConditionsMap).subscribe(map => this.currentWeatherList = map);
  }

  newZipAvailable(zipcode) {
    this.store.dispatch(AddZipcode({newZip: zipcode}));
  }

 zipRemoved(zip) {
  this.store.dispatch(RemoveZipcode({zipToDelete: zip}));
 }
}
