import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { clearModal } from '../../../actions/actions-creator/app';
import { getModalData } from './modalMap';

import './index.scss';

export const Modal = props => {
  const renderComponent = () => (
    <React.Fragment>
      <header>
        <span
          data-testid="close-btn"
          className="close-btn"
          onClick={props.clearModal}
        >
          X
        </span>
        <h1>{props.title}</h1>
      </header>
      <props.Component className="modal" />
    </React.Fragment>
  );

  const classStatus = props.Component ? 'active' : 'inactive';

  return (
    <div data-testid="modal" className={`modal ${classStatus}`}>
      <div className="modal-container">
        {props.Component && renderComponent()}
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired
};

const mapStateToProps = state => {
  const { title, Component } = getModalData(state.app.modal);

  return {
    title,
    Component
  };
};

export default connect(
  mapStateToProps,
  { clearModal }
)(Modal);
