import Chance from 'chance';
import { fireEvent } from 'react-testing-library';

import Link from '../../../../../components/shared/links/Link';
import React from 'react';
import { mockUrl, renderWithRouter } from '../../../../testUtils';

const chance = new Chance();

describe('Given Link', () => {
  const props = Object.freeze({
    title: chance.string(),
    to: mockUrl()
  });

  it('should exist and redirect to the correct route when clicked', () => {
    const { queryByText, getByText, history } = renderWithRouter(
      <Link {...props} />
    );

    expect(queryByText(props.title)).toBeInTheDocument();

    expect(history.location.pathname).toMatch('/');
    fireEvent.click(getByText(props.title));
    expect(history.location.pathname).toMatch(props.to);
  });
});
