import Chance from 'chance';

import * as types from '../../actions/action-list';
import appReducer from '../../reducers/appReducer';
import { getDefaultState as getModalDefaultState } from '../../state/app';

const chance = new Chance();

describe('Given App Reducer', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = getModalDefaultState();
  });

  it('should return the initial state when none is given', () => {
    const expectedState = defaultState;
    expect(appReducer(undefined, {})).toEqual(expectedState);
  });

  it('should load the modal to state', () => {
    const modal = chance.string();

    const expectedState = { ...defaultState, modal };

    expect(
      appReducer(defaultState, {
        type: types.MODAL_LOAD,
        modal
      })
    ).toEqual(expectedState);
  });
});
