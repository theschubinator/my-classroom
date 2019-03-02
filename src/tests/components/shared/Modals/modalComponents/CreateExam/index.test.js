import Chance from 'chance';
import CreateExam from '../../../../../../components/shared/modals/modalComponents/CreateExam';
import React from 'react';

import { fireEvent } from 'react-testing-library';
import { mockEvent, renderWithRedux } from '../../../../../testUtils';

const chance = new Chance();

describe('Given CreatExam Modal', () => {
  const initialState = {
    classes: [
      {
        name: chance.string(),
        subject: chance.string()
      }
    ]
  };

  it('should contain a form that sets an exams name', () => {
    const { getByLabelText } = renderWithRedux(<CreateExam />);

    const event = mockEvent;

    const input = getByLabelText('Name');

    expect(input.value).toBe('');
    fireEvent.change(input, event);
    expect(input.value).toBe(event.target.value);
  });

  it('should contain a form that sets an exams subject', () => {
    const { getByLabelText } = renderWithRedux(<CreateExam />, {
      initialState
    });

    const event = {
      target: {
        value: initialState.classes[0].subject
      }
    };

    const dropDown = getByLabelText('Subject');

    expect(dropDown.value).toBe('');
    fireEvent.change(dropDown, event);
    expect(dropDown.value).toBe(event.target.value);
  });
});
