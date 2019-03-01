import Chance from 'chance';
import DropDown from '../../../../../components/shared/drop-down/DropDownWithLabel';
import React from 'react';

import { fireEvent, render } from 'react-testing-library';
import * as DropDownMap from '../../../../../components/shared/drop-down/DropDownWithLabel/dropDownMap';

const chance = new Chance();

const mockOptions = {
  title: chance.string(),
  options: [{ value: chance.string() }]
};

describe('Given DropDown', () => {
  DropDownMap.getDropDownOptions = jest.fn().mockReturnValue(mockOptions);

  const props = Object.freeze({
    for: chance.string(),
    type: chance.string()
  });

  it('should render the options', () => {
    const { getAllByTestId } = render(<DropDown {...props} />);
    expect(getAllByTestId('drop-down-option')).toHaveLength(
      mockOptions.options.length
    );
  });

  it('should set the drop down value on change', () => {
    const { getByLabelText } = render(<DropDown {...props} />);

    const selectInput = getByLabelText(mockOptions.title);

    expect(selectInput.value).toBe('');

    const event = {
      target: {
        value: mockOptions.options[0].value
      }
    };

    fireEvent.change(selectInput, event);
    expect(selectInput.value).toBe(event.target.value);
  });
});
