import React from 'react';
import PropTypes from 'prop-types';

import './buttons.scss';

const XLargeButton = props => {
  return (
    <button
      className={`btn btn-xlarge ${props.className}`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

XLargeButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

XLargeButton.defaultProps = {
  className: ''
};

export default XLargeButton;
