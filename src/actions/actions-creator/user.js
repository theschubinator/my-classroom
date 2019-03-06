import * as types from '../action-list';

const mockUser = {
  id: '123',
  name: 'Andrew Schubert'
};

export const loadUser = () => {
  return {
    user: mockUser,
    type: types.USER_LOAD
  };
};
