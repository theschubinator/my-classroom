import * as types from '../action-list';

export const saveClass = classData => async dispatch => {
  const data = await new Promise((resolve, reject) => {
    resolve(classData);
  });

  return dispatch({
    class: data,
    type: types.CLASS_ADD
  });
};
