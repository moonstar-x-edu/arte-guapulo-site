import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../redux/actions'
import ImageCard from  '../common/imageCard';
import LoadingSpinner from '../common/loadingSpinner';
import { ErrorBox, WarningBox } from '../common/alertBox';

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
        <ErrorBox heading="Gallery.error.heading" content="Gallery.error.message">
          <span>
            {error}
          </span>
        </ErrorBox>
      );
    }

    if (data.length < 1) {
      return (
        <WarningBox heading="Gallery.warning.heading" content="Gallery.warning.message" />
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
