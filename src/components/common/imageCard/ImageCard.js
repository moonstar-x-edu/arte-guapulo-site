import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import ImageOverlay from './ImageOverlay';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overlayVisible: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      overlayVisible: true
    });
  }

  handleMouseLeave() {
    this.setState({
      overlayVisible: false
    });
  }

  render() {
    const { overlayVisible } = this.state;
    const { piece, imageURL, coordinates, authors, tags } = this.props;

    return (
      <Card className="image-card bg-dark text-white d-flex w-50 h-50"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Card.Img
          src={imageURL}
          alt="Card image."
        />
        <ImageOverlay
          visible={overlayVisible}
          piece={piece}
          coordinates={coordinates}
          authors={authors}
          tags={tags}
        />
      </Card>
    );
  }
}

ImageCard.propTypes = {
  piece: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  coordinates: PropTypes.exact({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.exact({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string
  })).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageCard;
