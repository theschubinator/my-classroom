import React from 'react';
import { fireEvent } from 'react-testing-library';

import DropDownLinks from '../../../../components/NavHeader/DropDownLinks';
import { renderWithReduxAndRouter } from '../../../testUtils';
import { getDefaultState as getDefaultModalState } from '../../../../state/App/modal';

describe('Given DropDownLinks', () => {
  it('should contain a button that  loads the create exam modal', () => {
    const { getByText, store } = renderWithReduxAndRouter(<DropDownLinks />);

    expect(store.getState().app.modal).toEqual(getDefaultModalState());
    fireEvent.click(getByText('Create Exam'));
    expect(store.getState().app.modal).toEqual({
      type: 'CREATE_EXAM',
      active: true
    });
  });

  it('should contain a button that  loads the create class modal', () => {
    const { getByText, store } = renderWithReduxAndRouter(<DropDownLinks />);

    expect(store.getState().app.modal).toEqual(getDefaultModalState());
    fireEvent.click(getByText('Create Class'));
    expect(store.getState().app.modal).toEqual({
      type: 'CREATE_CLASS',
      active: true
    });
  });
});
