import t from 'tcomb';

import State, { getDefaultState } from '../../../state/exams';

describe('The Exam State', () => {
  it('should have a type', () => {
    expect(t.getTypeName(State)).toBe('ExamsState');
  });

  it('should be a tComb struct', () => {
    expect(State.meta.kind).toBe('list');
  });

  it('should be an instance of ModalState', () => {
    expect(State.is(getDefaultState())).toBeTruthy();
  });
});
