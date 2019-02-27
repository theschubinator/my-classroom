import React from 'react';
import PropTypes from 'prop-types';
import { modalMap } from './modalMap';

const Modal = props => {
  const ModalToRender = modalMap[props.type];

  return props.type && ModalToRender ? <ModalToRender /> : null;
};

Modal.propTypoes = {
  type: PropTypes.string.isRequired
};

export default Modal;
