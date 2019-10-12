import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type, icon }) => {
  const types = {
    regular: 'far',
    brand: 'fab',
    solid: 'fas'
  };

  return (
    <i className={`${types[type]} ${icon}`} />
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf([
    'regular',
    'brand',
    'solid'
  ]).isRequired,
  icon: PropTypes.string.isRequired
};

export default Icon;
