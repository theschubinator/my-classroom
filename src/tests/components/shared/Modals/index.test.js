import Chance from 'chance';
import Modal from '../../../../components/shared/modals';
import React from 'react';

import * as ModalMap from '../../../../components/shared/modals/modalMap';
import { fireEvent } from 'react-testing-library';
import { mockComponent, renderWithRedux } from '../../../testUtils';

const chance = new Chance();

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
      app: {
        modal: chance.string()
      }
    };

    beforeEach(() => {
      ModalMap.getModalData = jest.fn().mockReturnValue({
        title: initialState.app.modal,
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

      expect(queryByText(initialState.app.modal)).toBeInTheDocument();
      expect(queryByTestId('mock-component')).toBeInTheDocument();
    });

    it('should be able to close the active modal by clicking the close button', () => {
      const { getByTestId, store } = renderWithRedux(<Modal />, {
        initialState
      });

      expect(store.getState().app.modal).toEqual(initialState.app.modal);

      fireEvent.click(getByTestId('close-btn'));

      expect(store.getState().app.modal).toEqual('');
    });
  });
});
