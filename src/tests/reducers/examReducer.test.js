import * as types from '../../actions/action-list';
import Exam from '../../state/exams/exam';
import examReducer from '../../reducers/examReducer';
import { getDefaultState as getExamsDefaultState } from '../../state/exams';
import { mockExam } from '../testUtils';

describe('Given Modal Reducer', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = getExamsDefaultState();
  });

  it('should return the initial state when none is given', () => {
    const expectedState = defaultState;
    expect(examReducer(undefined, {})).toEqual(expectedState);
  });

  it('should be able to add a new exam to the list of exams', () => {
    const exam = mockExam();
    const expectedState = [...defaultState, exam];
    const actionResults = examReducer(defaultState, {
      type: types.EXAM_ADD,
      exam
    });

    expect(actionResults).toEqual(expectedState);

    actionResults.forEach(result => {
      expect(result).toBeInstanceOf(Exam);
    });
  });
});
