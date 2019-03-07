import React from 'react';

import { renderWithRedux, mockComponent as MockComponent } from './testUtils';
import { getDefaultState as getAppDefaultState } from '../state/App';
import { getDefaultState as getClassesDefaultState } from '../state/classes';
import { getDefaultState as getExamsDefaultState } from '../state/exams';
import { getDefaultState as getQuizzesDefaultState } from '../state/quizzes';
import { getDefaultState as getUserDefaultState } from '../state/user';

describe('Redux Store', () => {
  const initalState = {
    app: getAppDefaultState(),
    classes: getClassesDefaultState(),
    exams: getExamsDefaultState(),
    quizzes: getQuizzesDefaultState(),
    user: getUserDefaultState()
  };

  it('should initialize with the default Redux state', () => {
    const { store } = renderWithRedux(<MockComponent />);
    expect(store.getState()).toEqual(initalState);
  });
});
