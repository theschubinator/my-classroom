import t from 'tcomb';

const Class = t.struct(
  {
    name: t.String,
    subject: t.String
  },
  { name: 'Class', strict: true }
);

export default Class;
