import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../common/loadingSpinner';
import { ErrorBox, WarningBox, InfoBox } from '../common/alertBox';

const GalleryMessages = ({ loading, error, dataSize, filtersSize }) => {
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
    if (filtersSize < 1) {
      return (
        <WarningBox heading="Gallery.warning.heading" content="Gallery.warning.message" />
      );
    }

    return (
      <InfoBox content="Gallery.filters.info.message" />
    )
  }

  return null;
};

GalleryMessages.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  dataSize: PropTypes.number,
  filtersSize: PropTypes.number
};

export default GalleryMessages;
