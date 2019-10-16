import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import ImageOverlay from './ImageOverlay';
import Modal from '../modal';
import MapEmbed from '../mapEmbed';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overlayVisible: false,
      modalVisible: false
    };

    this.handleShowOverlay = this.handleShowOverlay.bind(this);
    this.handleHideOverlay = this.handleHideOverlay.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
  }

  toggleOverlay(visible) {
    this.setState({
      overlayVisible: visible
    });
  }

  handleShowOverlay() {
    this.toggleOverlay(true)
  }

  handleHideOverlay() {
    if (this.state.modalVisible) {
      return;
    }

    this.toggleOverlay(false);
  }

  toggleModal(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  handleShowModal() {
    this.toggleModal(true);
  }

  handleHideModal() {
    this.toggleModal(false);
    this.toggleOverlay(false);
  }

  render() {
    const { overlayVisible, modalVisible } = this.state;
    const { piece, imageURL, coordinates, authors, tags } = this.props;

    return (
      <Card className="image-card bg-dark text-white"
        onMouseOver={this.handleShowOverlay}
        onMouseLeave={this.handleHideOverlay}
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
          onShowModal={this.handleShowModal}
        />
        <Modal visible={modalVisible} onHide={this.handleHideModal} title="Gallery.card.location.modal.heading">
          <MapEmbed coordinates={coordinates} />
        </Modal>
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
