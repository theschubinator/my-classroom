import t from 'tcomb';

export const dropDownTypes = {
  EXAM_SUBJECT: 'EXAM_SUBJECT'
};

export const DropDownTypes = t.enums(dropDownTypes, 'dropDownTypes');

export const dropDownMap = {
  EXAM_SUBJECT: {
    title: 'Subject',
    options: [
      { value: 'History' },
      { value: 'Language' },
      { value: 'Math' },
      { value: 'Other' },
      { value: 'Science' }
    ]
  }
};

export const getDropDownOptions = (type, customOptions) => {
  const currentDropDown = dropDownMap[type];

  if (customOptions) {
    currentDropDown.options = customOptions;
  }

  return currentDropDown;
};
