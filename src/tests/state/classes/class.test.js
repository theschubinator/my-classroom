import t from 'tcomb';

import Class, { getDefaultState } from '../../../state/classes/class';

describe('The Class State', () => {
  it('should have a type', () => {
    expect(t.getTypeName(Class)).toBe('Class');
  });

  it('should be a tComb struct', () => {
    expect(Class.meta.kind).toBe('struct');
  });

  it('should be an instance of ModalState', () => {
    expect(Class.is(getDefaultState())).toBeTruthy();
  });
});
