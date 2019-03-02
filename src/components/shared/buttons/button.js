import React from 'react';
import PropTypes from 'prop-types';

import './buttons.scss';

const Button = props => {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  className: ''
};

export default Button;
