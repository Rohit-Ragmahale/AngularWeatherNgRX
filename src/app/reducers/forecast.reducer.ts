import { Action, createReducer, on } from '@ngrx/store';
import { loadForecastsSuccess, loadForecastsFailure } from '../actions/forecast.actions';


export const forecastFeatureKey = 'forecast';

export interface ForecastState {
  forecast: any;
}

export const initialState: ForecastState = {
  forecast: {}
};

export const _forecastReducer = createReducer(
  initialState,
  on(loadForecastsSuccess, (state, {forecast}) => ({...state, forecast: forecast})),
  on(loadForecastsFailure, (state, {error}) => ({...state, forecast: {}}))
);

export function forecastReducer(state = initialState, action: Action) {
  return _forecastReducer(state, action);
}