import PropTypes from 'prop-types';
import React from 'react';
import t from 'tcomb';
import { withRouter } from 'react-router-dom';

import './index.scss';

export const historyLinkTypes = {
  btn: 'btn',
  img: 'img'
};

export const HistoryLinkTypes = t.enums(historyLinkTypes, 'hiistoryLinkTypes');

const HistoryLink = props => {
  const handleClick = () => {
    props.history.push(props.route);
  };

  console.log('I am in the HistoryLink');

  const buttonLink = () => <button onClick={handleClick}>{props.title}</button>;

  const imgLink = () => (
    <img
      data-testid={`link-${props.type}`}
      src={props.src}
      onClick={handleClick}
      alt={props.alt}
    >
      {props.title}
    </img>
  );

  const findLinkToRender = () => {
    console.log('i am rendering the findLink');
    return props.type === 'btn' ? buttonLink() : imgLink();
  };

  return <div className={`link-${props.type}`}>{findLinkToRender()}</div>;
};

HistoryLink.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  src: PropTypes.string
};

export default withRouter(HistoryLink);
