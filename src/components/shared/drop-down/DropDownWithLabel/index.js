import PropTypes from 'prop-types';
import React, { useState } from 'react';

const DropDown = props => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const renderOptions = () => {
    return props.options.map(option => {
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
      <label htmlFor={props.for}>{props.title}</label>
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
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default DropDown;
