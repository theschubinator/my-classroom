import React from 'react';
import rootReducer from '../../reducers';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-testing-library';

export function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk))
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),

    store
  };
}
