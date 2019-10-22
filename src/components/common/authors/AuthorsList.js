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
    <div className="card-content-box authors">
      <Card.Text className="text-center mb-2">
        <Text phrase={phrase} />
      </Card.Text>
      <Authors piece={piece} authors={authors} />
    </div>
  );
};

AuthorsList.propTypes = {
  piece: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.exact({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    justName: PropTypes.string
  })).isRequired,
};

export default AuthorsList;
