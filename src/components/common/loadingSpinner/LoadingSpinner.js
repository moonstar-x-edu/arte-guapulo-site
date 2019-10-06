import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import Text from '../text';

const LoadingSpinner = ({ loading, phrase }) => {
  if (!loading) {
    return null;
  }

  return (
    <div>
      <Spinner animation="border" role="status" aria-hidden="true" variant="dark" />
      <Text phrase={phrase} />
    </div>
  );
};

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired,
  phrase: PropTypes.string
};

export default LoadingSpinner;
