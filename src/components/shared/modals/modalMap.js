import t from 'tcomb';

import CreateExam from './modalComponents/CreateExam';
import CreateClass from './modalComponents/CreateClass';

export const modalTypes = {
  CREATE_EXAM: 'CREATE_EXAM',
  CREATE_CLASS: 'CREATE_CLASS'
};

export const ModalTypes = t.enums(modalTypes, 'ModalTypes');

export const getModalData = modalType => {
  const modal = modalMap[modalType];
  if (modal) return modal;

  return { title: '', Component: '' };
};

export const modalMap = {
  CREATE_EXAM: { title: 'Create Exam', Component: CreateExam },
  CREATE_CLASS: { title: 'Create Class', Component: CreateClass }
};
