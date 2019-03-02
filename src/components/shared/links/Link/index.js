import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

import './index.scss';

const Link = props => {
  return (
    <span className={`link ${props.className}`}>
      <RouterLink to={props.to}>{props.title}</RouterLink>
    </span>
  );
};

Link.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

Link.defaultProps = {
  className: ''
};

export default Link;
