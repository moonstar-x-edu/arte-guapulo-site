import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../common/loadingSpinner';
import { ErrorBox, WarningBox } from '../common/alertBox';

const GalleryMessages = ({ loading, error, dataSize }) => {
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

  if (dataSize < 1) {
    return (
      <WarningBox heading="Gallery.warning.heading" content="Gallery.warning.message" />
    );
  }

  return null;
};

GalleryMessages.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  dataSize: PropTypes.number
};

export default GalleryMessages;
