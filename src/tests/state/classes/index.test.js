import t from 'tcomb';

import State, { getDefaultState } from '../../../state/classes';

describe('The Class State', () => {
  it('should have a type', () => {
    expect(t.getTypeName(State)).toBe('ClassesState');
  });

  it('should be a tComb struct', () => {
    expect(State.meta.kind).toBe('list');
  });

  it('should be an instance of ModalState', () => {
    expect(State.is(getDefaultState())).toBeTruthy();
  });
});
