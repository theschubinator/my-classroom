import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from '../../../actions/action-list';
import * as Actions from '../../../actions/actions-creator/exam';
import { mockExam } from '../../testUtils';

describe('Given Exam Actions', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore([]);

  it('should create an action to save a new exam', () => {
    const examData = mockExam();
    const expectedAction = { type: types.EXAM_ADD, exam: examData };

    return store.dispatch(Actions.saveExam(examData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(expectedAction);
    });
  });
});
