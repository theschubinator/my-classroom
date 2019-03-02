import t from 'tcomb';

export const dropDownButtonTypes = {
  USER_ACTIONS: 'USER_ACTIONS'
};

export const DropDownButtonTypes = t.enums(
  dropDownButtonTypes,
  'dropDownbuttonTypes'
);

export const dropDownButtonMap = {
  USER_ACTIONS: {
    title: 'Actions',
    options: [{ value: 'Create Exam', linkTo: '/teacher/exam/new' }]
  }
};
