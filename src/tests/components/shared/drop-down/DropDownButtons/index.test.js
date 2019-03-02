import Chance from 'chance';
import React from 'react';
import { fireEvent } from 'react-testing-library';

import DropDownButtons from '../../../../../components/shared/drop-down/DropDownButtons';
import { mockUrl, renderWithRouter } from '../../../../testUtils';

const chance = new Chance();

describe('', () => {
  const mockDropdownButtonMap = {
    MOCK: {
      title: chance.string(),
      options: [{ value: chance.string(), linkTo: mockUrl() }]
    }
  };

  const props = Object.freeze({
    dropDownButtonMap: mockDropdownButtonMap,
    type: 'MOCK'
  });

  it('should render the title', () => {
    const { queryByText } = renderWithRouter(<DropDownButtons {...props} />);
    const { title } = props.dropDownButtonMap[props.type];
    expect(queryByText(title)).toBeInTheDocument();
  });

  it('should render the correct buttons with the correct routes', () => {
    const { getAllByTestId, history } = renderWithRouter(
      <DropDownButtons {...props} />
    );
    const { options } = props.dropDownButtonMap[props.type];
    const buttons = getAllByTestId('button');

    expect(buttons.length).toBe(options.length);

    buttons.forEach((button, i) => {
      expect(button.textContent).toBe(options[i].value);

      expect(history.location.pathname).toBe('/');
      fireEvent.click(button);
      expect(history.location.pathname).toBe(options[i].linkTo);
    });
  });
});
