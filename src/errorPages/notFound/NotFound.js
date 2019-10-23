import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Shrug from './Shrug';
import Text from '../../components/common/text';

const NotFound = () => {
  return (
    <div className="d-flex h-100 align-items-center">
      <div className="not-found">
        <Shrug className="centered big-text" />
        <div className="not-found-description">
          <div className="not-found-title">
            <Text phrase="NotFound.title" />
          </div>
          <div className="not-found-text">
            <Text phrase="NotFound.description" />
          </div>
        </div>
        <div className="not-found-link">
          <Link to="/">
            <Button className="not-found-button">
              <Text phrase="NotFound.link" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
