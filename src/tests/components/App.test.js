import App from '../../components/App';
import React from 'react';

import { renderWithRedux } from '../utils';

describe('App', () => {
  it('renders without crashing', () => {
    const { unmount } = renderWithRedux(<App />);
    unmount();
  });

  it('renders the NavHeader', () => {
    const { queryByTestId } = renderWithRedux(<App />);
    expect(queryByTestId('nav-header')).toBeInTheDocument();
  });

  it('renders the Modal', () => {
    const { queryByTestId } = renderWithRedux(<App />);
    expect(queryByTestId('modal')).toBeInTheDocument();
  });
});
