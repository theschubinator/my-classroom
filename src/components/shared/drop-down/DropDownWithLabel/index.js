import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getDropDownOptions } from './dropDownMap';

const DropDown = props => {
  const { title, options } = getDropDownOptions(
    props.type,
    props.options,
    props.title
  );

  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const renderOptions = () => {
    return options.map(option => {
      return (
        <option
          data-testid="drop-down-option"
          key={option.value}
          value={option.value}
        >
          {option.value}
        </option>
      );
    });
  };

  return (
    <div className="drop-down-with-label">
      <label htmlFor={props.for}>{title}</label>
      <select value={value} id={props.for} onChange={handleChange}>
        <option disabled value="">
          -
        </option>
        {renderOptions()}
      </select>
    </div>
  );
};

DropDown.propTypes = {
  for: PropTypes.string.isRequired,
  options: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string
};

export default DropDown;
