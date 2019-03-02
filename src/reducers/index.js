import { combineReducers } from 'redux';

import appReducer from './appReducer';
import classesReducer from './classesReducer';
import userReducer from './userReducer';

export default combineReducers({
  app: appReducer,
  classes: classesReducer,
  user: userReducer
});
