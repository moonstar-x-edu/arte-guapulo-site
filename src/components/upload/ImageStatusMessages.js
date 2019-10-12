import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../common/progressBar';
import { ErrorBox, SuccessBox } from '../common/alertBox';

const ImageStatusMessages = ({ progress, imageURL, error }) => {
  return (
    <Fragment>
      {
        progress > 0 &&
        <ProgressBar progress={Math.ceil(progress * 100)} />
      }
      {
        imageURL &&
        <SuccessBox content="Upload.success.message" />
      }
      {
        error &&
        <ErrorBox heading="Upload.error.heading" content="Upload.error.message" />
      }
    </Fragment>
  );
};

ImageStatusMessages.propTypes = {
  progress: PropTypes.number,
  imageURL: PropTypes.string,
  error: PropTypes.string
};

export default ImageStatusMessages;
