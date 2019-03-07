import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Modal from './shared/modals';
import NavHeader from './NavHeader';

const Router = () => {
  return (
    <BrowserRouter>
      <main className="App">
        <Modal />
        <NavHeader />
      </main>
    </BrowserRouter>
  );
};

export default Router;
