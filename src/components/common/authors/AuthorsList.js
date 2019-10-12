import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Authors from './Authors';
import Text from '../text';

const AuthorsList = ({ piece, authors }) => {
  const numberOfAuthors = authors.length;

  if (numberOfAuthors < 1) {
    return null;
  }

  const phrase = numberOfAuthors > 1 ? 'Gallery.card.authors' : 'Gallery.card.author';

  return (
    <Card.Body>
      <Card.Text>
        <Text phrase={phrase} />
      </Card.Text>
      <Authors piece={piece} authors={authors} />
    </Card.Body>
  );
};

AuthorsList.propTypes = {
  piece: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.exact({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string
  })).isRequired,
};

export default AuthorsList;
