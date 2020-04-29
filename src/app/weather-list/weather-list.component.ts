import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent {

  @Input() zipcodes: Array<string>;;

  constructor() { }

}
