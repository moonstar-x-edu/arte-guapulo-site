import React from 'react';
import PropTypes from 'prop-types';
import AuthorHandles from './AuthorHandles';

const Authors = ({ piece, authors }) => {
  return (
    authors.map((author, index) => {
      return (
        <AuthorHandles social={author} key={`${piece}.${index}`}/>
      );
    })
  );
};

Authors.propTypes = {
  piece: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.exact({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string
  })).isRequired,
};

export default Authors;
