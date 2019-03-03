import t from 'tcomb';

const Modal = t.struct(
  {
    type: t.String,
    active: t.Boolean
  },
  { name: 'ModalState', strict: true }
);

export const getDefaultState = () =>
  Modal({
    type: '',
    active: false
  });

export default Modal;
