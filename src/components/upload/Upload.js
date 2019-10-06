import React, { Component } from 'react';
import { withFirebase } from '../../firebase';

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      progress: null,
      imageURL: '',
      error: null
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
      progress: null,
      image: null
    });
  }

  handleUploadComplete(imageURL) {
    this.refs.imageUpload.value = '';

    this.setState({
      imageURL,
      progress: null,
      image: null
    });
  }

  render() {
    const { error, progress } = this.state;

    return (
      <div>
        {
          progress &&
            <span>PROGRESS: {progress * 100}%</span>
        }
        {
          error &&
            <span>ERROR: {error}</span>
        }
        <form>
          <input ref="imageUpload" type="file" onChange={this.handleFileInput} />
          <button onClick={this.handleUpload}>Upload!</button>
        </form>
      </div>
    );
  }
}

export default withFirebase(Upload);
