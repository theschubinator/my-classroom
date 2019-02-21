import React from 'react';
import './index.scss';

const NavHeader = props => {
  return (
    <nav data-testid="nav-header">
      <ul>
        <li className="app-title">My Classroom</li>
        <li>Classes</li>
        <li>Tests</li>
        <li>Quizzes</li>
        <li className="actions">Actions</li>
        <li className="search">
          <label htmlFor="search">Search</label>
          <input id="search" />
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;
