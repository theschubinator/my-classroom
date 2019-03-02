import * as types from '../../actions/action-list';
import userReducer from '../../reducers/userReducer';
import { getDefaultState as getClassesDefaultState } from '../../state/user';

describe('Given User Reducer', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = getClassesDefaultState();
  });

  it('should return the initial state when none is given', () => {
    const expectedState = defaultState;
    expect(userReducer(undefined, {})).toEqual(expectedState);
  });
});
