import State, { getDefaultState } from '../../../state/user';
import t from 'tcomb';

describe('The User State', () => {
  it('should have a type', () => {
    expect(t.getTypeName(State)).toBe('UserState');
  });

  it('should be a tComb struct', () => {
    expect(State.meta.kind).toBe('struct');
  });

  it('should be an instance of ModalState', () => {
    expect(State.is(getDefaultState())).toBeTruthy();
  });
});
