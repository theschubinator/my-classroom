import { combineReducers } from 'redux';

import appReducer from './appReducer';
import classesReducer from './classesReducer';
import userReducer from './userReducer';
import examReducer from './examReducer';

export default combineReducers({
  app: appReducer,
  classes: classesReducer,
  exams: examReducer,
  user: userReducer
});
