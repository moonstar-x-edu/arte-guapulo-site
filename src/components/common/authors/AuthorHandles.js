import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Icon from '../icon';

const AuthorHandles = ({ social }) => {
  const icon = {
    facebook: 'fa-facebook-square',
    twitter: 'fa-twitter-square',
    instagram: 'fa-instagram'
  };

  return (
    <Fragment>
      {
        Object.keys(social).map((type, index) => {
          const handle = social[type];

          return handle ? (
            <Card.Text key={index}>
              <Icon type="brand" icon={icon[type]} /> {handle}
            </Card.Text>
          ) : null;
        })
      }
    </Fragment>
  );
};

AuthorHandles.propTypes = {
  social: PropTypes.exact({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string
  }).isRequired
};

export default AuthorHandles;
