import CreateExam from '../../../../../../components/shared/modals/modalComponents/CreateExam';
import React from 'react';

import { fireEvent } from 'react-testing-library';
import { mockEvent, renderWithRedux } from '../../../../../utils/';

describe('Given CreatExam Modal', () => {
  it('should contain a form that sets an exams name', () => {
    const { getByLabelText } = renderWithRedux(<CreateExam />);

    const event = mockEvent;

    const input = getByLabelText('Name');

    expect(input.value).toBe('');
    fireEvent.change(input, event);
    expect(input.value).toBe(event.target.value);
  });

  it('should contain a form that sets an exams subject', () => {
    const { getByLabelText } = renderWithRedux(<CreateExam />);

    const event = {
      target: {
        value: 'Spelling'
      }
    };

    const dropDown = getByLabelText('Subject');

    expect(dropDown.value).toBe('');
    fireEvent.change(dropDown, event);
    expect(dropDown.value).toBe(event.target.value);
  });
});
