import App from './App';
import React from 'react';

import { render } from 'react-testing-library';

describe('App', () => {
  it('renders without crashing', () => {
    const { unmount } = render(<App />);
    unmount();
  });

  it('renders the NavHeader', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('nav-header')).toBeInTheDocument();
  });

  it('renders the Modal', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('modal')).toBeInTheDocument();
  });
});
