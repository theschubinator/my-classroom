import { combineReducers } from 'redux';

import loadCounterReducer from './loadCounterReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  loadCounter: loadCounterReducer,
  modal: modalReducer
});
