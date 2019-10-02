import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Card } from 'react-bootstrap';

const ArtistHandles = ({ social }) => {
  const icon = {
    facebook: faFacebookSquare,
    twitter: faTwitterSquare,
    instagram: faInstagram
  };

  return (
    <Fragment>
      {
        Object.keys(social).map((type) => {
          const handle = social[type];

          return handle ? (
            <Card.Text>
              <FontAwesomeIcon icon={icon[type]} /> {handle}
            </Card.Text>
          ) : null;
        })
      }
    </Fragment>
  );
};

ArtistHandles.propTypes = {
  social: PropTypes.exact({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string
  }).isRequired
};

export default ArtistHandles;
