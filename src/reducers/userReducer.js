import * as types from '../actions/action-list';
import { getDefaultState as getUserDefaultState } from '../state/user';

export default function(state = getUserDefaultState(), action) {
  const actionsHandler = {};

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
