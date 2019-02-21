import App from './App';
import React from 'react';

import { render } from 'react-testing-library';

it('renders without crashing', () => {
  const { unmount } = render(<App />);
  unmount();
});
