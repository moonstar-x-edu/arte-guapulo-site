import React, { Component } from 'react';
import { withFirebase } from '../../firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, Row, Col, Button } from 'react-bootstrap';
import ImageStatusMessages from './ImageStatusMessages';
import UploadStatusMessages from './UploadStatusMessages';
import { Geolocation, AuthorForm, TagsForm } from '../common/form';
import Text from '../common/text';
import Actions from '../../redux/actions';
import { ENTER_ASCII_CODE, UPLOAD_DONE_TIMEOUT, UPLOAD_IMAGE_TIMEOUT } from '../../constants';

const { postPiece, clearDone } = Actions;

const initialFormState = {
  image: '',
  coordinates: {
    latitude: null,
    longitude: null
  },
  authors: [],
  tags: []
};

class Upload extends Component {
  static getDerivedStateFromProps(props, state) {
    if (props.upload.done) {
      setTimeout(() => {
        props.clearDone();
      }, UPLOAD_DONE_TIMEOUT);
      return {
        form: {
          ...initialFormState,
          tags: state.form.tags
        }
      }
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      image: '',
      progress: 0,
      error: null,
      form: initialFormState,
      newTag: {
        tag: '',
        error: null
      }
    };

    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleUploadProgress = this.handleUploadProgress.bind(this);
    this.handleUploadError = this.handleUploadError.bind(this);
    this.handleUploadComplete = this.handleUploadComplete.bind(this);

    this.handleLocation = this.handleLocation.bind(this);

    this.handleAddAuthor = this.handleAddAuthor.bind(this);
    this.handleRemoveAuthor = this.handleRemoveAuthor.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);

    this.handleNewTagChange = this.handleNewTagChange.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleTagEnter = this.handleTagEnter.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
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

    const { image, form } = this.state;
    const { firebase } = this.props;

    if (form.image) {
      this.postPiece(form.image);
    }

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

  handleUploadComplete(image) {
    const { form } = this.state;
    this.refs.imageUpload.value = '';

    this.postPiece(image);

    this.setState({
      image: null,
      form: {
        ...form,
        image
      }
    }, () => {
      setTimeout(() => {
        this.setState({
          progress: 0
        });
      }, UPLOAD_IMAGE_TIMEOUT);
    });
  }

  handleLocation(coords) {
    this.setState({
      form: {
        ...this.state.form,
        coordinates: {
          latitude: coords.latitude,
          longitude: coords.longitude
        }
      }
    });
  }

  handleAddAuthor() {
    const { form } = this.state;

    const newAuthors = [
      ...form.authors,
      {
        facebook: '',
        twitter: '',
        instagram: ''
      }
    ];

    this.setState({
      form: {
        ...form,
        authors: newAuthors
      }
    })
  }

  handleRemoveAuthor(index) {
    const { form } = this.state;

    const newAuthors = form.authors.filter((_, i) => i !== index);

    this.setState({
      form: {
        ...form,
        authors: newAuthors
      }
    });
  }

  handleAuthorChange(index, key, value) {
    const { form } = this.state;

    const newAuthors = form.authors.map((author, i) => {
      return i === index ? {
        ...author,
        [key]: value
      } : author;
    });

    this.setState({
      form: {
        ...form,
        authors: newAuthors
      }
    });
  }

  handleNewTagChange(event) {
    this.setState({
      newTag: {
        tag: event.target.value,
        error: null
      }
    });
  }

  handleAddTag() {
    const { form, newTag: { tag } } = this.state;

    const newState = (tag === '' || form.tags.includes(tag)) ?
      {
        newTag: {
          tag,
          error: true
        }
      } :
      {
        form: {
          ...form,
          tags: [
            ...form.tags,
            tag
          ]
        },
        newTag: {
          tag: '',
          error: null
        }
      };

    this.setState(newState);
  }

  handleTagEnter(event) {
    if (event.which !== ENTER_ASCII_CODE) {
      return;
    }

    this.handleAddTag();
  }

  handleRemoveTag(index) {
    const { form } = this.state;

    const newTags = form.tags.filter((_, i) => i !== index);

    this.setState({
      form: {
        ...form,
        tags: newTags
      }
    })
  }

  postPiece(image) {
    const { form } = this.state;

    this.props.postPiece({
      ...form,
      image
    });
  }

  render() {
    const {
      error,
      progress,
      form: {
        image: imageURL,
        coordinates: {
          latitude,
          longitude
        },
        authors,
        tags
      },
      newTag: {
        tag,
        error: tagError
      }
    } = this.state;
    const { upload: { loading: uploading, error: uploadError, done } } = this.props;

    return (
      <div>
        <ImageStatusMessages progress={progress} imageURL={imageURL} error={error} />
        <UploadStatusMessages uploading={uploading} error={uploadError} done={done} />
        <Form className="form">

          <Form.Group as={Row} controlId="formImage">
            <Form.Label column sm={2}>
              <Text phrase="Upload.form.image" />
            </Form.Label>
            <Col sm={10}>
              <Form.Control ref="imageUpload" type="file" onChange={this.handleFileInput} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formLocation">
            <Form.Label column sm={2}>
              <Text phrase="Upload.form.location" />
            </Form.Label>
            <Col sm={10}>
              <Form.Row>
                <Geolocation onGetLocation={this.handleLocation} />
              </Form.Row>
              <Form.Row>
                <span>Lat: {latitude || 'N/A'} - Lon: {longitude || 'N/A'}</span>
              </Form.Row>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formAuthors">
            <Form.Label column sm={2}>
              <Text phrase="Upload.form.authors" />
            </Form.Label>
            <Col sm={10}>
              <Form.Row>
                <Button onClick={this.handleAddAuthor}>
                  <Text phrase="Upload.form.authors.add" />
                </Button>
              </Form.Row>
              <Form.Row>
                {
                  Object.keys(authors).map((author, index) => (
                    <AuthorForm
                      key={index}
                      author={authors[author]}
                      index={index}
                      onRemove={this.handleRemoveAuthor}
                      onChange={this.handleAuthorChange}
                    />
                  ))
                }
              </Form.Row>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTags">
            <Form.Label column sm={2}>
              <Text phrase="Upload.form.tags" />
            </Form.Label>
            <Col sm={8}>
              <Form.Row>
                <Form.Control
                  type="text"
                  placeholder="Tag..."
                  value={tag}
                  isInvalid={tagError}
                  onChange={this.handleNewTagChange}
                  onKeyPress={this.handleTagEnter}
                />
              </Form.Row>
              <Form.Row>
                <TagsForm tags={tags} onRemove={this.handleRemoveTag}/>
              </Form.Row>
            </Col>
            <Col sm={2}>
              <Button onClick={this.handleAddTag}>
                <Text phrase="Upload.form.tags.add" />
              </Button>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button onClick={this.handleUpload} disabled={uploading || done}>
                <Text phrase="Upload.form.submit" />
              </Button>
            </Col>
          </Form.Group>

        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    upload: state.upload
  };
};

export default compose(
  connect(mapStateToProps, { postPiece, clearDone }),
  withFirebase
)(Upload);
