import PropTypes from 'prop-types';
import React, { useState } from 'react';

import './index.scss';

const InputWithLabel = props => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div data-testid="input-with-label" className={`input ${props.className}`}>
      <label htmlFor={props.for}>{props.label}</label>
      <input id={props.for} value={value} onChange={handleChange} />
    </div>
  );
};

InputWithLabel.propTypes = {
  for: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};

InputWithLabel.defaultProps = {
  className: ''
};

export default InputWithLabel;
