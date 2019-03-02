import Chance from 'chance';

import * as actions from '../../../actions/actions-creator/app';
import * as types from '../../../actions/action-list';

const chance = new Chance();

describe('Given App Actions', () => {
  describe('the Modal state', () => {
    it('should be able to load a modal', () => {
      const modal = chance.string();
      const expectedAction = { type: types.MODAL_LOAD, modal };
      expect(actions.loadModal(modal)).toEqual(expectedAction);
    });

    it('should be able to clear a modal', () => {
      const expectedAction = { type: types.MODAL_CLEAR };
      expect(actions.clearModal()).toEqual(expectedAction);
    });
  });
});
