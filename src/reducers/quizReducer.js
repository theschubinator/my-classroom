import * as types from '../actions/action-list';
import Quizzes, {
  getDefaultState as getQuizzesDefaultState
} from '../state/exams';

const addQuiz = (state, action) => Quizzes([...state, action.quiz]);

export default function(state = getQuizzesDefaultState(), action) {
  const actionsHandler = {
    [types.QUIZ_ADD]: addQuiz
  };

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
