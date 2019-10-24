import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import TagsForm from '../form/tagsForm';
import { ENTER_ASCII_CODE } from '../../../constants';

class TagSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      input: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTagRemove = this.handleTagRemove.bind(this);
    this.handleTagAdd = this.handleTagAdd.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleTagRemove(index) {
    const { filters } = this.state;
    const newFilters = [...filters.slice(0, index), ...filters.slice(index + 1)];

    this.setState({
      filters: newFilters
    });
  }

  handleTagAdd() {
    const { filters, input } = this.state;
    const newFilters = [...filters, input];

    this.setState({
      filters: newFilters,
      input: ''
    });
  }

  handleButtonClick() {
    this.handleTagAdd();
  }

  handleEnter(event) {
    if (event.which !== ENTER_ASCII_CODE) {
      return;
    }

    this.handleTagAdd();
  }

  render() {
    const { className } = this.props;
    const { filters, input } = this.state;

    return (
      <div className={`tag-search form ${className}`}>
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
            onChange={this.handleInputChange}
            onKeyPress={this.handleEnter}
          />
        </InputGroup>
        <TagsForm tags={filters} onRemove={this.handleTagRemove} />
        <Button className="tag-search-button" onClick={this.handleButtonClick}>
          Add Filter!
        </Button>
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

export default TagSearch;
