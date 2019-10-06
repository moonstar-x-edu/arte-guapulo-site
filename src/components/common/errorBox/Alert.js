import React from 'react';
import PropTypes from 'prop-types';
import { Alert as BSAlert } from 'react-bootstrap';
import Text from '../text';

const Alert = ({ variant, heading, children }) => {
  return (
    <BSAlert variant={variant}>
      {
        heading &&
        <BSAlert.Heading>
          <Text phrase={heading} />
        </BSAlert.Heading>
      }
      {children}
    </BSAlert>
  );
};

Alert.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
    'light'
  ]).isRequired,
  heading: PropTypes.string
};

export default Alert;
