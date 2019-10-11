import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

const TagsForm = ({ tags, onRemove }) => {
  return tags.map((tag, index) => (
    <Badge className="tags-badge" key={index} variant="primary" onClick={() => onRemove(index)}>
      <span className="tag-name">
        #{tag}
      </span>
    </Badge>
  ));
};

TagsForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemove: PropTypes.func.isRequired
};

export default TagsForm;
