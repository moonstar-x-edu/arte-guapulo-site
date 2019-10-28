import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../../../redux/actions';
import { InputGroup, FormControl, Button, Col, Row } from 'react-bootstrap';
import TagsForm from '../form/tagsForm';
import Text from '../text';
import { t } from '../../../i18n';
import { ENTER_ASCII_CODE } from '../../../constants';

const { addFilter, removeFilter, filterReset } = Actions;

class TagSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      error: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value,
      error: false
    });
  }

  handleAdd() {
    const { addFilter, gallery: { filters } } = this.props;
    const { input } = this.state;

    if (filters.includes(input) || !input) {
      return this.setState({
        error: true
      });
    }

    addFilter(input);
    this.setState({
      input: ''
    });
  }

  handleButtonClick() {
    this.handleAdd();
  }

  handleEnter(event) {
    if (event.which !== ENTER_ASCII_CODE) {
      return;
    }

    this.handleAdd();
  }

  render() {
    const { className, gallery: { filters }, removeFilter, filterReset } = this.props;
    const { input, error } = this.state;

    return (
      <div className={`tag-search form mb-3 ${className}`}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="tag-search">
              #
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder={t('Gallery.filters.search.placeholder')}
            aria-label="Tag Search"
            aria-describedby="tag-search"
            value={input}
            isInvalid={error}
            onChange={this.handleInputChange}
            onKeyPress={this.handleEnter}
          />
        </InputGroup>
        <TagsForm tags={filters} onRemove={removeFilter} />
        <Row className="tag-search-buttons">
          <Col sm={12} md={{ span: 3, offset: 6 }} className="tag-search-button-col">
            <Button className="tag-search-button" onClick={filterReset}>
              <Text phrase="Gallery.filters.search.reset" />
            </Button>
          </Col>
          <Col sm={12} md={3} className="tag-search-button-col">
            <Button className="tag-search-button" onClick={this.handleButtonClick}>
              <Text phrase="Gallery.filters.search.add" />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

TagSearch.propTypes = {
  className: PropTypes.string
};

TagSearch.defaultProps = {
  className: ''
};

const mapStateToProps = (state) => {
  return {
    app: state.app,
    gallery: state.gallery
  };
};

export default connect(mapStateToProps, { addFilter, removeFilter, filterReset })(TagSearch);
