import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Input from '../../../inputs';
import Button from '../../../buttons';
import {
  clearModal,
  toggleModalStatus
} from '../../../../../actions/actions-creator/app';
import { saveClass } from '../../../../../actions/actions-creator/class';

import './index.scss';

const CreateClass = props => {
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

    props.saveClass(form);
    props.toggleModalStatus();
    setTimeout(props.clearModal, 1000);
  };

  return (
    <section className="create-class-modal">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <Input.withLabel for="name" label="Name" autoFocus={true} />
        <Input.withLabel for="subject" label="Subject" autoFocus={true} />
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

CreateClass.propTypes = {
  clearModal: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(
  connect(
    null,
    { clearModal, toggleModalStatus, saveClass }
  )(CreateClass)
);
