import { combineReducers } from 'redux';

import appReducer from './appReducer';
import classesReducer from './classesReducer';
import userReducer from './userReducer';
import quizReducer from './quizReducer';
import examReducer from './examReducer';

export default combineReducers({
  app: appReducer,
  classes: classesReducer,
  exams: examReducer,
  quizzes: quizReducer,
  user: userReducer
});
