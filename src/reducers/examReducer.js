import * as types from '../actions/action-list';
import Exams, { getDefaultState as getExamDefaultState } from '../state/exams';

const addExam = (state, action) => Exams([...state, action.exam]);

export default function(state = getExamDefaultState(), action) {
  const actionsHandler = {
    [types.EXAM_ADD]: addExam
  };

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
