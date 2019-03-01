import * as types from '../../actions/action-list';
import modalReducer from '../../reducers/modalReducer';
import { getDefaultState as getModalDefaultState } from '../../state/modal';
import Chance from 'chance';

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

  it('should load the modalType to state', () => {
    const modalType = chance.string();

    const expectedState = { ...defaultState, modalType };

    expect(
      modalReducer(defaultState, {
        type: types.MODAL_LOAD,
        modalType
      })
    ).toEqual(expectedState);
  });
});
