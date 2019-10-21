import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Icon from '../icon';

const AuthorHandles = ({ social, className }) => {
  const icon = {
    facebook: 'fa-facebook-square',
    twitter: 'fa-twitter-square',
    instagram: 'fa-instagram'
  };

  return (
    Object.keys(social).map((type, index) => {
      const handle = social[type];

      return handle ? (
        <div className={`tabled ${className}`} key={index}>
          <Icon className={`tabled-cell ${type}`} type="brand" icon={icon[type]} />
          <Card.Text className="tabled-cell">
            {handle}
          </Card.Text>
        </div>
      ) : null;
    })
  );
};

AuthorHandles.propTypes = {
  social: PropTypes.exact({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string
  }).isRequired,
  className: PropTypes.string
};

export default AuthorHandles;
