import t from 'tcomb';

const App = t.struct(
  {
    modal: t.String
  },
  { name: 'AppState', strict: true }
);

export const getDefaultState = () =>
  App({
    modal: ''
  });

export default App;
