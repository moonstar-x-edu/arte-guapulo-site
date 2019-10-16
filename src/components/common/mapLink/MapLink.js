import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const MapLink = ({ onClick }) => {
  return (
    <span onClick={onClick}>
      <Icon type="solid" icon="fa-map-marked-alt" />
      SHOW LOCATION
    </span>
  );
};

MapLink.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default MapLink;
