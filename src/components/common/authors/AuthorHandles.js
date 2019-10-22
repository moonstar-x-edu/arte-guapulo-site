import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Icon from '../icon';
import { getSocialURL } from '../../../utils';

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
        <div key={index} className={className}>
          <a key={index} className="author-link" href={getSocialURL(type, handle)}>
            <div className="tabled">
              <Icon className={`tabled-cell ${type}`} type="brand" icon={icon[type]} />
              <Card.Text className="tabled-cell">
                {handle}
              </Card.Text>
            </div>
          </a>
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
