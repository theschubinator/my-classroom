import Chance from 'chance';
import HistoryLink from '../../../../../components/shared/links/HistoryLink';
import React from 'react';

import { fireEvent } from 'react-testing-library';
import { mockUrl, renderWithRouter } from '../../../../testUtils';

const chance = new Chance();

describe('Given HistoryLink', () => {
  describe('it should be able to render a button link', () => {
    const props = Object.freeze({
      title: chance.string(),
      type: 'btn',
      route: mockUrl()
    });

    it('should exist and be able to redirect to the correct route', () => {
      const { getByText, queryByText, history } = renderWithRouter(
        <HistoryLink {...props} />
      );

      expect(queryByText(props.title)).toBeInTheDocument();

      expect(history.location.pathname).toBe('/');
      fireEvent.click(getByText(props.title));
      expect(history.location.pathname).toBe(props.route);
    });
  });

  describe('it should be able to render an image link', () => {
    const props = Object.freeze({
      type: 'src',
      route: mockUrl(),
      src: chance.string()
    });

    it('should exist and be able to redirect to the correct route', () => {
      const { queryByTestId, history } = renderWithRouter(
        <HistoryLink {...props} />
      );

      expect(queryByTestId(`link-${props.type}`)).toBeInTheDocument();

      expect(history.location.pathname).toBe('/');
      fireEvent.click(queryByTestId(`link-${props.type}`));
      expect(history.location.pathname).toBe(props.route);
    });
  });
});
