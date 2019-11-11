import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron as BSJumbotron } from 'react-bootstrap';
import Text from '../text';

const Jumbotron = ({ children, fluid, title }) => {
  return (
    <BSJumbotron className="custom-jumbotron" fluid={fluid}>
      <h1 className="jumbotron-title">
        <Text phrase={title} />
      </h1>
      {children}
    </BSJumbotron>
  );
};

Jumbotron.propTypes = {
  fluid: PropTypes.bool,
  title: PropTypes.string
};

Jumbotron.defaultProps = {
  fluid: false
};

export default Jumbotron;
