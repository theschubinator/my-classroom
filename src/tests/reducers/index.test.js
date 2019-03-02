import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import { getDefaultState as getModalDefaultState } from '../../state/app';
import { getDefaultState as getClassesDefaultState } from '../../state/classes';
import { getDefaultState as getUserDefaultState } from '../../state/user';

describe('Given  rootReducers', () => {
  const store = createStore(rootReducer);

  it('should combine all the reducers', () => {
    expect(store.getState().app).toEqual(getModalDefaultState());
    expect(store.getState().classes).toEqual(getClassesDefaultState());
    expect(store.getState().user).toEqual(getUserDefaultState());
  });
});
