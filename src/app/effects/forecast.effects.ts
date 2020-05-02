import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { WeatherService } from '../weather.service';
import {Observable, of} from 'rxjs/index';
import {ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';
import {catchError, map, mergeMap, filter} from 'rxjs/operators';
import {loadForecastsFailure, loadForecastsSuccess} from '../actions/forecast.actions';


@Injectable()
export class ForecastEffects  {

  @Effect()
  loadCurrentConditions$: Observable<any> = this.actions$.pipe(
      ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
      filter(action => action.payload.event.url.startsWith('/forecast')),
      mergeMap(action => {
            let zipcode = action.payload.event.url.split('/').pop();
            return this.weatherService.getForecast(zipcode).pipe(
                // If successful, dispatch success action with result
                map(data => loadForecastsSuccess({forecast: data})),
                // If request fails, dispatch failed action
                catchError((err) => of(loadForecastsFailure({error: err})))
            )
          }
      )
  );

  constructor(private actions$: Actions<RouterNavigationAction>, private weatherService: WeatherService) {}
}
