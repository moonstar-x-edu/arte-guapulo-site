import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { AuthorsList } from '../authors';
import TagChips from '../tagChips';
import Text from '../text';

const ImageOverlay = ({ visible, piece, coordinates, authors, tags }) => {
  const { latitude, longitude } = coordinates;

  return visible ? (
    <Card.ImgOverlay className="card-overlay">
      <Card.Title>Graffiti #1</Card.Title>
      <Card.Text>
        <Text phrase="Gallery.card.location" />:
      </Card.Text>
      <Card.Text>Lat: {latitude} Lon: {longitude}</Card.Text>
      <AuthorsList piece={piece} authors={authors} />
      <Card.Text>
        <Text phrase="Gallery.card.tags" />
      </Card.Text>
      <TagChips tags={tags} />
    </Card.ImgOverlay>
  ) : null;
};

ImageOverlay.propTypes = {
  visible: PropTypes.bool.isRequired,
  piece: PropTypes.string.isRequired,
  coordinates: PropTypes.exact({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.exact({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string
  })).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageOverlay;
