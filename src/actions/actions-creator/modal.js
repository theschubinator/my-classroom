import * as types from '../action-list';

export const loadModal = modalType => ({
  modalType,
  type: types.MODAL_LOAD
});

export const clearModal = () => ({
  type: types.MODAL_CLEAR
});
