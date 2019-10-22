import React from 'react';
import PropTypes from 'prop-types';
import { getMapEmbedURL } from '../../../utils';

const MapEmbed = ({ coordinates: { latitude, longitude } }) => {
  return (
    <div className="map-embed-container">
      <iframe title="map" src={getMapEmbedURL(latitude, longitude)} width="100%" height="100%" frameBorder={0} />
    </div>
  );
};

MapEmbed.propTypes = {
  coordinates: PropTypes.exact({
    latitude: PropTypes.number,
    longitude: PropTypes.number
  })
};

export default MapEmbed;
