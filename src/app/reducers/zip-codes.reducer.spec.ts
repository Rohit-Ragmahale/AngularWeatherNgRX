import { zipcodeReducer, initialState } from './zip-codes.reducer';

describe('ZipCodes Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = zipcodeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
