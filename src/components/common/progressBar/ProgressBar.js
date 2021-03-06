import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar as BSProgressBar} from 'react-bootstrap';

const ProgressBar = ({ progress }) => {
  return (
    <BSProgressBar className="my-3" animated variant="success" now={progress} label={`${progress}%`} />
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};

export default ProgressBar;
