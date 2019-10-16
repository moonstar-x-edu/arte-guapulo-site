import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { AuthorsList } from '../authors';
import TagChips from '../tagChips';
import Text from '../text';
import MapLink from '../mapLink';

const ImageOverlay = ({ visible, piece, authors, tags, onShowModal }) => {
  return visible ? (
    <Card.ImgOverlay className="card-overlay">
      <Card.Title>Graffiti #1</Card.Title>
      <Card.Text>
        <Text phrase="Gallery.card.location" />:
      </Card.Text>
      <Card.Text>
        <MapLink onClick={onShowModal} />
      </Card.Text>
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
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.exact({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string
  })).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onShowModal: PropTypes.func.isRequired
};

export default ImageOverlay;
