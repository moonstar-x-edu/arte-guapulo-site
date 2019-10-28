import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import TagsForm from '../form/tagsForm';
import { ENTER_ASCII_CODE } from '../../../constants';

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
    const { filters, onAdd } = this.props;
    const { input } = this.state;

    if (filters.includes(input)) {
      return this.setState({
        error: true
      });
    }

    onAdd(input);
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
    const { className, filters } = this.props;
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
            placeholder="Filter By Tags"
            aria-label="Tag Search"
            aria-describedby="tag-search"
            value={input}
            isInvalid={error}
            onChange={this.handleInputChange}
            onKeyPress={this.handleEnter}
          />
        </InputGroup>
        <TagsForm tags={filters} onRemove={this.props.onRemove} />
        <Button className="tag-search-button" onClick={this.handleButtonClick}>
          Add Filter!
        </Button>
      </div>
    );
  }
}

TagSearch.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.string),
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

TagSearch.defaultProps = {
  className: '',
  filters: []
};

export default TagSearch;
