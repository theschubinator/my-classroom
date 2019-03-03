import Modal from '../../../../components/shared/modals';
import React from 'react';

import * as ModalMap from '../../../../components/shared/modals/modalMap';
import { fireEvent } from 'react-testing-library';
import {
  mockModalState,
  mockComponent,
  renderWithRedux
} from '../../../testUtils';

describe('Given Modal', () => {
  describe('and the modal is inactive', () => {
    it('should be hidden with the className of inactive', () => {
      const { container } = renderWithRedux(<Modal />);

      const inactiveModal = container.getElementsByClassName('inactive')[0];
      expect(inactiveModal).toBeInTheDocument();
    });
  });

  describe('and the modal is active', () => {
    const initialState = {
      app: { modal: mockModalState({ active: true }) }
    };

    beforeEach(() => {
      ModalMap.getModalData = jest.fn().mockReturnValue({
        title: initialState.app.modal.type,
        Component: mockComponent()
      });
    });

    afterEach(() => {});

    it('should render the correct modal type with the className of active', () => {
      const { container, queryByText, queryByTestId } = renderWithRedux(
        <Modal />,
        {
          initialState
        }
      );

      const activeModal = container.getElementsByClassName('active')[0];
      expect(activeModal).toBeInTheDocument();

      expect(queryByText(initialState.app.modal.type)).toBeInTheDocument();
      expect(queryByTestId('mock-component')).toBeInTheDocument();
    });

    it('should be able to close the modal and a second later remove the current modal by clicking the close button so that the modal is in view until modal completly closes', () => {
      jest.useFakeTimers();

      const { getByTestId, store } = renderWithRedux(<Modal />, {
        initialState
      });

      expect(store.getState().app.modal.active).toBeTruthy();
      expect(store.getState().app.modal.type).toEqual(
        initialState.app.modal.type
      );

      fireEvent.click(getByTestId('close-btn'));

      jest.runAllTimers();

      expect(store.getState().app.modal.active).toBeFalsy();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(store.getState().app.modal.type).toEqual('');
    });
  });
});
