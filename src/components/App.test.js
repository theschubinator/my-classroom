import App from './App';
import React from 'react';

import { render } from 'react-testing-library';

describe('App', () => {
  it('renders without crashing', () => {
    const { unmount } = render(<App />);
    unmount();
  });

  it('renders the navBar', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('nav-header')).toBeInTheDocument();
  });
});
