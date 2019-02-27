import React, { useEffect } from 'react';

import { ModalTypes } from '../../shared/modals/modalMap';
import { connect } from 'react-redux';
import { loadModal } from '../../../actions/actions-creator/modal';

export const CreateExam = props => {
  useEffect(() => {
    props.loadModal(ModalTypes('CREATE_EXAM'));
  });

  return (
    <section data-testid="exam page" id="test">
      <h1>Create Exam</h1>
    </section>
  );
};

export default connect(
  null,
  { loadModal }
)(CreateExam);
