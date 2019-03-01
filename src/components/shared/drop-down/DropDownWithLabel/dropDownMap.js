import t from 'tcomb';

export const dropDownTypes = {
  EXAM_SUBJECT: 'EXAM_SUBJECT'
};

export const DropDownTypes = t.enums(dropDownTypes, 'dropDownTypes');

export const dropDownMap = {
  EXAM_SUBJECT: {
    title: 'Subject',
    options: []
  }
};

export const getDropDownOptions = (type, customOptions, customTitle) => {
  const currentDropDown = dropDownMap[type];

  if (!currentDropDown) {
    return { title: customTitle, options: customOptions };
  }

  currentDropDown.options = customOptions || currentDropDown.options;
  currentDropDown.title = customTitle || currentDropDown.title;

  return currentDropDown;
};
