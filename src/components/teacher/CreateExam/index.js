import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { ModalTypes } from '../../shared/modals/modalMap';
import {
  loadModalType,
  toggleModalStatus
} from '../../../actions/actions-creator/app';

export const CreateExam = props => {
  useEffect(() => {
    props.loadModalType(ModalTypes('CREATE_EXAM'));
    props.toggleModalStatus();
  });

  return (
    <section data-testid="exam page" id="test">
      <h1>Create Exam</h1>
    </section>
  );
};

export default connect(
  null,
  { loadModalType, toggleModalStatus }
)(CreateExam);
