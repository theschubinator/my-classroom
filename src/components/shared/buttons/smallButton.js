import React from 'react';
import PropTypes from 'prop-types';

import './buttons.scss';

const SmallButton = props => {
  return (
    <button
      type="button"
      className={`btn btn-small ${props.className}`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

SmallButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

SmallButton.defaultProps = {
  className: ''
};

export default SmallButton;
