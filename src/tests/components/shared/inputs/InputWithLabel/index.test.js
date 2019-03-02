import Chance from 'chance';
import React from 'react';
import { mockEvent } from '../../../../testUtils';
import { render, fireEvent } from 'react-testing-library';

import InputWithLabel from '../../../../../components/shared/inputs/InputWithLabel';

const chance = new Chance();

describe('Given InputWithLabel', () => {
  const props = Object.freeze({
    for: chance.string(),
    label: chance.string()
  });

  it('should contain an input whose values updates when a user enters text', () => {
    const { getByLabelText } = render(<InputWithLabel {...props} />);
    const input = getByLabelText(props.label);

    expect(input.value).toBe('');

    const event = mockEvent();
    fireEvent.change(input, event);
    expect(input.value).toBe(event.target.value);
  });
});
