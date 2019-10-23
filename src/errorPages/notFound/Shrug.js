import React from 'react';
import PropTypes from 'prop-types';

const Shrug = ({ className }) => {
  return (
    <div className={`shrug ${className}`}>
      ¯\_(ツ)_/¯
    </div>
  );
};

Shrug.propTypes = {
  className: PropTypes.string
};

export default Shrug;
