import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ZipcodeState, zipcodeReducer } from './zip-codes.reducer';
import { CurrentConditionsState, currentConditionsReducer, currentConditionsFeatureKey } from './current-conditions.reducer';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import { ForecastState, forecastReducer } from './forecast.reducer';

export interface State {
  zipCodesFeatureKey: ZipcodeState,
  currentConditionsFeatureKey: CurrentConditionsState,
  router: RouterReducerState,
  forecastFeatureKey: ForecastState
}

export const reducers: ActionReducerMap<State> = {
  currentConditionsFeatureKey: currentConditionsReducer,
  zipCodesFeatureKey: zipcodeReducer,
  router: routerReducer,
  forecastFeatureKey: forecastReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
 
    return reducer(state, action);
  };
}

export const selectZipcodeState = (state: State) => state.zipCodesFeatureKey;
export const selectZipcodeList = createSelector(selectZipcodeState, (state: ZipcodeState) => state.zipcodes);

export const selectCurrentConditionState = (state: State) => state.currentConditionsFeatureKey;
export const selectCurrentConditionsMap = createSelector(selectCurrentConditionState, (state: CurrentConditionsState) => state.currentConditions);

export const selectForcastState = (state: State) => state.forecastFeatureKey;
export const selectForecastData = createSelector(selectForcastState, (state: ForecastState) => state.forecast);