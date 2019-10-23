import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AuthorHandles from './AuthorHandles';

const Authors = ({ piece, authors, className }) => {
  const numberOfAuthors = authors.length;

  return (
    <div className={className}>
      {
        authors.map((author, index) => {
          return (
            <Fragment key={`${piece}.${index}`}>
              <AuthorHandles className="author-handle mx-2" social={author} />
              {
                index < numberOfAuthors - 1 &&
                  <hr className="authors-separator" />
              }
            </Fragment>
          );
        })
      }
    </div>
  );
};

Authors.propTypes = {
  piece: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.exact({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    justName: PropTypes.string
  })).isRequired,
  className: PropTypes.string
};

export default Authors;
