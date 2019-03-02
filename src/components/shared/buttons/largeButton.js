import React from 'react';
import PropTypes from 'prop-types';

import './buttons.scss';

const LargeButton = props => {
  return (
    <button
      className={`btn btn-large ${props.className}`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

LargeButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

LargeButton.defaultProps = {
  className: ''
};

export default LargeButton;
