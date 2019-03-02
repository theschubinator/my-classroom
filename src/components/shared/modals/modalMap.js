import t from 'tcomb';

import CreateExam from './modalComponents/CreateExam';

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
  CREATE_EXAM: { title: 'Create Exam', Component: CreateExam }
};
