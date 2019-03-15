import * as types from '../action-list';
import axios from 'axios';

export const loadUser = () => async dispatch => {
  const { data } = await axios.get('/current-user');

  return dispatch({
    user: data,
    type: types.USER_LOAD
  });
};
