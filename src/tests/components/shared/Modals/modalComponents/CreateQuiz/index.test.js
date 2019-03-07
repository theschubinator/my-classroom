import React from 'react';
import { fireEvent } from 'react-testing-library';

import CreateQuiz from '../../../../../../components/shared/modals/modalComponents/CreateQuiz';
import { getDefaultState as getDefaultModalState } from '../../../../../../state/App/modal';
import {
  mockEvent,
  renderWithReduxAndRouter,
  mockModalState,
  mockClassesState
} from '../../../../../testUtils';

describe('Given CreatExam Modal', () => {
  const initialState = {
    app: {
      modal: mockModalState()
    },
    classes: mockClassesState()
  };

  describe('and performing actions that update the form', () => {
    it('should contain a form that sets an exams name', () => {
      const { getByLabelText } = renderWithReduxAndRouter(<CreateQuiz />);

      const event = mockEvent();

      const input = getByLabelText('Name');

      expect(input.value).toBe('');
      fireEvent.change(input, event);
      expect(input.value).toBe(event.target.value);
    });

    it('should contain a form that sets an exams subject', () => {
      const { getByLabelText } = renderWithReduxAndRouter(<CreateQuiz />, {
        initialState
      });

      const event = mockEvent({ value: initialState.classes[0].subject });

      const dropDown = getByLabelText('Subject');

      expect(dropDown.value).toBe('');
      fireEvent.change(dropDown, event);
      expect(dropDown.value).toBe(event.target.value);
    });
  });

  describe('and an action was perform that closes the modal', () => {
    it('closes the modal upon clicking cancel', () => {
      jest.useFakeTimers();
      const { getByText, store } = renderWithReduxAndRouter(<CreateQuiz />, {
        initialState
      });

      expect(store.getState().app.modal).toEqual(initialState.app.modal);

      fireEvent.click(getByText('Cancel'));
      jest.runAllTimers();

      expect(store.getState().app.modal).toEqual(getDefaultModalState());
    });

    it('closes the modal upon a successful submission', () => {
      jest.useFakeTimers();
      const { getByValue, store } = renderWithReduxAndRouter(<CreateQuiz />, {
        initialState
      });

      expect(store.getState().app.modal).toEqual(initialState.app.modal);

      fireEvent.click(getByValue('Submit'));
      jest.runAllTimers();

      expect(store.getState().app.modal).toEqual(getDefaultModalState());
    });
  });
});
