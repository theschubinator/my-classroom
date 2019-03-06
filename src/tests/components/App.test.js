import React from 'react';

import App from '../../components/App';
import { renderWithRedux } from '../testUtils';

describe('Given App', () => {
  it('renders without crashing', () => {
    const { unmount } = renderWithRedux(<App />);
    unmount();
  });
});
