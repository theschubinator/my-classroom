import React from 'react';
import { fireEvent } from 'react-testing-library';

import CreateExam from '../../../../../../components/shared/modals/modalComponents/CreateExam';
import {
  mockEvent,
  mockUrl,
  renderWithReduxAndRouter,
  mockClassState,
  mockModalState
} from '../../../../../testUtils';

describe('Given CreatExam Modal', () => {
  const initialState = {
    app: {
      modal: mockModalState()
    },
    classes: [
      mockClassState(),
      mockClassState(),
      mockClassState(),
      mockClassState(),
      mockClassState()
    ]
  };

  describe('and performing actions that update the form', () => {
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
  });

  describe('and an action was perform that closes the modal', () => {
    it('redirects back to the home page when `cancel` button is click', () => {
      jest.useFakeTimers();

      const route = mockUrl();
      const { getByText, history, store } = renderWithReduxAndRouter(
        <CreateExam />,
        {
          initialState
        },
        { route }
      );

      expect(history.location.pathname).toBe(route);
      expect(store.getState().app.modal.type).toBe(initialState.app.modal.type);

      fireEvent.click(getByText('Cancel'));

      jest.runAllTimers();

      expect(history.location.pathname).toBe('/');
      expect(store.getState().app.modal.type).toBe('');
    });

    it('closes the modal upon a successful submission', () => {
      jest.useFakeTimers();
      const { getByValue, store } = renderWithReduxAndRouter(<CreateExam />, {
        initialState
      });

      expect(store.getState().app.modal.type).toBe(initialState.app.modal.type);

      fireEvent.click(getByValue('Submit'));
      jest.runAllTimers();

      expect(store.getState().app.modal.type).toBe('');
    });
  });
});
