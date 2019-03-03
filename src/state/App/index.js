import t from 'tcomb';
import Modal, { getDefaultState as getModalDefaultState } from './modal';

const App = t.struct(
  {
    modal: Modal
  },
  { name: 'AppState', strict: true }
);

export const getDefaultState = () =>
  App({
    modal: getModalDefaultState()
  });

export default App;
