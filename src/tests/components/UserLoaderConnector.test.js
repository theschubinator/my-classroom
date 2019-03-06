import React from 'react';
import axios from 'axios';
import { wait } from 'react-testing-library';

import UserLoaderConnector from '../../components/UserLoaderConnector';
import { renderWithRedux, mockComponent } from '../testUtils';

jest.mock('axios');

describe('Given UserLoaderConnector', () => {
  const props = {
    children: mockComponent()
  };

  //   it('should load a user', async () => {
  //     const mockUser = { data: { id: '123', name: 'Andrew' } };

  //     axios.get.mockResolvedValue(mockUser);

  //     const { store } = renderWithRedux(<UserLoaderConnector {...props} />);

  //     await wait(() => {
  //       expect(store.getState().user).toEqual(mockUser.data);
  //     });
  //   });

  it('should load a user', () => {
    const { store } = renderWithRedux(<UserLoaderConnector {...props} />);
    expect(store.getState().user.id).not.toBe('');
  });

  it('should render its children', () => {
    const { queryByTestId } = renderWithRedux(
      <UserLoaderConnector {...props} />
    );
    expect(queryByTestId('mock-component')).toBeInTheDocument();
  });
});
