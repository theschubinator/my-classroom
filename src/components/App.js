import CreateExam from './teacher/CreateExam';
import Modal from './shared/modals/modalConnector';
import NavHeader from './NavHeader';
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = props => {
  return (
    <Router>
      <main className="App">
        <NavHeader />
        <Modal />
        <Route exact path="/teacher/exam/new" component={CreateExam} />
      </main>
    </Router>
  );
};

export default App;
