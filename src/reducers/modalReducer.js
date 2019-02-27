import * as types from '../actions/action-list';
import { getDefaultState as getModalDefaultState } from '../state/modal';

const clearModal = () => {
  return getModalDefaultState();
};

const loadModal = (state, { modalType }) => {
  return { ...state, modalType };
};

export default function(state = getModalDefaultState(), action) {
  const actionsHandler = {
    [types.MODAL_CLEAR]: clearModal,
    [types.MODAL_LOAD]: loadModal
  };

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
