import Modal from '.';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  type: state.modal.type
});

export default connect(mapStateToProps)(Modal);
