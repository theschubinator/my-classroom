import Chance from 'chance';
import DropDown from '../../../../../components/shared/drop-down/DropDownWithLabel';
import React from 'react';

import { fireEvent, render } from 'react-testing-library';

const chance = new Chance();

describe('Given DropDown', () => {
  const props = Object.freeze({
    for: chance.string(),
    title: chance.string(),
    options: [{ value: chance.string() }]
  });

  it('should render the options', () => {
    const { getAllByTestId } = render(<DropDown {...props} />);
    expect(getAllByTestId('drop-down-option')).toHaveLength(
      props.options.length
    );
  });

  it('should set the drop down value on change', () => {
    const { getByLabelText } = render(<DropDown {...props} />);

    const selectInput = getByLabelText(props.title);

    expect(selectInput.value).toBe('');

    const event = {
      target: {
        value: props.options[0].value
      }
    };

    fireEvent.change(selectInput, event);
    expect(selectInput.value).toBe(event.target.value);
  });
});
