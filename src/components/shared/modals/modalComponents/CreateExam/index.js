import React, { useState } from 'react';
import InputWithLabel from '../../../inputs/InputWithLabel';
import DropDownWithLabel from '../../../drop-down/DropDownWithLabel';

import { connect } from 'react-redux';
import { DropDownTypes } from '../../../drop-down/DropDownWithLabel/dropDownMap';

import './index.scss';

const CreateExam = props => {
  const [form, setForm] = useState({ name: '', subject: '' });

  const handleChange = e => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
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
          type={DropDownTypes('EXAM_SUBJECT')}
          options={[{ value: 'Spelling' }]}
        />
      </form>
    </section>
  );
};

export default connect(
  null,
  {}
)(CreateExam);
