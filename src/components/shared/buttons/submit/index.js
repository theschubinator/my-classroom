import React from 'react';
import PropTypes from 'prop-typoes';

const SubmitButton = props => {
  return (
    <input className={`btn submit-btn ${props.className}`} type="button">
      {props.name}
    </input>
  );
};

SubmitButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
};

SubmitButton.defaultProps = {
  className: '',
  name: 'Submit'
};

export default SubmitButton;
