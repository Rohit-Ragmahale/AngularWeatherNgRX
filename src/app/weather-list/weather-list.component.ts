import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'my-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  @Input() zipcodes: Array<String>;
  @Input() currentWeatherData: Map<string, any>;
  @Output() zipRemoved = new EventEmitter();

  getConditions(zip) {
    return this.currentWeatherData.get(zip);
  }
  

  ngOnInit(): void { 
    console.log("---WeatherListComponent---")
    console.log(this.currentWeatherData);
    console.log(this.zipcodes);
    console.log("---WeatherListComponent---")
  }

  constructor(public weather: WeatherService) {
  }

  zipRemove(zip) {
    this.zipRemoved.emit(zip);
  }

  showForecast(zip) {
    
  }
}
