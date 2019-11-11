import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import Carousel from '../common/carousel';
import { updatePageTitle } from '../../utils';

const options = [
  {
    id: 1,
    imgURL: 'https://www.yogajournal.com/.image/t_share/MTUxMDUxNDQ2NDQyMjcyNzA5/fearless.jpg',
    titleKey: 'Site.title.home',
    captionKey: 'Site.title.home'
  },
  {
    id: 1,
    imgURL: 'https://www.yogajournal.com/.image/t_share/MTUxMDUxNDQ2NDQyMjcyNzA5/fearless.jpg',
    captionKey: 'Site.title.home'
  },
  {
    id: 1,
    imgURL: 'https://www.yogajournal.com/.image/t_share/MTUxMDUxNDQ2NDQyMjcyNzA5/fearless.jpg',
  }
];

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
        <Jumbotron>
          <h1>Test</h1>
          <p>Testing...</p>
          <Carousel options={options} />
        </Jumbotron>
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
