import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../../../redux/actions';
import { Card } from 'react-bootstrap';
import { AuthorsList } from '../authors';
import TagChips from '../tagChips';
import Text from '../text';
import MapButton from '../mapButton';

const { addFilter } = Actions;

class ImageOverlay extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tag) {
    const { addFilter, gallery: { filters } } = this.props;

    if (filters.includes(tag)) {
      return;
    }

    addFilter(tag);
  }

  render() {
    const { visible, piece, authors, tags, onShowModal } = this.props;

    return visible ? (
      <Card.ImgOverlay className="card-overlay">
        <Card.Body>
          <Card.Title>
            <Text phrase="Gallery.card.title" />
          </Card.Title>

          <AuthorsList piece={piece} authors={authors} />
          <MapButton onClick={onShowModal} />
          <TagChips tags={tags} onClick={this.handleClick} />

        </Card.Body>
      </Card.ImgOverlay>
    ) : null;
  }
}

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
    instagram: PropTypes.string,
    justName: PropTypes.string
  })).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onShowModal: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    gallery: state.gallery
  };
};

export default connect(mapStateToProps, { addFilter })(ImageOverlay);
