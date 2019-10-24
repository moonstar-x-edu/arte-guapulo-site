import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../redux/actions'
import { CardColumns } from 'react-bootstrap';
import ImageCard from  '../common/imageCard';
import GalleryMessages from './GalleryMessages';
import { updatePageTitle } from '../../utils';

const { getGallery } = Actions;

class Gallery extends Component {
  componentDidMount() {
    updatePageTitle('Site.title.gallery');
    this.props.getGallery();
  }

  componentDidUpdate(prevProps) {
    const { app: { locale: oldLocale } } = prevProps;
    const { app: { locale: newLocale } } = this.props;

    if (oldLocale !== newLocale) {
      updatePageTitle('Site.title.gallery');
    }
  }

  render() {
    const { loading, error, data } = this.props.gallery;

    return (
      <div className="gallery">
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
    app: state.app,
    gallery: state.gallery
  };
};

export default connect(mapStateToProps, { getGallery })(Gallery);
