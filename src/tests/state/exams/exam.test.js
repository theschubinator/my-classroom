import t from 'tcomb';

import Exam, { getDefaultState } from '../../../state/exams/exam';

describe('The Class State', () => {
  it('should have a type', () => {
    expect(t.getTypeName(Exam)).toBe('Exam');
  });

  it('should be a tComb struct', () => {
    expect(Exam.meta.kind).toBe('struct');
  });

  it('should be an instance of ModalState', () => {
    expect(Exam.is(getDefaultState())).toBeTruthy();
  });
});
