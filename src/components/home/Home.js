import React, { Component } from 'react';
import { connect } from 'react-redux';
import TagSearch from '../common/tagSearch';
import { updatePageTitle } from '../../utils';

class Home extends Component {
  componentDidMount() {
    updatePageTitle('Site.title.home');
  }

  componentDidUpdate(prevProps) {
    const { app: { locale: oldLocale } } = prevProps;
    const { app: { locale: newLocale } } = this.props;

    if (oldLocale !== newLocale) {
      updatePageTitle('Site.title.home');
    }
  }

  render() {
    return (
      <div>
        HOME!
        <TagSearch />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};

export default connect(mapStateToProps)(Home);
