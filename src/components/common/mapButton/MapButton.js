import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Icon from '../icon';
import Text from '../text';

const MapButton = ({ onClick }) => {
  return (
    <Button className="location-button" onClick={onClick}>
      <Icon type="solid" icon="fa-map-marked-alt" />
      <Text phrase="Gallery.card.location.show" />
    </Button>
  );
};

MapButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default MapButton;
