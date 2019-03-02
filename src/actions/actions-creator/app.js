import * as types from '../action-list';

export const loadModal = modal => ({
  modal,
  type: types.MODAL_LOAD
});

export const clearModal = () => ({
  type: types.MODAL_CLEAR
});
