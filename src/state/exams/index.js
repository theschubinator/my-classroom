import t from 'tcomb';

import Exam from './exam';

const Exams = t.list(Exam, 'ExamsState');

export const getDefaultState = () => Exams([]);

export default Exams;
