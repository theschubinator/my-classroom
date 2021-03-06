import t from 'tcomb';

import CreateExam from './modalComponents/CreateExam';
import CreateClass from './modalComponents/CreateClass';
import CreateQuiz from './modalComponents/CreateQuiz';

export const modalTypes = {
  CREATE_EXAM: 'CREATE_EXAM',
  CREATE_CLASS: 'CREATE_CLASS',
  CREATE_QUIZ: 'CREATE_QUIZ'
};

export const ModalTypes = t.enums(modalTypes, 'ModalTypes');

export const getModalData = modalType => {
  const modal = modalMap[modalType];
  if (modal) return modal;

  return { title: '', Component: '' };
};

export const modalMap = {
  CREATE_EXAM: { title: 'Create Exam', Component: CreateExam },
  CREATE_CLASS: { title: 'Create Class', Component: CreateClass },
  CREATE_QUIZ: { title: 'Create Quiz', Component: CreateQuiz }
};
