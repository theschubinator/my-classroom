import * as types from '../actions/action-list';
import { getDefaultState as getUserDefaultState } from '../state/user';

const loadUser = (state, action) => {
  return action.user;
};

export default function(state = getUserDefaultState(), action) {
  const actionsHandler = {
    [types.USER_LOAD]: loadUser
  };

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
