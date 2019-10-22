import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../redux/actions'
import { CardColumns } from 'react-bootstrap';
import ImageCard from  '../common/imageCard';
import GalleryMessages from './GalleryMessages';

const { getGallery } = Actions;

class Gallery extends Component {
  componentDidMount() {
    this.props.getGallery();
  }

  render() {
    const { loading, error, data } = this.props.gallery;

    return (
      <div>
        <GalleryMessages loading={loading} error={error} dataSize={data.length} />
        <CardColumns>
          {
            data.map((dataObject) => (
              <ImageCard
                key={dataObject.id}
                piece={dataObject.id}
                imageURL={dataObject.image}
                authors={dataObject.authors}
                coordinates={dataObject.coordinates}
                tags={dataObject.tags}
              />
            ))
          }
        </CardColumns>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gallery: state.gallery
  };
};

export default connect(mapStateToProps, { getGallery })(Gallery);
