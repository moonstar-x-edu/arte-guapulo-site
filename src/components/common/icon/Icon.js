import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type, icon, className }) => {
  const types = {
    regular: 'far',
    brand: 'fab',
    solid: 'fas'
  };

  return (
    <i className={`${types[type]} ${icon} icon ${className}`} />
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf([
    'regular',
    'brand',
    'solid'
  ]).isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;
