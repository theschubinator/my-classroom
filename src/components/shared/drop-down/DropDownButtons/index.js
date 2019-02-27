import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { dropDownButtonMap } from './dropDownButtonMap';
import { withRouter } from 'react-router-dom';

import './index.scss';

const DropDownButtons = props => {
  const { title, options } = props.dropDownButtonMap[props.type];

  const [status, setStatus] = useState('closed');

  const updateStatus = value => () => {
    setStatus(value);
  };

  const handleClick = e => {
    updateStatus('closed')();
    props.history.push(e.target.value);
  };

  const renderOptionButtons = () => {
    return options.map(option => {
      return (
        <button
          data-testid="button"
          key={option.value}
          value={option.linkTo}
          onClick={handleClick}
        >
          {option.value}
        </button>
      );
    });
  };

  return (
    <div
      className={`${props.className} drop-down-btns ${status}`}
      onMouseEnter={updateStatus('open')}
      onMouseLeave={updateStatus('closed')}
    >
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="btn-options">
        {renderOptionButtons()}
        {renderOptionButtons()}
        {renderOptionButtons()}
        {renderOptionButtons()}
        {renderOptionButtons()}
      </div>
    </div>
  );
};

DropDownButtons.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired
};

DropDownButtons.defaultProps = {
  className: '',
  dropDownButtonMap
};

export default withRouter(DropDownButtons);
