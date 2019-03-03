import t from 'tcomb';

const App = t.struct(
  {
    modal: t.String,
    modalStatus: t.String
  },
  { name: 'AppState', strict: true }
);

export const getDefaultState = () =>
  App({
    modal: '',
    modalStatus: 'inactive'
  });

export default App;
