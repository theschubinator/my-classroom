import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ModalTypes } from '../../shared/modals/modalMap';
import {
  loadModalType,
  toggleModalStatus
} from '../../../actions/actions-creator/app';

import './index.scss';

const DropDownLinks = props => {
  const [status, setStatus] = useState('closed');

  const updateStatus = value => () => {
    setStatus(value);
  };

  const handleClick = modalType => () => {
    updateStatus('closed')();
    props.loadModalType(modalType);
    props.toggleModalStatus();
  };

  return (
    <div
      className={`drop-down-btns ${status}`}
      onMouseEnter={updateStatus('open')}
      onMouseLeave={updateStatus('closed')}
    >
      <div className="title">
        <span>Actions</span>
      </div>
      <div className="btn-options">
        <button
          data-testid="button"
          onClick={handleClick(ModalTypes('CREATE_EXAM'))}
        >
          Create Exam
        </button>
        <button
          data-testid="button"
          onClick={handleClick(ModalTypes('CREATE_CLASS'))}
        >
          Create Class
        </button>
      </div>
    </div>
  );
};

export default withRouter(
  connect(
    null,
    { loadModalType, toggleModalStatus }
  )(DropDownLinks)
);
