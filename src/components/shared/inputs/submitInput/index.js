import React from 'react';
import PropTypes from 'prop-types';

const SubmitInput = props => {
  return (
    <input
      className={`btn submit-btn ${props.className}`}
      type="submit"
      value={props.name}
    />
  );
};

SubmitInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
};

SubmitInput.defaultProps = {
  className: '',
  name: 'Submit'
};

export default SubmitInput;
