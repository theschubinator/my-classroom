import * as types from '../../actions/action-list';
import classesReducer from '../../reducers/classesReducer';
import { getDefaultState as getClassesDefaultState } from '../../state/classes';
import Chance from 'chance';

const chance = new Chance();

describe('Given Modal Reducer', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = getClassesDefaultState();
  });

  it('should return the initial state when none is given', () => {
    const expectedState = defaultState;
    expect(classesReducer(undefined, {})).toEqual(expectedState);
  });
});
