import CreateExam from './teacher/CreateExam';
import Modal from './shared/modals';
import NavHeader from './NavHeader';
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = props => {
  return (
    <Router>
      <main className="App">
        <Modal />
        <NavHeader />
        <Route exact path="/teacher/exam/new" component={CreateExam} />
      </main>
    </Router>
  );
};

export default App;
