import Chance from 'chance';

import * as types from '../../../actions/action-list';
import modalReducer from '../../../reducers/appReducer/modalReducer';
import { getDefaultState as getModalDefaultState } from '../../../state/app/modal';

const chance = new Chance();

describe('Given Modal Reducer', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = getModalDefaultState();
  });

  it('should return the initial state when none is given', () => {
    const expectedState = defaultState;
    expect(modalReducer(undefined, {})).toEqual(expectedState);
  });

  it('should load the modal to state', () => {
    const modal = chance.string();

    const expectedState = { ...defaultState, modal };

    expect(
      modalReducer(defaultState, {
        type: types.MODAL_LOAD,
        modal
      })
    ).toEqual(expectedState);
  });
});
