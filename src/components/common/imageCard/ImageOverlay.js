import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import ArtistHandles from './ArtistHandles';
import TagChips from './TagChips';

const ImageOverlay = ({ visible, coordinates, social, tags }) => {
  const { latitude, longitude } = coordinates;

  return visible ? (
    <Card.ImgOverlay className="card-overlay">
      <Card.Title>Graffiti #1</Card.Title>
      <Card.Text>Location: </Card.Text>
      <Card.Text>Lat: {latitude} Lon: {longitude}</Card.Text>
      <Card.Text>Links:</Card.Text>
      <ArtistHandles social={social} />
      <Card.Text>Tags:</Card.Text>
      <TagChips tags={tags} />
    </Card.ImgOverlay>
  ) : null;
};

ImageOverlay.propTypes = {
  visible: PropTypes.bool.isRequired,
  coordinates: PropTypes.exact({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired
  }).isRequired,
  social: PropTypes.exact({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageOverlay;
