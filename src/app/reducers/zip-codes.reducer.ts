import { Action, createReducer, on } from '@ngrx/store';
import { AddZipcode, RemoveZipcode } from '../actions/zipcode.actions';

//import { Action } from 'rxjs/internal/scheduler/Action';


export const zipCodesFeatureKey = 'zipCodes';

export interface ZipcodeState {
  zipcodes: Array<string>
}

export const initialState: ZipcodeState = {
  zipcodes: []
};

export const _zipcodeReducer = createReducer(
  initialState,
  on(AddZipcode, (state, {newZip}) => ({...state, zipcodes:[...state.zipcodes, newZip]})),
  on(RemoveZipcode, (state, {zipToDelete}) => ({...state, zipcodes: state.zipcodes.filter( item => item !== zipToDelete)}))
);

export function zipcodeReducer(state = initialState, action: Action)  {
  return _zipcodeReducer(state, action);
}