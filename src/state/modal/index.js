import t from 'tcomb';

const Modal = t.struct({
  modalType: t.String
});

export const getDefaultState = () => ({
  modalType: ''
});

export default Modal;
