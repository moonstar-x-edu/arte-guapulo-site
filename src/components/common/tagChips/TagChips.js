import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

const TagChips = ({ tags }) => {
  return tags.map((tag, index) => (
    <Badge key={index} variant="primary">#{tag}</Badge>
  ));
};

TagChips.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TagChips;
