import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../redux/actions'
import ImageCard from  '../common/imageCard';
import LoadingSpinner from '../common/loadingSpinner';

const { getGallery } = Actions;

class Gallery extends Component {
  componentDidMount() {
    this.props.getGallery();
  }

  render() {
    const { loading, error, data } = this.props.gallery;

    if (loading) {
      return (
        <LoadingSpinner loading={loading} phrase="Gallery.loading" />
      );
    }

    if (error) {
      return (
        <span>
          ERROR!
          {error}
        </span>
      );
    }

    if (data.length < 1) {
      return (
        <span>
          EMPTY!
        </span>
      );
    }

    return (
      <div>
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
