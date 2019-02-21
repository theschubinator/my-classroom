import App from './App';
import React from 'react';

import { render } from 'react-testing-library';

describe('App', () => {
  const { unmount } = render(<App />);

  it('renders without crashing', () => {
    unmount();
  });

  describe('the rendered elements', () => {
    const { queryByTestId } = render(<App />);

    it('should render the navBar', () => {
      expect(queryByTestId('nav-header')).not.toBeNull();
    });
  });
});
