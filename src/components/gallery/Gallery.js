import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../redux/actions'
import { CardColumns } from 'react-bootstrap';
import ImageCard from  '../common/imageCard';
import GalleryMessages from './GalleryMessages';
import TagSearch from '../common/tagSearch';
import { updatePageTitle } from '../../utils';

const { getGallery } = Actions;

class Gallery extends Component {
  componentDidMount() {
    updatePageTitle('Site.title.gallery');
    this.props.getGallery();
  }

  componentDidUpdate(prevProps) {
    const { app: { locale: oldLocale } } = prevProps;
    const { app: { locale: newLocale } } = this.props;

    if (oldLocale !== newLocale) {
      updatePageTitle('Site.title.gallery');
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      filters: []
    };

    this.handleTagAdd = this.handleTagAdd.bind(this);
    this.handleTagRemove = this.handleTagRemove.bind(this);
  }

  handleTagAdd(value) {
    const { filters } = this.state;
    const newFilters = [...filters, value];

    this.setState({
      filters: newFilters
    });
  }

  handleTagRemove(index) {
    const { filters } = this.state;
    const newFilters = [...filters.slice(0, index), ...filters.slice(index + 1)];

    this.setState({
      filters: newFilters
    });
  }

  getFilteredData() {
    const { data } = this.props.gallery;
    const { filters } = this.state;

    return filters.length > 0
      ? data.filter((piece) => {
        return filters.every((filter) => {
          return piece.tags.includes(filter);
        });
      })
      : data;
  }

  render() {
    const { loading, error } = this.props.gallery;
    const { filters } = this.state;

    const data = this.getFilteredData();

    return (
      <div className="gallery">
        <TagSearch filters={filters} onAdd={this.handleTagAdd} onRemove={this.handleTagRemove} />
        <GalleryMessages loading={loading} error={error} dataSize={data.length} />
        <CardColumns>
          {
            data.map((piece) => (
              <ImageCard
                key={piece.id}
                piece={piece.id}
                imageURL={piece.image}
                authors={piece.authors}
                coordinates={piece.coordinates}
                tags={piece.tags}
              />
            ))
          }
        </CardColumns>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    gallery: state.gallery
  };
};

export default connect(mapStateToProps, { getGallery })(Gallery);
