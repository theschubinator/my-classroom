import * as types from '../actions/action-list';
import Classes, {
  getDefaultState as getClassesDefaultState
} from '../state/classes';

const addClass = (state, action) => {
  return Classes([...state, action.class]);
};

export default function(state = getClassesDefaultState(), action) {
  const actionsHandler = {
    [types.CLASS_ADD]: addClass
  };

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
