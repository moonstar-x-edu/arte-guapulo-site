import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar as BSProgressBar} from 'react-bootstrap';

const ProgressBar = ({ progress }) => {
  const label = progress === 100 ? 'Complete!' : `${progress}%`;

  return (
    <BSProgressBar animated variant="success" now={progress} label={label} />
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};

export default ProgressBar;
