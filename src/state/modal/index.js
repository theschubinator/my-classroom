import t from 'tcomb';

const Modal = t.struct(
  {
    modalType: t.String
  },
  { name: 'ModalState', strict: true }
);

export const getDefaultState = () =>
  Modal({
    modalType: ''
  });

export default Modal;
