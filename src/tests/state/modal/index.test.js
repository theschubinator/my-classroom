import t from 'tcomb';

import State, { getDefaultState } from '../../../state/app';

describe('The App State', () => {
  it('should have a type', () => {
    expect(t.getTypeName(State)).toBe('AppState');
  });

  it('should be a tComb struct', () => {
    expect(State.meta.kind).toBe('struct');
  });

  it('should be an instance of AppState', () => {
    expect(State.is(getDefaultState())).toBeTruthy();
  });
});
