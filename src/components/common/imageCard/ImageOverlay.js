import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { AuthorsList } from '../authors';
import TagChips from '../tagChips';
import Text from '../text';
import MapButton from '../mapButton';

const ImageOverlay = ({ visible, piece, authors, tags, onShowModal }) => {
  return visible ? (
    <Card.ImgOverlay className="card-overlay">
      <Card.Body>
        <Card.Title>
          <Text phrase="Gallery.card.title" />
        </Card.Title>

        <AuthorsList piece={piece} authors={authors} />
        <MapButton onClick={onShowModal} />
        <TagChips tags={tags} />

      </Card.Body>
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
