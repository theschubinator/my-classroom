import * as types from '../action-list';

export const loadModalType = modal => ({
  modal,
  type: types.MODAL_LOAD_TYPE
});

export const clearModal = () => ({
  type: types.MODAL_CLEAR
});

export const toggleModalStatus = () => ({ type: types.MODAL_TOGGLE_STATUS });

export const addCountToLoader = () => ({ type: types.LOADER_COUNTER_ADD });

export const removeCountFromLoader = () => ({
  type: types.LOADER_COUNTER_REMOVE
});
