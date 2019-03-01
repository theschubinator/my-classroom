import * as actions from '../../../actions/actions-creator/modal';
import * as types from '../../../actions/action-list';

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
