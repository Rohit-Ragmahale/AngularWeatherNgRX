import { Component, Input, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'my-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent {
  @Input() zipcodes: Array<String>;
  @Input() currentWeatherData: Map<string, any>;
  @Output() zipRemoved = new EventEmitter();

  getConditions(zip) {
    return this.currentWeatherData.get(zip);
  }
  
  constructor(public weather: WeatherService) {
  }

  zipRemove(zip) {
    this.zipRemoved.emit(zip);
  }

  showForecast(zip) {
    
  }
}
