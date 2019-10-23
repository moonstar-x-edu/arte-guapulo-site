import React from 'react';
import PropTypes from 'prop-types';
import { Modal as BSModal } from 'react-bootstrap';
import Text from '../text';

const Modal = ({ visible, title, onHide, children }) => {
  return (
    <BSModal show={visible} onHide={onHide} centered size="lg">
      <BSModal.Header closeButton>
        <BSModal.Title>
          <Text phrase={title} />
        </BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>
        {children}
      </BSModal.Body>
    </BSModal>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onHide: PropTypes.func.isRequired
};

export default Modal;
