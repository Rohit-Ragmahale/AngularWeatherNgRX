import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { WeatherService } from '../weather.service';
import {catchError, map, mergeMap, filter} from 'rxjs/operators';


@Component({
  selector: 'my-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent implements OnInit {
  zipcode = "";
  forecast: any;

  constructor(private route: ActivatedRoute, public weatherService: WeatherService) {
    
   }

  ngOnInit(): void {
    this.zipcode = this.route.snapshot.paramMap.get('zip');
    console.log("forecast for " + this.zipcode);
    this.weatherService.getForecast(this.zipcode).subscribe(data => {
      this.handleData(data);
    });
  }

  handleData(data) {
    this.forecast = data;
    console.log(data);
  }
}
