import HistoryLink, { HistoryLinkTypes } from '../shared/links/HistoryLink';

import React from 'react';
import DropDownButtons from '../shared/drop-down/DropDownButtons';
import InputWithLabel from '../shared/inputs/InputWithLabel';
import Link from '../shared/links/Link';

import { DropDownButtonTypes } from '../shared/drop-down/DropDownButtons/dropDownButtonMap';
import { FaSearch } from 'react-icons/fa';
import './index.scss';

const NavHeader = () => {
  return (
    <nav data-testid="nav-header">
      <ul>
        <li data-testid="app-title" className="app-title">
          <HistoryLink
            type={HistoryLinkTypes('btn')}
            title="My Classroom"
            route="/"
          />
        </li>
        <li className="left-side">
          <Link to="/" title="Classes" />
          <Link to="/" title="Exams" />
          <Link to="/" title="Quizzes" />
        </li>

        <li className="right-side">
          <DropDownButtons
            className="navbar-drop-down-btns"
            type={DropDownButtonTypes('USER_ACTIONS')}
          />
          <InputWithLabel
            for="search"
            className="search svg"
            label={<FaSearch />}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;
