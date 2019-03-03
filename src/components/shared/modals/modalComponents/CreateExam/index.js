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
import { clearModal } from '../../../../../actions/actions-creator/app';
import { saveExam } from '../../../../../actions/actions-creator/exam';

import './index.scss';

const CreateExam = props => {
  const [form, setForm] = useState({ name: '', subject: '' });

  const handleChange = e => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleCancel = () => {
    props.clearModal();
    props.history.push('/');
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.saveExam(form);
    props.clearModal();
  };

  return (
    <section className="create-exam-modal">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <Input.withLabel for="name" label="Name" />
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
    { clearModal, saveExam }
  )(CreateExam)
);
