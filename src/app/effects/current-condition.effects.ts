import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { WeatherService } from '../weather.service';
import { Observable, of } from 'rxjs';
import { AddZipcode, RemoveZipcode } from '../actions/zipcode.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { LoadCurrentConditionsSuccess, LoadCurrentConditionsFailure, RemoveCurrentConditions } from '../actions/current-condition.actions';

@Injectable()
export class CurrentConditionEffects {
    @Effect()
    loadCurrentConditions$: Observable<any> = this.actions$.pipe(
      ofType(AddZipcode), 
      mergeMap(action => this.weatherService.loadCurrentWeather(action.newZip).pipe(
                  map(data => LoadCurrentConditionsSuccess({newZip: action.newZip, data: data})),
                  catchError((err) => of(LoadCurrentConditionsFailure({newZip: action.newZip, error: err})))
                )
             ) 
    );

    @Effect()
    deleteCurrentConditions$: Observable<any> = this.actions$.pipe(
      ofType(RemoveZipcode), 
      map(action => RemoveCurrentConditions({zipToDelete: action.zipToDelete}))
    );

  constructor(private actions$: Actions, private weatherService: WeatherService) {
  }

}