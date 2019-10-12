import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import Text from '../text';

const SuccessBox = ({ heading, content, footer, children }) => {
  return (
    <Alert variant="success" heading={heading}>
      {
        content &&
        <p>
          <Text phrase={content} />
        </p>
      }
      {children}
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

SuccessBox.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  footer: PropTypes.string
};

export default SuccessBox;
