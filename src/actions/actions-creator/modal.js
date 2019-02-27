import * as types from '../action-list';

export const loadModal = modalType => dispatch => {
  dispatch({
    modalType,
    type: types.MODAL_LOAD
  });
};

export const clearModal = () => dispatch => {
  dispatch({
    type: types.MODAL_CLEAR
  });
};
