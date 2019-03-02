import React from 'react';
import { fireEvent } from 'react-testing-library';

import CreateExam from '../../../../../../components/shared/modals/modalComponents/CreateExam';
import {
  mockAppState,
  mockClassesState,
  mockEvent,
  mockUrl,
  renderWithReduxAndRouter
} from '../../../../../testUtils';

describe('Given CreatExam Modal', () => {
  const initialState = {
    app: mockAppState(),
    classes: mockClassesState()
  };

  it('should contain a form that sets an exams name', () => {
    const { getByLabelText } = renderWithReduxAndRouter(<CreateExam />);

    const event = mockEvent();

    const input = getByLabelText('Name');

    expect(input.value).toBe('');
    fireEvent.change(input, event);
    expect(input.value).toBe(event.target.value);
  });

  it('should contain a form that sets an exams subject', () => {
    const { getByLabelText } = renderWithReduxAndRouter(<CreateExam />, {
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

  it('should close the modal and redirect back to the home page when `cancel` button is click', () => {
    const route = mockUrl();
    const { getByText, history, store } = renderWithReduxAndRouter(
      <CreateExam />,
      {
        initialState
      },
      { route }
    );

    expect(history.location.pathname).toBe(route);
    expect(store.getState().app.modal).toBe(initialState.app.modal);

    fireEvent.click(getByText('Cancel'));

    expect(history.location.pathname).toBe('/');
    expect(store.getState().app.modal).toBe('');
  });
});
