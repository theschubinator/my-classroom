import t from 'tcomb';

const Exam = t.struct(
  {
    name: t.String,
    subject: t.String
  },
  { name: 'Exam', strict: true }
);

export const getDefaultState = () =>
  Exam({
    name: '',
    subject: ''
  });

export default Exam;
