import Modal from '.';
import React from 'react';

import { ModalTypes } from './modalMap';
import { fireEvent } from 'react-testing-library';
import { renderWithRedux } from '../../../utils/testUtils';

describe('Given Modal', () => {
  const initialState = {
    modal: {
      modalType: ModalTypes('CREATE_EXAM')
    }
  };

  it('should be hidden with the className of inactive when not in use', () => {
    const { container, queryByText } = renderWithRedux(<Modal />);

    const inactiveModal = container.getElementsByClassName('inactive')[0];
    expect(inactiveModal).toBeInTheDocument();
    expect(queryByText('Create Exam')).not.toBeInTheDocument();
  });

  describe('the `Create Exam` modal', () => {
    it('should render the `create exam` with the className of active when in use', () => {
      const { container, queryByText } = renderWithRedux(<Modal />, {
        initialState
      });

      const activeModal = container.getElementsByClassName('active')[0];
      expect(activeModal).toBeInTheDocument();

      expect(queryByText('Create Exam')).toBeInTheDocument();
    });

    it('should be able to close the modal by clicking the close button', () => {
      const { container, queryByText, getByTestId } = renderWithRedux(
        <Modal />,
        {
          initialState
        }
      );

      const activeModal = container.getElementsByClassName('active')[0];
      expect(activeModal).toBeInTheDocument();

      expect(queryByText('Create Exam')).toBeInTheDocument();

      fireEvent.click(getByTestId('close-btn'));

      const inactiveModal = container.getElementsByClassName('inactive')[0];
      expect(inactiveModal).toBeInTheDocument();
      expect(queryByText('Create Exam')).not.toBeInTheDocument();
    });
  });
});
