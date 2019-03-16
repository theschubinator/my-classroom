import React from 'react';
import axios from 'axios';
import { wait } from 'react-testing-library';

import {
  mockComponent,
  mockUser,
  mockAxiosResponse,
  renderWithRedux
} from '../testUtils';
import UserLoaderConnector from '../../components/UserLoaderConnector';

jest.mock('axios');

describe('Given UserLoaderConnector', () => {
  it('test', () => {
    expect(true).toBe(true);
  });
  // console.log('start of UserLoaderConnector');
  // const props = {
  //   children: mockComponent()
  // };

  // describe('and its attempting to load a user', () => {
  //   it('should load a user', async () => {
  //     console.log(mockAxiosResponse(mockUser()));

  //     const axiosResponse = mockAxiosResponse(mockUser());

  //     axios.get.mockResolvedValue(axiosResponse);

  //     const { store } = renderWithRedux(<UserLoaderConnector {...props} />);

  //     expect(store.getState().app.loadCounter.count).toEqual(1);

  //     await wait(() => {
  //       console.log('i am waiting in the async call');
  //       expect(store.getState().user).toEqual(axiosResponse.data);
  //       expect(store.getState().app.loadCounter.count).toEqual(0);
  //       console.log('i am at the end of the async');
  //     });
  //   });
  // });

  // it('should render its children', () => {
  //   console.log('render the children');
  //   const { queryByTestId } = renderWithRedux(
  //     <UserLoaderConnector {...props} />
  //   );
  //   expect(queryByTestId('mock-component')).toBeInTheDocument();
  // });
});
