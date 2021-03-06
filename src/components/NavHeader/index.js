import React from 'react';

import DropDownLinks from './DropDownLinks';
import Input from '../shared/inputs';
import Link from '../shared/links';
import { HistoryLinkTypes } from '../shared/links/HistoryLink';

import { FaSearch } from 'react-icons/fa';
import './index.scss';

const NavHeader = props => {
  return (
    <nav data-testid="nav-header">
      <ul>
        <li data-testid="app-title" className="app-title">
          <Link.withRouter
            type={HistoryLinkTypes('btn')}
            title="My Classroom"
            route="/"
          />
        </li>
        <li className="left-side">
          <Link.link to="/" title="Classes" />
          <Link.link to="/" title="Exams" />
          <Link.link to="/" title="Quizzes" />
        </li>

        <li className="right-side">
          <DropDownLinks />
          <Input.withLabel
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
