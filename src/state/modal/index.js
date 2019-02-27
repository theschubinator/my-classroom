import t from 'tcomb';

const Modal = t.struct({
  type: t.String
});

export const getDefaultState = () => ({
  type: ''
});

export default Modal;
