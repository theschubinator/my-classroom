import * as types from '../action-list';

export const saveQuiz = examData => async dispatch => {
  const data = await new Promise((resolve, reject) => {
    resolve(examData);
  });

  return dispatch({
    quiz: data,
    type: types.QUIZ_ADD
  });
};
