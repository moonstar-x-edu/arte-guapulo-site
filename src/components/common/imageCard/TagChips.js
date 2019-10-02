import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

const TagChips = ({ tags }) => {
  return (
    <Fragment>
      {
        tags.map((tag) => (
          <Badge variant="primary">#{tag}</Badge>
        ))
      }
    </Fragment>
  );
};

TagChips.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TagChips;
