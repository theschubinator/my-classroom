import * as Modals from './modalComponents';
import t from 'tcomb';

export const modalTypes = {
  CREATE_EXAM: 'CREATE_EXAM'
};

export const ModalTypes = t.enums(modalTypes, 'ModalTypes');

export const getModalData = modalType => {
  const modal = modalMap[modalType];
  if (modal) return modal;

  return { title: '', Component: null };
};

export const modalMap = {
  CREATE_EXAM: { title: 'Create Exam', Component: Modals.CreateExam }
};
