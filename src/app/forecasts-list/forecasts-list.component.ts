import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { WeatherService } from '../weather.service';
import {catchError, map, mergeMap, filter} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State, selectForecastData } from '../reducers';

@Component({
  selector: 'my-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent implements OnInit {
  forecast: any;
  constructor(private store: Store<State>, public weatherService: WeatherService) { }

  ngOnInit(): void {
    this.store.select(selectForecastData).subscribe(data => this.forecast = data);
  }
}
