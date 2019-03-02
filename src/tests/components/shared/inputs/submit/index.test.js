import Chance from 'chance';
import React from 'react';
import { render } from 'react-testing-library';

import SubmitInput from '../../../../../components/shared/inputs/submitInput';

const chance = new Chance();

describe('The Submit Input', () => {
  it('should render an input submit button', () => {
    const { queryByDisplayValue } = render(<SubmitInput />);
    expect(queryByDisplayValue('Submit')).toBeInTheDocument();
  });

  it('should render an input submit button with a custom value', () => {
    const props = Object.freeze({ name: chance.string() });

    const { queryByDisplayValue } = render(<SubmitInput {...props} />);
    expect(queryByDisplayValue(props.name)).toBeInTheDocument();
  });
});
