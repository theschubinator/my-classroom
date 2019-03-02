import Chance from 'chance';
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Button from '../../../../components/shared/buttons/largeButton';

const chance = new Chance();

describe('The Button', () => {
  const props = Object.freeze({
    onClick: jest.fn(),
    name: chance.string()
  });

  it('should exist with the proper class name', () => {
    const { container } = render(<Button {...props} />);

    expect(
      container.getElementsByClassName('btn-large')[0]
    ).toBeInTheDocument();
  });

  it('should display the proper name', () => {
    const { queryByText } = render(<Button {...props} />);
    expect(queryByText(props.name)).toBeInTheDocument();
  });

  it('should contain a passed in click handler for when the button is clicked', () => {
    const { getByText } = render(<Button {...props} />);
    fireEvent.click(getByText(props.name));
    expect(props.onClick).toHaveBeenCalled();
  });
});
