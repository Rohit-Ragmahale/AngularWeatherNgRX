import { createAction, props } from '@ngrx/store';

export const RemoveCurrentConditions = createAction(
  '[CurrentCondition] Remove CurrentConditions',
  props<{zipToDelete: string}>()
);

export const LoadCurrentConditionsSuccess = createAction(
  '[CurrentCondition] Load CurrentConditions Success',
  props<{newZip: string, data: any}>()
);

export const LoadCurrentConditionsFailure = createAction(
  '[CurrentCondition] Load CurrentConditions Failure',
  props<{newZip: string, error: any }>()
);
