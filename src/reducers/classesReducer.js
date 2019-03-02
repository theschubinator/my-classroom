import * as types from '../actions/action-list';
import { getDefaultState as getClassesDefaultState } from '../state/classes';

export default function(state = getClassesDefaultState(), action) {
  const actionsHandler = {};

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
