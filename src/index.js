import * as serviceWorker from './serviceWorker';

import App from './components/App';
import React, { compose } from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
