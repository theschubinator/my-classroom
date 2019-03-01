import State, { getDefaultState } from '../../../state/modal';
import t from 'tcomb';

describe('The Modal State', () => {
  it('should have a type', () => {
    expect(t.getTypeName(State)).toBe('ModalState');
  });

  it('should be a tComb struct', () => {
    expect(State.meta.kind).toBe('struct');
  });

  it('should be an instance of ModalState', () => {
    expect(State.is(getDefaultState())).toBeTruthy();
  });
});
