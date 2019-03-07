import React from 'react';
import { fireEvent } from 'react-testing-library';

import CreateClass from '../../../../../../components/shared/modals/modalComponents/CreateClass';
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
    it('should contain a form that sets a class name', () => {
      const { getByLabelText } = renderWithReduxAndRouter(<CreateClass />);

      const event = mockEvent();

      const input = getByLabelText('Name');

      expect(input.value).toBe('');
      fireEvent.change(input, event);
      expect(input.value).toBe(event.target.value);
    });

    it('should contain a form that sets an class subject', () => {
      const { getByLabelText } = renderWithReduxAndRouter(<CreateClass />, {
        initialState
      });

      const event = mockEvent();

      const dropDown = getByLabelText('Subject');

      expect(dropDown.value).toBe('');
      fireEvent.change(dropDown, event);
      expect(dropDown.value).toBe(event.target.value);
    });
  });

  describe('and an action was perform that closes the modal', () => {
    it('closes the modal upon clicking cancel', () => {
      jest.useFakeTimers();
      const { getByText, store } = renderWithReduxAndRouter(<CreateClass />, {
        initialState
      });

      expect(store.getState().app.modal).toEqual(initialState.app.modal);

      fireEvent.click(getByText('Cancel'));
      jest.runAllTimers();

      expect(store.getState().app.modal).toEqual(getDefaultModalState());
    });

    it('closes the modal upon a successful submission', () => {
      jest.useFakeTimers();
      const { getByValue, store } = renderWithReduxAndRouter(<CreateClass />, {
        initialState
      });

      expect(store.getState().app.modal).toEqual(initialState.app.modal);

      fireEvent.click(getByValue('Submit'));
      jest.runAllTimers();

      expect(store.getState().app.modal).toEqual(getDefaultModalState());
    });
  });
});
