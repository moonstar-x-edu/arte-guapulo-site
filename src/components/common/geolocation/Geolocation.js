import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const positionOptions = {
  timeout: Infinity,
  maximumAge: 0,
  enableHighAccuracy: true
};

class Geolocation extends Component {
  constructor(props) {
    super(props);

    this.getLocation = this.getLocation.bind(this);
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.onGetLocation(position.coords);
    }, null, positionOptions);
  }

  render() {
    if (!navigator.geolocation) {
      return (
        <Button variant="dark" disabled>
          CANT GET LOCATION
        </Button>
      );
    }

    return (
      <Button variant="dark" onClick={this.getLocation}>
        GET LOCATION
      </Button>
    );
  }
}

Geolocation.propTypes = {
  onGetLocation: PropTypes.func.isRequired
};

export default Geolocation;
