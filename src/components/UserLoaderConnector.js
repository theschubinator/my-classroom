import { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  addCountToLoader,
  removeCountFromLoader
} from '../actions/actions-creator/app';
import { loadUser } from '../actions/actions-creator/user';

const UserLoaderConnector = props => {
  const asyncLoadUser = async () => {
    props.addCountToLoader();
    await props.loadUser();
    props.removeCountFromLoader();
  };

  useEffect(() => {
    asyncLoadUser();
  });

  return props.children;
};

export default connect(
  null,
  { addCountToLoader, removeCountFromLoader, loadUser }
)(UserLoaderConnector);
