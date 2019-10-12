import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Text from '../../text';

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
        <Button className="w-100" variant="primary" disabled>
          <Text phrase="Form.geolocation.disabled" />
        </Button>
      );
    }

    return (
      <Button className="w-100" variant="primary" onClick={this.getLocation}>
        <Text phrase="Form.geolocation.enabled" />
      </Button>
    );
  }
}

Geolocation.propTypes = {
  onGetLocation: PropTypes.func.isRequired
};

export default Geolocation;
