import rootReducer from '../../reducers/index';
import { createStore } from 'redux';

import { getDefaultState as getModalDefaultState } from '../../state/modal';

describe('Given  rootReducers', () => {
  const store = createStore(rootReducer);

  it('should combine all the reducers', () => {
    expect(store.getState().modal).toEqual(getModalDefaultState());
  });
});
