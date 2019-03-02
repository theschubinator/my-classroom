import * as types from '../action-list';

export const saveExam = examData => async dispatch => {
  const data = await new Promise((resolve, reject) => {
    resolve(examData);
  });

  return dispatch({
    exam: data,
    type: types.EXAM_ADD
  });
};
