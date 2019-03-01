import Chance from 'chance';
import Modal from '../../../../components/shared/modals';
import React from 'react';

import * as ModalMap from '../../../../components/shared/modals/modalMap';
import { fireEvent } from 'react-testing-library';
import { mockComponent, renderWithRedux } from '../../../utils';

const chance = new Chance();

describe('Given Modal', () => {
  const initialState = {
    modal: {
      modalType: chance.string()
    }
  };

  describe('and the modal is inactive', () => {
    it('should be hidden with the className of inactive', () => {
      const { container, queryByText } = renderWithRedux(<Modal />);

      const inactiveModal = container.getElementsByClassName('inactive')[0];
      expect(inactiveModal).toBeInTheDocument();
      expect(queryByText(initialState.modal.modalType)).not.toBeInTheDocument();
    });
  });

  describe('and the modal is active', () => {
    ModalMap.getModalData = jest.fn().mockReturnValue({
      title: initialState.modal.modalType,
      Component: mockComponent
    });

    it('should render the correct modal type with the className of active', () => {
      const { container, queryByText, queryByTestId } = renderWithRedux(
        <Modal />,
        {
          initialState
        }
      );

      const activeModal = container.getElementsByClassName('active')[0];
      expect(activeModal).toBeInTheDocument();

      expect(queryByText(initialState.modal.modalType)).toBeInTheDocument();
      expect(queryByTestId('mock-component')).toBeInTheDocument();
    });

    it('should be able to close the active modal by clicking the close button', () => {
      const {
        container,
        queryByText,
        getByTestId,
        queryByTestId
      } = renderWithRedux(<Modal />, {
        initialState
      });

      const activeModal = container.getElementsByClassName('active')[0];
      expect(activeModal).toBeInTheDocument();

      expect(queryByText(initialState.modal.modalType)).toBeInTheDocument();
      expect(queryByTestId('mock-component')).toBeInTheDocument();

      fireEvent.click(getByTestId('close-btn'));

      const inactiveModal = container.getElementsByClassName('inactive')[0];
      expect(inactiveModal).toBeInTheDocument();
      expect(queryByText(initialState.modal.modalType)).not.toBeInTheDocument();
      expect(queryByTestId('mock-component')).not.toBeInTheDocument();
    });
  });
});
