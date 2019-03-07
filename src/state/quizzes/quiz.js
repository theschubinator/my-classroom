import t from 'tcomb';

const Quiz = t.struct(
  {
    name: t.String,
    subject: t.String
  },
  { name: 'Quiz', strict: true }
);

export default Quiz;
