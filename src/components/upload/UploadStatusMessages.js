import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../common/loadingSpinner';
import { ErrorBox, SuccessBox } from '../common/alertBox';

const UploadStatusMessages = ({ uploading, error, done }) => {
  return (
    <Fragment>
      {
        error &&
          <ErrorBox heading="Upload.status.error.heading" content="Upload.status.error.message">
            <span>
              {error}
            </span>
          </ErrorBox>
      }
      {
        uploading &&
          <LoadingSpinner loading={uploading} phrase="Upload.status.uploading" />
      }
      {
        done &&
          <SuccessBox heading="Upload.status.done.heading" content="Upload.status.done.message" />
      }
    </Fragment>
  );
};

UploadStatusMessages.propTypes = {
  uploading: PropTypes.bool,
  error: PropTypes.string,
  done: PropTypes.bool
};

export default UploadStatusMessages;
