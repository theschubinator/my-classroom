import * as types from '../../actions/action-list';
import LoadCounter, {
  getDefaultState as getModalDefaultState
} from '../../state/App/loadCounter';

const addToCounter = state => {
  return LoadCounter({ ...state, count: state.count + 1 });
};

const removeFromCounter = state => {
  return LoadCounter({ ...state, count: state.count - 1 });
};

export default function(state = getModalDefaultState(), action) {
  const actionsHandler = {
    [types.LOADER_COUNTER_ADD]: addToCounter,
    [types.LOADER_COUNTER_REMOVE]: removeFromCounter
  };

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
