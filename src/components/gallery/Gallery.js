import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../redux/actions'
import { CardColumns } from 'react-bootstrap';
import ImageCard from  '../common/imageCard';
import GalleryMessages from './GalleryMessages';
import TagSearch from '../common/tagSearch';
import { updatePageTitle } from '../../utils';

const { getGallery, filterReset } = Actions;

class Gallery extends Component {
  componentDidMount() {
    updatePageTitle('Site.title.gallery');
    this.props.filterReset();
    this.props.getGallery();
  }

  componentDidUpdate(prevProps) {
    const { app: { locale: oldLocale } } = prevProps;
    const { app: { locale: newLocale } } = this.props;

    if (oldLocale !== newLocale) {
      updatePageTitle('Site.title.gallery');
    }
  }

  getFilteredData() {
    const { data, filters } = this.props.gallery;

    return filters.length > 0
      ? data.filter((piece) => {
        return filters.every((filter) => {
          return piece.tags.includes(filter);
        });
      })
      : data;
  }

  render() {
    const { loading, error, filters } = this.props.gallery;

    const data = this.getFilteredData();
    const dataSize = data.length;

    return (
      <div className="gallery">
        {
          (!loading && !error) &&
            <TagSearch />
        }
        <GalleryMessages loading={loading} error={error} dataSize={dataSize} filtersSize={filters.length} />
        <CardColumns>
          {
            data.map((piece) => (
              <ImageCard
                key={piece.id}
                piece={piece.id}
                imageURL={piece.image}
                authors={piece.authors}
                coordinates={piece.coordinates}
                tags={piece.tags}
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

export default connect(mapStateToProps, { getGallery, filterReset })(Gallery);
