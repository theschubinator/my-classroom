import { combineReducers } from 'redux';
import appReducer from './appReducer';
import classesReducer from './classesReducer';

export default combineReducers({
  classes: classesReducer,
  app: appReducer
});
