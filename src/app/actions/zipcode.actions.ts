import { createAction, props } from '@ngrx/store';

export const AddZipcode = createAction(
                          '[Zipcode] add Zipcode', 
                          props<{newZip: string}>());
export const RemoveZipcode = createAction(
                             '[Zipcode] remove Zipcode', 
                              props<{zipToDelete: string}>());