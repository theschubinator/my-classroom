import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DropDownWithLabel from '../../../drop-down/DropDownWithLabel';
import InputWithLabel from '../../../inputs/InputWithLabel';
import SubmitInput from '../../../inputs/submitInput';
import {
  createObjectArrayFromStringArray as createOptionValues,
  getSpecificItemsFromArrayOfObjects as getUniqueClassSubjects
} from '../../../../../utils/helpers';
import { clearModal } from '../../../../../actions/actions-creator/app';

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
  };

  return (
    <section className="create-exam-modal">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <InputWithLabel for="name" label="Name" />
        <DropDownWithLabel
          for="subject"
          title="Subject"
          options={props.options}
        />
        <button className="btn btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
        <SubmitInput />
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
    { clearModal }
  )(CreateExam)
);
