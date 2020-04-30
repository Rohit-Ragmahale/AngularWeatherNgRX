import { Action, createReducer, on } from '@ngrx/store';
import { LoadCurrentConditionsSuccess, LoadCurrentConditionsFailure, RemoveCurrentConditions } from '../actions/current-condition.actions';

export const currentConditionsFeatureKey = 'currentConditions';

export interface CurrentConditionsState {
  currentConditions: Map<string, any>;
}

export const initialState: CurrentConditionsState = {
  currentConditions: new Map()
};

export const _currentConditionsReducer = createReducer(
  initialState,
  on(LoadCurrentConditionsSuccess,(state, {newZip, data}) => ({...state, currentConditions: addWeatherConditions(state, newZip, data)})),
  on(LoadCurrentConditionsFailure,(state, {newZip, error}) => ({...state, currentConditions: state.currentConditions})),
  on(RemoveCurrentConditions,(state, {zipToDelete}) => ({...state, currentConditions: removeConditionFor(state, zipToDelete)}))

);

 export function addWeatherConditions(state, zipcode, conditions): Map<string, any> {
  const newCurrentConditions: Map<string, any>  = new Map(state.currentConditions);
  newCurrentConditions.set(zipcode, conditions);
  return  newCurrentConditions;
}

export function removeConditionFor(state, zipToDelete): Map<string, any> {
  const newCurrentConditions: Map<string, any>  = new Map(state.currentConditions);
  newCurrentConditions.delete(zipToDelete);
  return  newCurrentConditions;
}

export function  currentConditionsReducer(state = initialState, action: Action) {
  return _currentConditionsReducer(state, action);
}

