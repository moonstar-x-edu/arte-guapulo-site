import React, { Component } from 'react';
import { withFirebase } from '../../firebase';
import { Form, Row, Col, Button } from 'react-bootstrap';
import StatusMessages from './StatusMessages';

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      progress: 0,
      error: null,
      form: {
        imageURL: '',
      }
    };

    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleUploadProgress = this.handleUploadProgress.bind(this);
    this.handleUploadError = this.handleUploadError.bind(this);
    this.handleUploadComplete = this.handleUploadComplete.bind(this);
  }

  handleFileInput(event) {
    const [image] = event.target.files;

    if (image) {
      this.setState({
        image
      });
    }
  }

  handleUpload(event) {
    event.preventDefault();

    const { image } = this.state;
    const { firebase } = this.props;

    if (!image) {
      return;
    }

    firebase.uploadImage(image, this.handleUploadProgress, this.handleUploadError, this.handleUploadComplete);
  }

  handleUploadProgress(progress) {
    this.setState({
      progress
    });
  }

  handleUploadError(error) {
    this.refs.imageUpload.value = '';

    this.setState({
      error,
      progress: 0,
      image: null
    });
  }

  handleUploadComplete(imageURL) {
    this.refs.imageUpload.value = '';

    this.setState({
      image: null,
      form: {
        imageURL
      }
    }, () => {
      setTimeout(() => {
        this.setState({
          progress: 0
        });
      }, 2000);
    });
  }

  render() {
    const { error, progress, form: { imageURL } } = this.state;

    return (
      <div>
        <StatusMessages progress={progress} imageURL={imageURL} error={error} />
        <Form>
          <Form.Group as={Row} controlId="formImage">
            <Form.Label column sm={2}>
              IMAGE
            </Form.Label>
            <Col sm={10}>
              <Form.Control ref="imageUpload" type="file" onChange={this.handleFileInput} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={this.handleUpload}>
                SUBMIT
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default withFirebase(Upload);
