import React, { useState } from 'react';
import InputWithLabel from '../../../inputs/InputWithLabel';
import DropDownWithLabel from '../../../drop-down/DropDownWithLabel';

import {
  getSpecificItems as getUniqueClassSubjects,
  createObjectArrayFromStringArray as createOptionValues
} from '../../../../../utils/helpers';
import { connect } from 'react-redux';

import './index.scss';

const CreateExam = props => {
  const [form, setForm] = useState({ name: '', subject: '' });

  const handleChange = e => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
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
        <input type="submit" />
      </form>
    </section>
  );
};

const mapStateToProps = state => {
  const subjects = getUniqueClassSubjects(state.classes, 'subject');
  const options = createOptionValues(subjects, 'value');

  return { options };
};

export default connect(
  mapStateToProps,
  {}
)(CreateExam);
