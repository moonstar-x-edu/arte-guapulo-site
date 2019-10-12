import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../common/loadingSpinner';
import { ErrorBox, SuccessBox, InfoBox } from '../common/alertBox';

const UploadStatusMessages = ({ uploading, error, done }) => {
  return (
    <Fragment>
      {
        error &&
          //<ErrorBox content={""} />
          <span>ERROR: {error}</span>
      }
      {
        uploading &&
          //<InfoBox content={""} />
          <span>Uploading...</span>
      }
      {
        done &&
          //<SuccessBox content={""} />
          <span>DONE!</span>
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
