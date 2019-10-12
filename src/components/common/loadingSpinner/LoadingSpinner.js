import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import Text from '../text';

const LoadingSpinner = ({ className, loading, phrase }) => {
  if (!loading) {
    return null;
  }

  return (
    <div className={`d-table my-3 ${className}`}>
      <Spinner animation="border" role="status" aria-hidden="true" variant="dark" />
      <span className="d-table-cell align-middle px-3">
        <Text phrase={phrase} />
      </span>
    </div>
  );
};

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired,
  phrase: PropTypes.string,
  className: PropTypes.string
};

export default LoadingSpinner;
