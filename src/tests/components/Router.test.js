import React from 'react';

import Router from '../../components/Router';
import { renderWithRedux } from '../testUtils';

describe('Given Router', () => {
  it('renders the Modal', () => {
    const { queryByTestId } = renderWithRedux(<Router />);
    expect(queryByTestId('modal')).toBeInTheDocument();
  });

  it('renders the NavHeader', () => {
    const { queryByTestId } = renderWithRedux(<Router />);
    expect(queryByTestId('nav-header')).toBeInTheDocument();
  });
});
