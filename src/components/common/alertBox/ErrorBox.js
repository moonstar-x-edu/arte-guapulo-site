import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import Text from '../text';

const ErrorBox = ({ heading, content, footer, children }) => {
  return (
    <Alert variant="danger" heading={heading}>
      {
        content &&
        <p>
          <Text phrase={content} />
        </p>
      }
      <span className="font-italic">
        {children}
      </span>
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

ErrorBox.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  footer: PropTypes.string
};

export default ErrorBox;
