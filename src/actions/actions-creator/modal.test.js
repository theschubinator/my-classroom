import * as actions from './modal';
import * as types from '../action-list';

describe('Given Modal Actions', () => {
  it('should be able to load a modal', () => {
    const modalType = 'modal';
    const expectedAction = { type: types.MODAL_LOAD, modalType };
    expect(actions.loadModal(modalType)).toEqual(expectedAction);
  });

  it('should be able to clear a modal', () => {
    const expectedAction = { type: types.MODAL_CLEAR };
    expect(actions.clearModal()).toEqual(expectedAction);
  });
});
