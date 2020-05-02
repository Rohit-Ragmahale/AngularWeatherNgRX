import { createAction, props } from '@ngrx/store';

// export const loadForecasts = createAction(
//   '[Forecast] Load Forecasts'
// );

export const loadForecastsSuccess = createAction(
  '[Forecast] Load Forecasts Success',
  props<{ forecast: any }>()
);

export const loadForecastsFailure = createAction(
  '[Forecast] Load Forecasts Failure',
  props<{ error: any }>()
);
