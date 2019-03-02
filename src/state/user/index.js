import t from 'tcomb';

const User = t.struct(
  {
    id: t.String,
    name: t.String
  },
  { name: 'UserState', strict: true }
);

export const getDefaultState = () =>
  User({
    id: '',
    name: ''
  });

export default User;
