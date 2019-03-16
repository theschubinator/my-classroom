import React from 'react';

import LoadingIndicator from '../../../../components/shared/loadingIndicator';
import { renderWithRedux } from '../../../testUtils';

describe('Given LoadingIndicator', () => {
  it('should return null if nothing is loading', () => {
    const initialState = {
      app: { loadCounter: { count: 0 } }
    };
    const { queryByTestId } = renderWithRedux(<LoadingIndicator />, {
      initialState
    });

    expect(queryByTestId('load-counter')).not.toBeInTheDocument();
  });

  it('should return the loading indicator if application is loading something', () => {
    const initialState = {
      app: { loadCounter: { count: 1 } }
    };
    const { queryByTestId } = renderWithRedux(<LoadingIndicator />, {
      initialState
    });

    expect(queryByTestId('load-counter')).toBeInTheDocument();
  });
});
