import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CreateExam from './teacher/CreateExam';
import Modal from './shared/modals';
import NavHeader from './NavHeader';

const Router = () => {
  return (
    <BrowserRouter>
      <main className="App">
        <Modal />
        <NavHeader />
        <Route exact path="/teacher/exam/new" component={CreateExam} />
      </main>
    </BrowserRouter>
  );
};

export default Router;
