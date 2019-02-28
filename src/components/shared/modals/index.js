import React from 'react';
import PropTypes from 'prop-types';

import { clearModal } from '../../../actions/actions-creator/modal';
import { connect } from 'react-redux';
import { getModalData } from './modalMap';

import './index.scss';

export const Modal = props => {
  const { title, Component } = getModalData(props.modalType);

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
        <h1>{title}</h1>
      </header>
      <Component className="modal" />
    </React.Fragment>
  );

  const classStatus = props.modalType && Component ? 'active' : 'inactive';

  return (
    <div data-testid="modal" className={`modal ${classStatus}`}>
      <div className="modal-container">
        {props.modalType && Component && renderComponent()}
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalType: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  modalType: state.modal.modalType
});

export default connect(
  mapStateToProps,
  { clearModal }
)(Modal);
