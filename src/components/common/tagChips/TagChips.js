import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Card } from 'react-bootstrap';
import Text from '../text';

const TagChips = ({ tags, onClick }) => {
  return (
    <div className="card-content-box tag-chips">
      <Card.Text className="text-center mb-2">
        <Text phrase="Gallery.card.tags" />
      </Card.Text>
      {
        tags.map((tag, index) => (
          <Badge key={index} onClick={() => onClick(tag)} >#{tag}</Badge>
        ))
      }
    </div>
  );
};

TagChips.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func
};

TagChips.defaultProps = {
  onClick: () => null
};

export default TagChips;
