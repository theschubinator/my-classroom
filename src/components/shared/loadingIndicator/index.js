import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SyncLoader } from 'react-spinners';

import './index.scss';

const LoadingIndicator = props => {
  return props.loadCounter ? (
    <div data-testid="load-counter" className="loading-indicator">
      <span className="loading-icon">
        <SyncLoader />
      </span>
    </div>
  ) : null;
};

LoadingIndicator.propTypes = {
  loadCounter: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    loadCounter: state.app.loadCounter.count
  };
};

export default connect(mapStateToProps)(LoadingIndicator);
