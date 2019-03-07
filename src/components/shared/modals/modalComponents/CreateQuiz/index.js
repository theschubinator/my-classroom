import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Input from '../../../inputs';
import Button from '../../../buttons';
import {
  createObjectArrayFromStringArray as createOptionValues,
  getSpecificItemsFromArrayOfObjects as getUniqueClassSubjects
} from '../../../../../utils/helpers';
import {
  clearModal,
  toggleModalStatus
} from '../../../../../actions/actions-creator/app';
import { saveQuiz } from '../../../../../actions/actions-creator/quiz';

import './index.scss';

const CreateExam = props => {
  const [form, setForm] = useState({ name: '', subject: '' });

  const handleChange = e => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleCancel = () => {
    props.toggleModalStatus();
    setTimeout(props.clearModal, 1000);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.saveQuiz(form);
    props.toggleModalStatus();
    setTimeout(props.clearModal, 1000);
  };

  return (
    <section className="create-quiz-modal">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <Input.withLabel for="name" label="Name" autoFocus={true} />
        <Input.dropDownWithLabel
          for="subject"
          title="Subject"
          options={props.options}
        />
        <div className="buttons">
          <Button.normal
            className="btn cancel-btn"
            name="Cancel"
            onClick={handleCancel}
          />
          <Input.submitButton />
        </div>
      </form>
    </section>
  );
};

CreateExam.propTypes = {
  clearModal: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const subjects = getUniqueClassSubjects(state.classes, 'subject');
  const options = createOptionValues(subjects, 'value');

  return { options };
};

export default withRouter(
  connect(
    mapStateToProps,
    { clearModal, toggleModalStatus, saveQuiz }
  )(CreateExam)
);
