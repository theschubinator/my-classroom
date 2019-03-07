import t from 'tcomb';

import Quiz from './quiz';

const Quizzes = t.list(Quiz, 'QuizzesState');

export const getDefaultState = () => Quizzes([]);

export default Quizzes;
