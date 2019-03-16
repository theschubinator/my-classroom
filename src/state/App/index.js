import t from 'tcomb';

import LoadCounter, {
  getDefaultState as getLoadCounterDefaultState
} from './loadCounter';
import Modal, { getDefaultState as getModalDefaultState } from './modal';

const App = t.struct(
  {
    loadCounter: LoadCounter,
    modal: Modal
  },
  { name: 'AppState', strict: true }
);

export const getDefaultState = () =>
  App({
    loadCounter: getLoadCounterDefaultState(),
    modal: getModalDefaultState()
  });

export default App;
