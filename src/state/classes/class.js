import t from 'tcomb';

const Class = t.struct(
  {
    name: t.String,
    subject: t.String
  },
  { name: 'Class', strict: true }
);

export const getDefaultState = () =>
  Class({
    name: '',
    subject: ''
  });

export default Class;
