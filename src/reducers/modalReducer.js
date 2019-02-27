import * as types from '../actions/actions-list';
import { getDefaultState as getModalDefaultState } from '../state/modal';

export default function(state = getModalDefaultState(), action) {
  const actionsHandler = {};

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
