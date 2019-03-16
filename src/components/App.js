import React from 'react';

import Router from './Router';
import UserLoaderConnector from './UserLoaderConnector';

const App = props => {
  return (
    <UserLoaderConnector>
      {/* <LoadingIndicator> */}
      <Router />
      {/* </LoadingIndicator> */}
    </UserLoaderConnector>
  );
};

export default App;
