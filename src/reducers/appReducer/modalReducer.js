import * as types from '../../actions/action-list';
import Modal, {
  getDefaultState as getModalDefaultState
} from '../../state/App/modal';

const loadModalType = (state, { modal }) => {
  return Modal({ ...state, type: modal });
};

const clearModal = () => {
  return getModalDefaultState();
};

const toggleModalStatus = (state, action) => {
  const active = !state.active;

  return Modal({ ...state, active });
};

export default function(state = getModalDefaultState(), action) {
  const actionsHandler = {
    [types.MODAL_CLEAR]: clearModal,
    [types.MODAL_LOAD_TYPE]: loadModalType,
    [types.MODAL_TOGGLE_STATUS]: toggleModalStatus
  };

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
