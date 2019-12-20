import React from 'react';
import PropTypes from 'prop-types';
import { Card as BSCard } from 'react-bootstrap';
import Text from '../text';

const Card = ({ bg, border, headerKey, children, className }) => {
  return (
    <BSCard bg={bg} border={border} className={className}>
      {
        headerKey &&
          <BSCard.Header>
            <Text phrase={headerKey} />
          </BSCard.Header>
      }
      <BSCard.Body>
        {children}
      </BSCard.Body>
    </BSCard>
  );
};

const cardColors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'light'
];

Card.propTypes = {
  bg: PropTypes.oneOf(cardColors).isRequired,
  border: PropTypes.oneOf(cardColors).isRequired,
  headerKey: PropTypes.string,
  className: PropTypes.string
};

Card.Title = BSCard.Title;
Card.Text = BSCard.Text;

export default Card;
