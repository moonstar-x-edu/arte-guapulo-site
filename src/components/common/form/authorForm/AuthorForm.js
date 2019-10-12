import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Col, Button } from 'react-bootstrap';
import { t } from '../../../../i18n';

class AuthorForm extends Component {
  constructor(props) {
    super(props);

    this.handleFacebookChange = this.handleFacebookChange.bind(this);
    this.handleTwitterChange = this.handleTwitterChange.bind(this);
    this.handleInstagramChange = this.handleInstagramChange.bind(this);
  }

  changeAccountValue(account, value) {
    const { onChange, index } = this.props;

    onChange(index, account, value);
  }

  handleFacebookChange(event) {
    this.changeAccountValue('facebook', event.target.value);
  }

  handleTwitterChange(event) {
    this.changeAccountValue('twitter', event.target.value);
  }

  handleInstagramChange(event) {
    this.changeAccountValue('instagram', event.target.value);
  }

  render() {
    const { author: { facebook, twitter, instagram } } = this.props;

    return (
      <Form.Row className="authors-row">

        <Col xs={10} sm={10}>
          <Form.Group className="authors-inner-group" as={Col} sm={4} controlId="formAuthorFacebook">
            <Form.Label className="font-weight-bold">Facebook</Form.Label>
            <Form.Control
              type="text"
              placeholder={t('Form.authors.facebook')}
              value={facebook}
              onChange={this.handleFacebookChange}
            />
          </Form.Group>

          <Form.Group className="authors-inner-group" as={Col} sm={4} controlId="formAuthorTwitter">
            <Form.Label className="font-weight-bold">Twitter</Form.Label>
            <Form.Control
              type="text"
              placeholder={t('Form.authors.twitter')}
              value={twitter}
              onChange={this.handleTwitterChange}
            />
          </Form.Group>

          <Form.Group className="authors-inner-group" as={Col} sm={4} controlId="formAuthorInstagram">
            <Form.Label className="font-weight-bold">Instagram</Form.Label>
            <Form.Control
              type="text"
              placeholder={t('Form.authors.instagram')}
              value={instagram}
              onChange={this.handleInstagramChange}
            />
          </Form.Group>
        </Col>

        <Form.Group as={Col} xs={2} sm={2} controlId="formAuthorRemove">
          <Button
            className="author-remove-button"
            variant="danger"
            onClick={() => this.props.onRemove(this.props.index)}
          >
            X
          </Button>
        </Form.Group>

      </Form.Row>
    );
  }
}

AuthorForm.propTypes = {
  author: PropTypes.exact({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default connect()(AuthorForm);
