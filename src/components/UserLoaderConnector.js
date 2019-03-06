import { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadUser } from '../actions/actions-creator/user';

const UserLoaderConnector = props => {
  useEffect(() => {
    props.loadUser();
  });

  return props.children;
};

export default connect(
  null,
  { loadUser }
)(UserLoaderConnector);
