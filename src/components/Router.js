import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LoadingIndicator from './shared/loadingIndicator';
import Modal from './shared/modals';
import NavHeader from './NavHeader';

const Router = () => {
  return (
    <BrowserRouter>
      <main className="App">
        <LoadingIndicator />
        <Modal />
        <NavHeader />
      </main>
    </BrowserRouter>
  );
};

export default Router;
