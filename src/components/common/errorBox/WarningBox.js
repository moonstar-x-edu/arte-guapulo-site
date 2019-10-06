import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import Text from '../text';

const WarningBox = ({ heading, content, footer }) => {
  return (
    <Alert variant="warning" heading={heading}>
      {
        content &&
        <p>
          <Text phrase={content} />
        </p>
      }
      {
        footer &&
        <Fragment>
          <hr />
          <p className="mb-0">
            <Text phrase={footer} />
          </p>
        </Fragment>
      }
    </Alert>
  );
};

WarningBox.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  footer: PropTypes.string
};

export default WarningBox;
