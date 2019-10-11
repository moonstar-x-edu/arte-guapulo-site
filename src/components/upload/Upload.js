import React, { Component } from 'react';
import { withFirebase } from '../../firebase';
import { Form, Row, Col, Button } from 'react-bootstrap';
import StatusMessages from './StatusMessages';
import { Geolocation, AuthorForm, TagsForm } from '../common/form';
import { ENTER_ASCII_CODE } from '../../constants';

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      progress: 0,
      error: null,
      form: {
        imageURL: '',
        coordinates: {
          latitude: null,
          longitude: null
        },
        authors: [],
        tags: []
      },
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

  render() {
    const {
      error,
      progress,
      form: {
        imageURL,
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

    return (
      <div>
        <StatusMessages progress={progress} imageURL={imageURL} error={error} />
        <Form className="form">

          <Form.Group as={Row} controlId="formImage">
            <Form.Label column sm={2}>
              IMAGE
            </Form.Label>
            <Col sm={10}>
              <Form.Control ref="imageUpload" type="file" onChange={this.handleFileInput} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formLocation">
            <Form.Label column sm={2}>
              LOCATION
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
              AUTHORS
            </Form.Label>
            <Col sm={10}>
              <Form.Row>
                <Button onClick={this.handleAddAuthor}>
                  ADD AUTHOR
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
              TAGS
            </Form.Label>
            <Col sm={10}>
              <Form.Row>
                <Form.Control
                  type="text"
                  placeholder="Tag..."
                  value={tag}
                  isInvalid={tagError}
                  onChange={this.handleNewTagChange}
                  onKeyPress={this.handleTagEnter}
                />
                <Button onClick={this.handleAddTag}>
                  ADD
                </Button>
              </Form.Row>
              <Form.Row>
                <TagsForm tags={tags} onRemove={this.handleRemoveTag}/>
              </Form.Row>
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
